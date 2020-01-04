var express = require("express");
var router = express.Router();

const controllerAuth = require("../controllers/authentication");

/**
 * Added as of April 11, 2019
 * Route definitions for authentication
 */
// router.post("/register", controllerAuth.register);
router.post("/login", controllerAuth.login);

module.exports = router;