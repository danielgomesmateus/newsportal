var express = require('express');
var app = express();

var msg = require('./node_teste');


app.set('view engine', 'ejs');

app.get('/', function(request, response){

	response.render('home/index');
});

app.get('/admin/news/add', function(request, response){

	response.render('admin/form_add_news');
});

app.get('/news', function(request, response){

	response.render('news/news');
});

app.listen(8080, function(){

	console.log(msg());
});