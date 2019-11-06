const connection = require('../connection');


function sendJSONResponse(res, status, content) {
    res.status(status);
    res.send(content);
}


module.exports.getBooks = function(req, res) {
    connection.query('SELECT * FROM books',
    function(err, results){
        sendJSONResponse(res, 200, results);
    })
}

