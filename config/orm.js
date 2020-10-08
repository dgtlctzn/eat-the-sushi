const connection = require("./connection")

const orm = {
    selectAll: function (table, cb) {
        connection.query("SELECT * FROM ??", [table], (err, data) => {
            if (err) throw err;
            cb(data)
        });
    },
    insertOne: function () {

    },
    updateOne: function () {

    }
}

module.exports = orm;