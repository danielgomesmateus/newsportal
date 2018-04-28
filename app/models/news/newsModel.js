function newsModel(connection) {

	this._connection = connection;
}

newsModel.prototype.getNews = function(callback) {

	this._connection.query("select id, title, resume, content from news order by id DESC", callback);
}

newsModel.prototype.getNewsById = function(item, callback) {

	this._connection.query("select title, resume, content from news where id = " + item.id, callback);
}

newsModel.prototype.newsAdd = function(data, callback) {

	this._connection.query("insert into news set ?", data, callback);
}

module.exports = function() {

	return newsModel;
}