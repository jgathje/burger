var connection = require("../config/connection.js")

var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, data) {
            if (err) throw err;
            console.log(data);
            cb(data);
        })
    },
    sumDigest: function (cb) {
        var queryString = "SELECT SUM(digest) AS Sum FROM burgers";
        connection.query(queryString, function (err, data) {
            if (err) throw err;
            console.log(data);
            cb(data);
        })
    },
    insertOne: function (burger, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burger], function (err, data) {
            if (err) throw err;
            console.log(data);
            cb(data);
        })
    },
    updateOne: function (id, cb) {
        var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ?"
        connection.query(queryString, [id], function (err, data) {
            if (err) throw err;
            console.log(data);
            cb(data);
        })
    },
    deleteOne: function (id, cb) {
        var queryString = "DELETE FROM burgers WHERE id = ?"
        connection.query(queryString, [id], function (err, data) {
            if (err) throw err;
            console.log(data);
            cb(data);
        })
    }
}
module.exports = orm