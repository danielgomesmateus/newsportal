var app = require('./config/server')();

app.listen(8080, function(){

	console.log("Servidor NODEJS iniciado! - localhost:8080");
});