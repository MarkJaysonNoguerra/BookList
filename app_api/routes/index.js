var express = require("express");
var router = express.Router();

;
var booksRoute = require("./books");

/**
 * We will declare the endpoint based on the name of the entities with routes
 * previously declared
 */
router
    .use("/books", booksRoute);

module.exports = router;