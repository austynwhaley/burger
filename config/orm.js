var connection = require("../config/connection.js");

var orm = {

    all: (table, cb) => {},

    create: (table, column, value, cb) => {},

    update: (table, column, burgerId, cb) => {},
        
    delete: (table, column, burgerId, cb) => {}
}

module.exports = orm;