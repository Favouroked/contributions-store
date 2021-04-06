const {connection} = require('../db/mysql');

const {retrieveSQL} = require('../utils/db');


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
