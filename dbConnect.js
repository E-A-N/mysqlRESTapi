const mysql = require('mysql');
const config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "demo",
}
const connection = mysql.createConnection(config);


module.exports = connection;
