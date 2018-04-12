module.exports = function(app) {
	
	app.get('/', function(request, response){

		app.app.controllers.homeController.home_index(app, request, response);
	});
}
