const mysql = require("mysql");
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "demo",
});

connection.connect();

module.exports = connection;
