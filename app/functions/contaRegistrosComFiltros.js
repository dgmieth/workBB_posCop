const pool = require('../mysql/mysql')
const createWhereClause = require('./createWhereClause')
const selectComWhere = require('./selectComWhere')

module.exports = (valuesObj, callback) => {
    const finalText = createWhereClause(valuesObj)
    selectComWhere(finalText,(err,data)=> {
        if(err){
                callback({
                    error: err
                },undefined)
        }else{
                callback(undefined,data)
        }
    })
    
}
