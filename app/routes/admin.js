module.exports = function(app) {

	app.get('/admin/news/add', function(request, response){

		response.render('../views/admin/form_add_news');
	});

	app.post('/admin/news/add', function(request, response) {

		var data = request.body;

		var connection_db = app.config.db();
		var newsModel = app.app.models.news.newsModel;

		newsModel.newsAdd(data, connection_db, function(error, result) {

			response.redirect('/news/');
		});
	});
}