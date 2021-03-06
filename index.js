var express = require('express');
var register = require('./src/modules/userapi_register.js');
var bodyParser = require("body-parser");
var mongoClient = require("mongodb").MongoClient;
var objectId = require("mongodb").ObjectID;

var app = express();
var urlencodedParser = bodyParser.urlencoded({extended: false});

register(app, bodyParser, mongoClient, objectId);

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
	response.end('<h1>Main Page</h1>');
});	

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});