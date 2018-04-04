module.exports = function(app) {
	
	app.get('/', function(request, response){

		response.render('../views/home/index');
	});
}
