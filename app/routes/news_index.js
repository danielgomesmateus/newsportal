module.exports = function(app) {

	app.get('/news/', function(request, response) {

		var connection_db = app.config.db();
		var newsModel = new app.app.models.news.newsModel(connection_db);

		newsModel.getNews(function(error, result) {
			
			context = {
				data: result
			}

			response.render('../views/news/index', context);			
		});
	});
}