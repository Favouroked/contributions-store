const mysql = require('mysql');

const env = require('../config/env');

const getConnection = () => {
    return mysql.createConnection({
        host: env.MYSQL_HOST,
        port: env.MYSQL_PORT,
        user: env.MYSQL_USERNAME,
        password: env.MYSQL_PASSWORD,
        database: env.MYSQL_DATABASE
    });
};

module.exports = {
    getConnection
};
