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

	var id = request.query != '' ? request.query : 1;

	newsModel.getNewsById(id, function(error, result) {
		
		context = {
			data: result
		}

		response.render('news/view', context);
	});
}