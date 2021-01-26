var connection = require("./connection.js");
//Select All ORM
var orm = {
    all: function(table, cb) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], function(err, res) {

            if (err) throw err; cb(res);
        });
    },
    //Insert 
    create: function(table, col, val, cb) {
    var queryString = "INSERT INTO ?? (??, devoured) VALUES (?, FALSE) ;"
        connection.query(queryString, [table, col, val], function(err, res){
        if (err) throw err; cb(res);
    });
    },
    //Update
    update: function(col, id, cb) {
        var queryString = "UPDATE burgers SET devoured='1' WHERE " + id + ";";
        
            connection.query(queryString, [id], function(err, res) {
            if (err) throw err; cb(res);
        });
    },
    //Delete
    delete: (table, column, burgerId, cb) => {}
};
//Exports ORM
module.exports = orm;