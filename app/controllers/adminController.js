module.exports.admin_news_add = function(app, request, response) {

	if(request.method == 'POST') {

		var data = request.body;

		request.assert('name_author', 'Informe o campo nome autor!').notEmpty();

		request.assert('title', 'Informe o campo título!').notEmpty();
		request.assert('title', 'O título deve ter entre 10 e 100 caracteres!').len(10, 100);

		request.assert('resume', 'Informe o campo resumo!').notEmpty();
		request.assert('resume', 'O resumo deve ter entre 10 e 100 caracteres!').len(10, 100);

		request.assert('content', 'Informe o conteúdo do artigo!').notEmpty();

		request.assert('created', 'Informe a data!').notEmpty();

		var errors = request.validationErrors();

		if(errors) {

			response.render('admin/form_add_news', {validation: errors, data: data});
			return;
		}

		var connection_db = app.config.db();
		var newsModel = new app.app.models.news.newsModel(connection_db);

		newsModel.newsAdd(data, function(error, result) {

			response.redirect('/news/');
		});		
	}
	else {

		response.render('admin/form_add_news', {validation: '', data: ''});
	}
}