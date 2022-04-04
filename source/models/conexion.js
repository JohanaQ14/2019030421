const mysql = require("mysql");
const { promisify } = require('util');

var sqlConnecion = mysql.createConnection({
    host:"database-agenda.cna7imjgkgeq.us-west-1.rds.amazonaws.com",
    user:"root",
    password:"Jesus2000",
    database:"sistemas" 
});

sqlConnecion.connect(function(err){
    if(err){
        console.log(err.message);
    }
    else{
        console.log("Se conecto con exito");
    }

});

sqlConnecion.query = promisify(sqlConnecion.query)

module.exports = sqlConnecion;
