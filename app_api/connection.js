var mysql = require('mysql')
var mysqlConnection = mysql.createConnection({
    host: '127.0.0.1',
    user : 'root',
    password : 'mediaquery123',
    database : 'booklist',
    multipleStatements : true
})

mysqlConnection.connect(function(err){
    if(!err) {
        console.log("Connected");
    }else{
        console.log("Connection Failed")
    }
})

module.exports = mysqlConnection