const mysql = require('mysql');
const env = require('../config/env');

const { retrieveSQL } = require('../utils/db');

const connection = mysql.createConnection({
    host: env.MYSQL_HOST,
    port: env.MYSQL_PORT,
    user: env.MYSQL_USERNAME,
    password: env.MYSQL_PASSWORD,
    database: env.MYSQL_DATABASE
});

const createContributionTable = () => {
    connection.connect();
    const sql = retrieveSQL('create_contributions_table');
    connection.query({sql}, (error, results, fields) => {
        if (error) throw error;
    });
    connection.end();
};

module.exports = {
    createContributionTable
};
