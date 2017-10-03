var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

// localhost:4000/
function apiCalls(app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/home.html"));
    });
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/survey.html"));
    });
}
module.exports = apiCalls;