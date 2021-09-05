const pool = require('../mysql/mysql')

module.exports = (matricula, msg, callback) =>{
    pool.query(`INSERT INTO posCopLog (user, description) VALUES ('${ matricula}', '${msg}')`, (err,result) => {
        if (err) {
            callback({error: err}, undefined)
        }else{
            callback(undefined,{succes: `${msg} salvo`})
        }
    })
}