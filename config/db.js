var db = require('mysql');

var conn_db = function() {
	
	return db.createConnection({
		
		host: '',
		user: '',
		password: '',
		database: ''
	});	
}

module.exports = function() {

	return conn_db;
}	