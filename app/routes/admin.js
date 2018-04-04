module.exports = function(app) {

	app.get('/admin/news/add', function(request, response){

		response.render('../views/admin/form_add_news');
	});
}