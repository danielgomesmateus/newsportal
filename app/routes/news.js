module.exports = function(app) {
	
	app.get('/news', function(request, response){

		response.render('../views/news/news');
	});
}