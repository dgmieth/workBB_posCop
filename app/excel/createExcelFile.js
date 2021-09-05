const Excel = require('exceljs')
const pool = require('../mysql/mysql')
const path = require('path')
const createWhereClause = require('../functions/createWhereClause')
const registraLog = require('../functions/registraLog')

module.exports = async (valuesObj, matricula, cb)=>{
    const today = new Date()
    var whereClause = createWhereClause(valuesObj)
    pool.query( `SELECT  
    CASE
    WHEN qpc.VLDC_REG_ACRD =1 
    THEN 'Sim'
    WHEN qpc.VLDC_REG_ACRD = 0
    THEN 'Não'
    ELSE 'Duplicado'
    END as acordoRegistrado,
    qpc.NR_UNCO_CTR_OPR as nrUnicoAnterior,
    qpc.mci,
    qpc.NR_UNCO_CTR_VCLD as nrUnicoAtual,
    qpc.SG_SIS_RSP_CDU_VCLD as sistema,
    qpc.CD_PRF_DEPE_CDU_VCLD as prefixo,
    qpc.NR_PRC as NPJ,
    qpc.TX_NR_PRC_VCLD as situacaVinculoOperacao,
    DATE_FORMAT(qpc.insertedIn, '%d/%m/%y') as entradaNaBase,
    CASE
        WHEN qpc.regAnalisado = 1
        THEN 'Sim'
        ELSE 'Não'
    END AS analisado,
    CASE 
        WHEN qpc.quarentenaAte <= (SELECT fepc.dataInicioEstoque FROM creditoPosCop.fluxoEstoquePosCop fepc WHERE fepc.txt = 'Estoque')
        THEN 'Estoque'
        ELSE 'Fluxo'
    END as tipoRegistro
    FROM creditoPosCop.quarentenaPosCop qpc
    WHERE qpc.protCriado = 0 
    AND CURRENT_TIMESTAMP() > qpc.quarentenaAte ${whereClause}
    ORDER BY qpc.insertedIn `, 
    async (err,results)=>{
        if(err){
            cb(err,null)
        }else{
            const fileName = `registros_${today.getUTCFullYear()}${today.getUTCMonth()+1}${today.getUTCDate()}_${today.getHours()}${today.getMinutes()}${today.getSeconds()}_qtdeRegistros${results.length}`
            var indexCharacter = whereClause.indexOf('\'',0)
                    do {
                        whereClause = whereClause.replace(/\'/, '')    
                        indexCharacter = whereClause.indexOf('\'',0)
                    } while (whereClause.indexOf('\'',indexCharacter) > 0);
                    if(whereClause.length == 0){
                        whereClause = 'nenhuma configuração selecionada'
                    }
                    registraLog(matricula, `Geração de planilha com registros: ${fileName}. Filtros: ${whereClause}. Qtde registros retornados: ${results.length}`,(err,results)=>{})
                    const wb = new Excel.Workbook()
                    const ws = wb.addWorksheet('registros')
                    ws.columns = [
                        {header: 'acordoRegistrado', key: 'acordoRegistrado', width: 19},
                        {header: 'nrUnicoAnterior', key: 'nrUnicoAnterior', width: 18},
                        {header: 'mci', key: 'mci', width: 10},
                        {header: 'nrUnicoAtual', key: 'nrUnicoAtual', width: 18},
                        {header: 'sistema', key: 'sistema', width: 10},
                        {header: 'prefixo', key: 'prefixo', width: 10},
                        {header: 'NPJ', key: 'NPJ', width: 12},
                        {header: 'situacaVinculoOperacao', key: 'situacaVinculoOperacao', width: 25},
                        {header: 'entradaNaBase', key: 'entradaNaBase', width: 18, style: {numFmt: 'dd/mm/yyyy'}},
                        {header: 'analisado', key:'analisado',width:10},
                        {header: 'tipoRegistro', key: 'tipoRegistro', width: 14}
                    ]
                    ws.autoFilter = 'A1:J1'
                    results.forEach((e,index)=>{
                        ws.addRow({...e})
                    })
                    await wb.xlsx.writeFile(path.join(__dirname,`../excel/fileCreation/${fileName}.xlsx`))
                    cb(null, fileName)
                }
    })
}