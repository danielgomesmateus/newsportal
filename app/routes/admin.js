module.exports = function(app) {

	app.get('/admin/news/add', function(request, response){

		app.app.controllers.adminController.admin_news_add(app, request, response);
	});

	app.post('/admin/news/add', function(request, response) {

		app.app.controllers.adminController.admin_news_add(app, request, response);
	});
}