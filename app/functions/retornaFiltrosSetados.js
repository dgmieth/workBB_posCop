const pool = require('../mysql/mysql')
const contaRegistrosComFiltros = require('./contaRegistrosComFiltros')

module.exports = (callback) => {
    pool.query(`
    SELECT
        t1.*,
        t2.*,
        t3.*,
        t4.*,
        t5.*,
        t7.*,
        t8.*,
        t9.*,
        t10.*,
        t11.*,
        t12.*,
        t13.*,
        t14.*,
        t15.*
    FROM 
    (SELECT papc.filtroSetado AS publicoAlvoSimL FROM creditoPosCop.pubAlvoPosCop papc WHERE papc.txt = 'Sim') AS t1,
    (SELECT papc.filtroSetado AS publicoAlvoNaoL FROM creditoPosCop.pubAlvoPosCop papc WHERE papc.txt = 'Nao') AS t2,
    (SELECT papc.filtroSetado AS publicoAlvoALVAL FROM creditoPosCop.pubAlvoPosCop papc WHERE papc.txt = 'Alva') AS t3,
    (SELECT srpc.filtroSetado AS XERL FROM creditoPosCop.sisResponsavelPosCop srpc WHERE srpc.txt = 'XER') AS t4,
    (SELECT srpc.filtroSetado AS COPL FROM creditoPosCop.sisResponsavelPosCop srpc WHERE srpc.txt = 'COP') AS t5,
    (SELECT svopc.filtroSetado AS operacaoNaoVinculadaL FROM creditoPosCop.sitVinculoOprPosCop svopc WHERE svopc.txt = 'Operação não vinculada') AS t7,
    (SELECT svopc.filtroSetado AS operacaoVinculadaL FROM creditoPosCop.sitVinculoOprPosCop svopc WHERE svopc.txt = 'Vinculada') AS t8,
    (SELECT svopc.filtroSetado AS operacaoVinculadaEmOutroNPJL FROM creditoPosCop.sitVinculoOprPosCop svopc WHERE svopc.txt = 'Vinculada em outro NPJ') AS t9,
    (SELECT ravpc.filtroSetado AS acordoRegPortalSimL FROM creditoPosCop.regAcrdValidadoPosCop ravpc WHERE ravpc.txt = 'Sim') AS t10,
    (SELECT ravpc.filtroSetado AS acordoRegPortalNaoL FROM creditoPosCop.regAcrdValidadoPosCop ravpc WHERE ravpc.txt = 'Nao') AS t11,
    (SELECT ravpc.filtroSetado AS acordoRegPortalDuplicadosL FROM creditoPosCop.regAcrdValidadoPosCop ravpc WHERE ravpc.txt = 'Duplicado') AS t12,
    (SELECT ravpc.filtroSetado AS acordoRegPortalAnalisadoL FROM creditoPosCop.regAcrdValidadoPosCop ravpc WHERE ravpc.txt = 'Analisado') AS t13,
    (SELECT fepc.qtde AS fluxoNumberL FROM creditoPosCop.fluxoEstoquePosCop fepc WHERE fepc .txt = 'Fluxo') AS t14,
    (SELECT fepc.qtde AS estoqueNumberL FROM creditoPosCop.fluxoEstoquePosCop fepc WHERE fepc .txt = 'Estoque') AS t15;
    SELECT
        t6.*
    FROM
    (SELECT lp.prefixos FROM creditoPosCop.listPrefGecorPosCop lp WHERE lp.filtroSetado = 1) AS t6;`,
    (err, results) => {
        if(err){
            callback({  error: err  },undefined)
        }else{
            var listPref = new Array()
            for(let e of results[1]){
                listPref.push(e.prefixos)
            }
            var objeto = {
                publicoAlvoSim: results[0][0].publicoAlvoSimL,
                publicoAlvoNao: results[0][0].publicoAlvoNaoL,
                publicoAlvoALVA: results[0][0].publicoAlvoALVAL,
                XER: results[0][0].XERL,
                COP: results[0][0].COPL,
                listaPrefixos: listPref,
                operacaoNaoVinculada: results[0][0].operacaoNaoVinculadaL,
                operacaoVinculada: results[0][0].operacaoVinculadaL,
                operacaoVinculadaEmOutroNPJ: results[0][0].operacaoVinculadaEmOutroNPJL,
                acordoRegPortalSim: results[0][0].acordoRegPortalSimL,
                acordoRegPortalNao: results[0][0].acordoRegPortalNaoL,
                // acordoRegPortalDuplicados: results[0][0].acordoRegPortalDuplicadosL,
                duplicadoSimNao: results[0][0].acordoRegPortalDuplicadosL,
                analisadoSimNao: results[0][0].acordoRegPortalAnalisadoL,
                fluxoNumber: results[0][0].fluxoNumberL,
                estoqueNumber: results[0][0].estoqueNumberL
            }
            contaRegistrosComFiltros(objeto, (err,data)=>{
                if(err){
                    callback({  error: err  },undefined)
                }else{
                    objeto["est"] = data.est
                    objeto["flu"] = data.flu
                    callback(undefined,objeto)
                }
            })
        }
    })
}