var connection = require("../config/connection.js");

var orm = {
    all: (table, cb) => {

        // console.log(table);
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, (err, result) => {

            if (err) { throw err;} cb(result);
        });
    },

    create: (table, column, value, cb) => {},

    update: (table, column, burgerId, cb) => {},

    delete: (table, column, burgerId, cb) => {}
        
    
    
}

module.exports = orm;