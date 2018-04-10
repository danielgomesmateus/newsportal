module.exports = function(app) {
	
	app.get('/news/view', function(request, response) {

		var connection_db = app.config.db();
		var newsModel = app.app.models.news.newsModel;

		newsModel.getNewsById(connection_db, function(error, result) {
			
			context = {
				data: result
			}

			response.render('../views/news/view', context);
		});
	});
}