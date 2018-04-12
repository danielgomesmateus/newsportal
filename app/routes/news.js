module.exports = function(app) {

	app.get('/news/', function(request, response) {

		app.app.controllers.newsController.news_index(app, request, response);
	});
	
	app.get('/news/view', function(request, response) {

		app.app.controllers.newsController.news_view(app, request, response);
	});
}