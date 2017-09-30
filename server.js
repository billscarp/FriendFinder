var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var apiRoutes = require("./app/routing/htmlRoutes.js");
var htmlRoutes = require("./app/routing/apiRoutes.js");

pageShow(app, __dirname);