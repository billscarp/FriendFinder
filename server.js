var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var htmlRoutes = require("./app/routing/htmlRoutes.js");
//var apiRoutes = require("./app/routing/apiRoutes.js");

htmlRoutes(app, __dirname);




var PORT = process.env.PORT || 8000;
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
