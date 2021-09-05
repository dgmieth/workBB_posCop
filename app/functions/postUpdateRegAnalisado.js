const pool = require('../mysql/mysql')
module.exports = (data, callback)=> {
    const arrayLength = data.length
    var queryResults = []
    data.forEach((reg,index) => {
        pool.query(`UPDATE creditoPosCop.quarentenaPosCop t
                    SET t.regAnalisado = 1
                    WHERE VLDC_REG_ACRD IN (${reg.VLDC_REG_ACR}) AND NR_UNCO_CTR_OPR IN ('${reg.NR_UNCO_CTR_OPR}') AND MCI IN ('${reg.MCI}')
                        AND NR_UNCO_CTR_VCLD IN ('${reg.NR_UNCO_CTR_VCLD}') AND SG_SIS_RSP_CDU_VCLD IN ('${reg.SG_SIS_RSP_CDU_VCLD}') 
                        AND CD_PRF_DEPE_CDU_VCLD IN (${reg.CD_PRF_DEPE_CDU_VCLD})
                        AND NR_PRC IN (${reg.NR_PRC}) AND TX_NR_PRC_VCLD IN ('${reg.TX_NR_PRC_VCLD}') 
                        AND regAnalisado IN (${reg.regAnalisado})
                        AND regExcluido IN (${reg.regExcluido});`, (err,results)=>{
                    if(err){
                        callback({error: err},undefined)
                    }else{
                        queryResults.push(results)
                        if(queryResults.length===arrayLength){
                            callback(undefined,{success: `${queryResults.length} analisado(s)!`})
                        }
                    }
                }) 
        })
}