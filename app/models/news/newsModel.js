function newsModel(connection) {

	this._connection = connection;
}

newsModel.prototype.getNews = function(callback) {

	this._connection.query("select title, resume, content from news", callback);
}

newsModel.prototype.getNewsById = function(callback) {

	this._connection.query("select title, resume, content from news where id = 1", callback);
}

newsModel.prototype.newsAdd = function(data, callback) {

	this._connection.query("insert into news set ?", data, callback);
}

module.exports = function() {

	return newsModel;
}