module.exports = function(app) {

	this.getNews = function(connection, callback) {

		connection.query("select title, content from news", callback);
	}

	this.getNewsById = function(connection, callback) {

		connection.query("select title, content from news where id = 1", callback);
	}

	this.newsAdd = function(data, connection, callback) {

		connection.query("insert into news set ?", data, callback);
	}

	return this;
}