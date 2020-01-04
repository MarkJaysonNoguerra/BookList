var crypto = require("crypto");
var jwt = require("jsonwebtoken");
var connection = require("../connection")
var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.send(content);
}

   
var setPassword = function(password) {
    this.Salt = crypto.randomBytes(16).toString("hex");
    this.Hash = crypto.pbkdf2Sync(password, this.Salt, 1000, 64, "sha512").toString("hex");
};

var validatePassword = function(password) {
    var Hash = crypto.pbkdf2Sync(password, this.Salt, 1000, 64, "sha512").toString("hex");
    return this.Hash === Hash;
};

var generateJwt = function() {
    var expiry = new Date();
    // expires in one day
    expiry.setDate(expiry.getDate() + 1);

    return jwt.sign({
        UserID: this.UserID,
        Username: this.Username,
        Name: this.Name,
        Expiry: parseInt(expiry.getTime() / 1000)
    }, process.env.JWT_SECRET);
}

module.exports.login = function(req, res) {
    
    connection.query("SELECT * FROM users WHERE Username = 'asf' LIMIT 1",
    function(err, results){
        if(!results){
            sendJsonResponse(res, 200, {message : "Incorrect Username"});
        }
        if(results){
            sendJsonResponse(res, 200, results)
            if (!user.validPassword(password)) {
                return done(null, false, {
                    message: "Incorrect password."
                })
            }
        }
    })
}
