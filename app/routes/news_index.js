module.exports = function(app) {

	app.get('/news/', function(request, response) {

		var connection_db = app.config.db();
		var newsModel = app.app.models.news.newsModel;

		newsModel.getNews(connection_db, function(error, result) {
			
			context = {
				data: result
			}

			response.render('../views/news/index', context);			
		});
	});
}