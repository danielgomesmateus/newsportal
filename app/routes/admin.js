module.exports = function(app) {

	app.get('/admin/news/add', function(request, response){

		response.render('../views/admin/form_add_news');
	});

	app.post('/admin/news/add', function(request, response) {

		var data = request.body;

		var connection_db = app.config.db();
		var newsModel = new app.app.models.news.newsModel(connection_db);

		newsModel.newsAdd(data, function(error, result) {

			response.redirect('/news/');
		});
	});
}