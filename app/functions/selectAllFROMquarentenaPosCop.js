const pool = require('../mysql/mysql')
module.exports = (callback)=> {
    pool.query(`SELECT qpc.* FROM creditoPosCop.quarentenaPosCop qpc WHERE qpc.protCriado = 0 AND CURRENT_TIMESTAMP() > qpc.quarentenaAte AND qpc .regAnalisado = 0 AND qpc.regExcluido = 0 ;
                SELECT fepc .dataInicioEstoque FROM creditoPosCop.fluxoEstoquePosCop fepc WHERE fepc .dataInicioEstoque IS NOT NULL;
                SELECT lpgpc.prefixos FROM creditoPosCop.listPrefGecorPosCop lpgpc ORDER BY lpgpc.prefixos ASC;`, 
            (err,results)=>{
                if(err){
                    console.log(err)
                    callback({
                        error: err
                    },undefined)
                }else{
                    callback(undefined,results)
                }
            }) 
}