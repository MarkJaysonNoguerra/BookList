var mysql = require('mysql2')
var mysqlConnection = mysql.createConnection({
    host: '127.0.0.1',
    user : 'root',
    password : 'mediaquery123',
    database : 'booklist'
})

module.exports = mysqlConnection;