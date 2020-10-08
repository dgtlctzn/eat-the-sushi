const connection = require("./connection")

const orm = {
    selectAll: function (table, cb) {
        connection.query("SELECT * FROM ??", [table], (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },
    insertOne: function (table, cols, values, cb) {
        const colString = cols.toString();
        const valString = values.toString();
        connection.query("INSERT INTO ?? (??) VALUES (?)"), [table, colString, valString], (err, data) => {
            if (err) throw err;
            cb(data);
        }

    },
    updateOne: function () {

    }
}

module.exports = orm;