var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 4000;
var app = express();

var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

app.use(express.static(path.join(__dirname, '/app/public')));

// Make sure to setup bodyParser before loading your routes ;)
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Routes are added after we setup Express
htmlRoutes(app);
apiRoutes(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});