const {getConnection} = require('../db/mysql');

const {retrieveSQL} = require('../utils/db');

const connection = getConnection();

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
