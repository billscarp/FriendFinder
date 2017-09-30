var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var friends = require("./../data/friends.js");


function apiCalls(app, __dirname) {
    console.log("apiCalls");
    // app.get("/apifriends", function(req, res) {
    //     res.json(friends);
    //   });
}
module.exports = apiCalls;

app.post('/api/friends', function(req, res){


