module.exports.news_index = function(app, request, response) {

	var connection_db = app.config.db();
	var newsModel = new app.app.models.news.newsModel(connection_db);

	newsModel.getNews(function(error, result) {
		
		context = {
			data: result
		}

		response.render('news/index', context);			
	});
}

module.exports.news_view = function(app, request, response) {

	var connection_db = app.config.db();
	var newsModel = new app.app.models.news.newsModel(connection_db);

	newsModel.getNewsById(function(error, result) {
		
		context = {
			data: result
		}

		response.render('news/view', context);
	});
}