var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views/');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extend: true}));

consign()
	.include('app/routes')
	.then('app/models')
	.then('config/db.js')
	.into(app);

module.exports = function() {

	return app;
}