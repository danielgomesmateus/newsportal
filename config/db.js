var db = require('mysql');

module.exports = function() {

	return db.createConnection({
		
		host: 'localhost',
		user: 'root',
		password: 'pirate89',
		database: 'db_node'
	});
}	