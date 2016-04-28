var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var app = express();

mongoose.connect('mongodb://localhost:27017/angular-network');

app.use('/app', express.static(__dirname + "/app"));

app.get('/', function(req, res){
	res.sendfile('index.html');
});

app.listen('3000', function (){
	console.log("Listening on localhost:3000 my Nigga");
});