var app = require('./config/server')();

var routeHome = require('./app/routes/home')(app);
var routeNews = require('./app/routes/news')(app);
var routeAdmin = require('./app/routes/admin')(app);

app.listen(8080, function(){

	console.log("Servidor NODEJS iniciado!");
});