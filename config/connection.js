const mysql = require("mysql")

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        port: 3306,
        password: "katsu",
        database: "sushi_db"
    })
}

connection.connect();
module.exports = connection;