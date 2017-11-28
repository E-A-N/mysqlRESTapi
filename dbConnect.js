const mysql = require('mysql');
const config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "demo",
}
const connection = mysql.createPool(config);


module.exports = connection;
