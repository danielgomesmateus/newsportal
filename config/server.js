var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views/');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extend: true}));
app.use(expressValidator());

consign()
	.include('app/routes')
	.then('app/controllers')
	.then('app/models')
	.then('config/db.js')
	.into(app);

module.exports = function() {

	return app;
}