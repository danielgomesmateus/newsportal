module.exports = function(app) {

	var connection = require('../../config/db.js')();

	app.get('/news/', function(request, response) {

		connection.query("select id, title, content from news", function(error, result){

			response.render('../views/news/index', {data: result});
			//response.send(result);
		});
	});
}