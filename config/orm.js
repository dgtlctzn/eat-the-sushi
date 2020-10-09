const connection = require("./connection")

const orm = {
    selectAll: function (table, cb) {
        connection.query("SELECT * FROM ??", [table], (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },
    insertOne: function (table, cols, values, cb) {
        connection.query("INSERT INTO ?? (??) VALUES (?,?)", [table, cols, values, false], (err, data) => {
            if (err) throw err;
            cb(data);
        })

    },
    updateOne: function (table, cols, valueObj, condObj, cb) {
        connection.query("UPDATE ?? SET ? WHERE ?", [table, cols, valueObj, condObj], (err, data) => {
            if (err) throw err;
            cb(data);
        });
    }
}

module.exports = orm;