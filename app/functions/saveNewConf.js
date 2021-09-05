const pool = require('../mysql/mysql')
const registraLog = require('./registraLog')

module.exports = (obj, matricula, callback) => {
    var listPrefSQL = new String()
    var gecorSelected = 0
    if(obj['listaPrefixos'].length > 0){
        gecorSelected = 1
        listPrefSQL = 'UPDATE creditoPosCop.listPrefGecorPosCop SET filtroSetado = 1 WHERE prefixos IN ('
        for (let index = 0; index < obj['listaPrefixos'].length; index++) {
            listPrefSQL = listPrefSQL + obj['listaPrefixos'][index]
            if(index < obj['listaPrefixos'].length -1 ){
                listPrefSQL = listPrefSQL + ','
            }
        }
        listPrefSQL = listPrefSQL + ');'
    }
    pool.query(`UPDATE creditoPosCop.posCopConfLog SET	excluido = 1, excluidoPor = '${matricula}', exlcuidoEm = CURRENT_TIMESTAMP() WHERE excluido = 0;
                UPDATE creditoPosCop.pubAlvoPosCop SET filtroSetado = ${obj.publicoAlvoSim} WHERE txt = 'Sim'; 
                UPDATE creditoPosCop.pubAlvoPosCop SET filtroSetado = ${obj.publicoAlvoNao} WHERE txt = 'Nao';
                UPDATE creditoPosCop.pubAlvoPosCop SET filtroSetado = ${obj.publicoAlvoALVA} WHERE txt = 'ALVA';
                UPDATE creditoPosCop.sisResponsavelPosCop SET filtroSetado = ${obj.COP} WHERE txt = 'COP';
                UPDATE creditoPosCop.sisResponsavelPosCop SET filtroSetado = ${obj.XER} WHERE txt = 'XER';
                UPDATE creditoPosCop.prefGecorPosCop SET filtroSetado = ${gecorSelected};
                UPDATE creditoPosCop.listPrefGecorPosCop SET filtroSetado = 0 WHERE filtroSetado = 1; 
                ${listPrefSQL} 
                UPDATE creditoPosCop.sitVinculoOprPosCop SET filtroSetado = ${obj.operacaoNaoVinculada} WHERE txt = 'Operação não vinculada';
                UPDATE creditoPosCop.sitVinculoOprPosCop SET filtroSetado = ${obj.operacaoVinculada} WHERE txt = 'Vinculada';
                UPDATE creditoPosCop.sitVinculoOprPosCop SET filtroSetado = ${obj.operacaoVinculadaEmOutroNPJ} WHERE txt = 'Vinculada em outro NPJ';
                UPDATE creditoPosCop.regAcrdValidadoPosCop SET filtroSetado = ${obj.acordoRegPortalSim} WHERE txt = 'Sim';
                UPDATE creditoPosCop.regAcrdValidadoPosCop SET filtroSetado = ${obj.acordoRegPortalNao} WHERE txt = 'Nao';
                UPDATE creditoPosCop.regAcrdValidadoPosCop SET filtroSetado = ${obj.duplicadoSimNao} WHERE txt = 'Duplicado';
                UPDATE creditoPosCop.regAcrdValidadoPosCop SET filtroSetado = ${obj.analisadoSimNao} WHERE txt = 'Analisado';
                UPDATE creditoPosCop.fluxoEstoquePosCop SET qtde = ${obj.estoqueNumber} WHERE txt = 'Estoque';
                UPDATE creditoPosCop.fluxoEstoquePosCop SET qtde = ${obj.fluxoNumber} WHERE txt = 'Fluxo';`, 
    (err,results, fields)=>{
        if(err){
            callback({error: err}, undefined)
        }else{
            pool.query(`INSERT INTO creditoPosCop.posCopConfLog (criadoPor,pubAlvoPosCop,regAcrdValidadoPosCop,sisResponsavelPosCop,prefGecorPosCop,sitVinculoOprPosCop,fluxoEstoquePosCop)
                        VALUES ('${matricula}',CONCAT(  CASE WHEN ${obj.publicoAlvoSim} = 1 THEN 'Sim;' ELSE '_;' END,
                                                    CASE WHEN ${obj.publicoAlvoNao} = 1 THEN 'Nao;' ELSE '_;' END,
                                                    CASE WHEN ${obj.publicoAlvoALVA} = 1 THEN 'ALVA' ELSE '_' END),
                                            CONCAT( CASE WHEN ${obj.acordoRegPortalSim} THEN 'Sim;' ELSE '_;' END, 
                                                    CASE WHEN ${obj.acordoRegPortalNao} THEN 'Nao;' ELSE '_;' END,
                                                    CASE WHEN ${obj.duplicadoSimNao} THEN 'Duplicado;' ELSE '_;' END,
                                                    CASE WHEN ${obj.analisadoSimNao} THEN 'Analisado' ELSE '_' END),
                                            CONCAT( CASE WHEN ${obj.XER} THEN 'XER;' ELSE '_;' END,
                                                    CASE WHEN ${obj.COP} THEN 'COP' ELSE '_' END),
                                            CONCAT( CASE WHEN ${gecorSelected} = 1 THEN '${obj['listaPrefixos']}' ELSE '_' END),
                                            CONCAT( CASE WHEN ${obj.operacaoVinculada} THEN 'Vinculada;' ELSE '_;' END,
                                                    CASE WHEN ${obj.operacaoNaoVinculada} THEN 'Nao Vinculada;' ELSE '_;' END,
                                                    CASE WHEN ${obj.operacaoVinculadaEmOutroNPJ} THEN 'Vinculada em Outro NPJ' ELSE '_' END),
                                            CONCAT( CASE WHEN ${obj.fluxoNumber} > 0 THEN  'Fluxo: ${obj.fluxoNumber};' ELSE '_;' END,
                                                    CASE WHEN ${obj.estoqueNumber} > 0 THEN 'Estoque: ${obj.estoqueNumber}' ELSE '_' END));`, (err,results,fields)=>{
                                            if(err){
                                                callback({error: err}, undefined)
                                            }else{
                                                registraLog(matricula,'Nova configuração salva',(error,success)=>{
                                                    if (error) {
                                                        callback({error: err}, undefined)
                                                    }else{
                                                        //console.log(`configuração alterar por ${matricula}`)
                                                        callback(undefined,{succes: 'Nova configuração salva'})
                                                    }
                                                })
                                            }
                                        })
        }
    })
}