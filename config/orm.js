var connection = require("../config/connection.js")

var orm = {
    selectAll: function () {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, data) {
            if (err) throw err;
            console.log(data);
        })
    },
    insertOne: function (burger) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burger], function (err, data) {
            if (err) throw err;
            console.log(data);
            
        })
    },
    updateOne: function (id) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?"
        connection.query(queryString, [id], function (err, data) {
            if (err) throw err;
            console.log(data);
        })
    }
}

// orm.selectAll();
// orm.insertOne("Slider");
// orm.updateOne(true, 2);

module.exports = orm