const pool = require('../mysql/mysql')

module.exports = (callback) =>{
    pool.query(`SELECT lp.prefixos FROM creditoPosCop.listPrefGecorPosCop lp ORDER BY lp.prefixos ASC`, (err,result) => {
        if (err) {
            callback({error: err}, undefined)
        }else{
            callback(undefined,result)
        }
    })
}