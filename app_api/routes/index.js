var express = require("express");
var router = express.Router();

;
var booksRoute = require("./books");
var authRoute = require("./authentication");


/**
 * We will declare the endpoint based on the name of the entities with routes
 * previously declared
 */
router
    .use("/books", booksRoute)
    .use("/users", authRoute);

module.exports = router;