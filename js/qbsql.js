function QbSql(parent)
{
    this._i = Qt.createQmlObject("import Qb.Sql 1.0; QbSql {}",
                                        parent,
                                        "QbSqlJS");
}

QbSql.prototype.setDbPath = function(path) {
    this._i.setDbPath(path);
};

QbSql.prototype.query = function(queryString) {
    return this._i.query(queryString);
};

QbSql.prototype.preparedQuery = function(queryString, data) {
    return this._i.preparedQuery(queryString,data);
};
