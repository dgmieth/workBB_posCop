const pool = require('../mysql/mysql')
const regerarProtocolos = require('./regerarProtocolos')

module.exports = (valuesObj)=>{
    var whereClause = new Array()
    var publicoAlvoSim = valuesObj.publicoAlvoSim
    var publicoAlvoNao = valuesObj.publicoAlvoNao
    var publicoAlvoALVA = valuesObj.publicoAlvoALVA
    var XER = valuesObj.XER
    var COP = valuesObj.COP
    var listPref = valuesObj['listaPrefixos']
    var operacaoNaoVinculada = valuesObj.operacaoNaoVinculada
    var operacaoVinculada = valuesObj.operacaoVinculada
    var operacaoVinculadaEmOutroNPJ = valuesObj.operacaoVinculadaEmOutroNPJ
    var acordoRegPortalSim = valuesObj.acordoRegPortalSim
    var acordoRegPortalNao = valuesObj.acordoRegPortalNao
    var acordoRegPortalDuplicados = valuesObj.acordoRegPortalDuplicados
    var duplicadoSimNao = valuesObj.duplicadoSimNao
    var analisadoSimNao = valuesObj.analisadoSimNao

    var whereClaseTestFluxo = ''
    var whereClaseTestEstoque = ''
    
    if(publicoAlvoSim===1  && publicoAlvoNao===0 && publicoAlvoALVA===0){
        whereClause.push("(qpc.PBCO_ALVO IN('Sim'))")
    } else if(publicoAlvoSim===1  && publicoAlvoNao===1 && publicoAlvoALVA===0){
        whereClause.push("(qpc.PBCO_ALVO IN('Sim','N'))")
    } else if(publicoAlvoSim===1  && publicoAlvoNao===0 && publicoAlvoALVA===1){
        whereClause.push("(qpc.PBCO_ALVO IN('Sim','ALVA'))")
    } else if(publicoAlvoSim===1  && publicoAlvoNao===1 && publicoAlvoALVA===1){
        whereClause.push("(qpc.PBCO_ALVO IN('Sim','N','ALVA'))")
    } else if(publicoAlvoSim===0  && publicoAlvoNao===0 && publicoAlvoALVA===0){
        
    } else if(publicoAlvoSim===0  && publicoAlvoNao===1 && publicoAlvoALVA===0){
        whereClause.push("(qpc.PBCO_ALVO IN('N'))")
    } else if(publicoAlvoSim===0  && publicoAlvoNao===1 && publicoAlvoALVA===1){
        whereClause.push("(qpc.PBCO_ALVO IN('N','ALVA'))")
    } else if(publicoAlvoSim===0  && publicoAlvoNao===0 && publicoAlvoALVA===1){
        whereClause.push("(qpc.PBCO_ALVO IN('ALVA'))")
    } 

    if(XER==0 && COP===0){

    } else if (XER==1 && COP===0){
        whereClause.push("(qpc.SG_SIS_RSP_CDU_VCLD IN('XER'))")
    } else if (XER==1 && COP===1){
        whereClause.push("(qpc.SG_SIS_RSP_CDU_VCLD IN('XER','COP'))")
    } else if (XER==0 && COP===1){
        whereClause.push("(qpc.SG_SIS_RSP_CDU_VCLD IN('COP'))")
    } 
    // if(gecorSomenteSim===1){
    //     whereClause.push("(qpc.CD_PRF_DEPE_CDU_VCLD IN ((SELECT lpgpc.prefixos FROM creditoPosCop.listPrefGecorPosCop lpgpc)))")
    // }
    if(listPref === undefined){
    
    }else if(listPref.length > 0){
        whereClause.push(`(qpc.CD_PRF_DEPE_CDU_VCLD IN (${listPref}))`)
    }
    if(operacaoNaoVinculada===1 && operacaoVinculada===0 && operacaoVinculadaEmOutroNPJ===0){
        whereClause.push("(qpc.TX_NR_PRC_VCLD IN('Operacao nao vinculada'))")
    } else if(operacaoNaoVinculada===1 && operacaoVinculada===1 && operacaoVinculadaEmOutroNPJ===0){
        whereClause.push("(qpc.TX_NR_PRC_VCLD IN('Operacao nao vinculada','Vinculada'))")
    } else if(operacaoNaoVinculada===1 && operacaoVinculada===0 && operacaoVinculadaEmOutroNPJ===1){
        whereClause.push("(qpc.TX_NR_PRC_VCLD IN('Operacao nao vinculada','Vinculada em outro NPJ'))")
    } else if(operacaoNaoVinculada===1 && operacaoVinculada===1 && operacaoVinculadaEmOutroNPJ===1){
        whereClause.push("(qpc.TX_NR_PRC_VCLD IN('Operacao nao vinculada','Vinculada','Vinculada em outro NPJ'))")
    } else if(operacaoNaoVinculada===0 && operacaoVinculada===0 && operacaoVinculadaEmOutroNPJ===0){
        
    } else if(operacaoNaoVinculada===0 && operacaoVinculada===1 && operacaoVinculadaEmOutroNPJ===0){
        whereClause.push("(qpc.TX_NR_PRC_VCLD IN('Vinculada'))")
    } else if(operacaoNaoVinculada===0 && operacaoVinculada===1 && operacaoVinculadaEmOutroNPJ===1){
        whereClause.push("(qpc.TX_NR_PRC_VCLD IN('Vinculada','Vinculada em outro NPJ'))")
    } else if(operacaoNaoVinculada===0 && operacaoVinculada===0 && operacaoVinculadaEmOutroNPJ===1){
        whereClause.push("(qpc.TX_NR_PRC_VCLD IN('Vinculada em outro NPJ'))")
    }

    if(acordoRegPortalSim===1 && acordoRegPortalNao===0){
        whereClause.push("(qpc.VLDC_REG_ACRD IN (1))")
    } else if(acordoRegPortalSim===1 && acordoRegPortalNao===1){
        whereClause.push("(qpc.VLDC_REG_ACRD IN (1,0))")
    }else if(acordoRegPortalSim===0 && acordoRegPortalNao===1){
        whereClause.push("(qpc.VLDC_REG_ACRD IN (0))")
    } else {
        //caso tratado abaixo quando duplicadoSimNao===0
        if( duplicadoSimNao===1){
            whereClause.push("(qpc.VLDC_REG_ACRD IN (9))")
        }else{
            whereClause.push("(qpc.VLDC_REG_ACRD NOT IN (9))")
        }
    }

    
    if(analisadoSimNao===1){
        whereClause.push("(qpc.regAnalisado IN (1))")
    }else{
        whereClause.push("(qpc.regAnalisado IN (0))")
    }
    
    var finalText = "";
    if (whereClause.length>0){
        for(let val of whereClause){
            finalText = finalText + " AND " + val
        }
    }
    //teste whereClauseTest Saved to DataBase
    whereClaseTestEstoque = `${whereClaseTestEstoque} 
    FROM creditoPosCop.quarentenaPosCop qpc 
    WHERE qpc.protCriado = 0 
            AND CURRENT_TIMESTAMP() > qpc.quarentenaAte 
            AND qpc.quarentenaAte <= (SELECT fepc.dataInicioEstoque FROM creditoPosCop.fluxoEstoquePosCop fepc WHERE fepc.txt = 'Estoque') 
            ${finalText}`
    whereClaseTestFluxo = `${whereClaseTestFluxo} 
    FROM creditoPosCop.quarentenaPosCop qpc 
    WHERE qpc.protCriado = 0 
            AND CURRENT_TIMESTAMP() > qpc.quarentenaAte 
            AND qpc.quarentenaAte > (SELECT fepc.dataInicioEstoque FROM creditoPosCop.fluxoEstoquePosCop fepc WHERE fepc.txt = 'Estoque') 
            ${finalText}`
    pool.query(`UPDATE creditoPosCop.whereClause SET description = ? WHERE id = 1;
                UPDATE creditoPosCop.whereClause SET description = ? WHERE id = 2;`, [whereClaseTestEstoque,whereClaseTestFluxo], (err,results)=>{
                    if(err){
                        //console.log(err)
                    }else{
                        //console.log(results)
                    }
                })

    return finalText
}