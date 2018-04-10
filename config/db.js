var db = require('mysql');

var conn_db = function() {
	
	return db.createConnection({
		
		host: 'localhost',
		user: 'root',
		password: 'pirate89',
		database: 'db_node'
	});	
}

module.exports = function() {

	return conn_db;
}	