var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 4000;
var app = express();

var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

htmlRoutes(app, __dirname);
apiRoutes(app, __dirname);






// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});