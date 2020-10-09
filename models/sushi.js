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
    updateOne: function(valueObj, condObj, cb) {
        orm.updateOne("sushi", valueObj, condObj, function(data) {
            cb(data);
        })
    }
}

module.exports = sushi;