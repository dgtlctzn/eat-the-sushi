const orm = require("../config/orm");

const sushi = {
    selectAll: function(cb) {
        orm.selectAll("sushi", function(data) {
            cb(data)
        })
    },
    insertOne: function(cols, values, cb) {
        orm.insertOne("sushi", cols, values, function(data) {
            cb(data);
        })
    },
    updateOne: function(cols, valueObj, condObj, cb) {
        orm.updateOne("sushi", cols, valueObj, condObj, function(data) {
            cb(data);
        })
    }
}

module.exports = sushi;