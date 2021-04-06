const {getConnection} = require("../db/mysql");

const connection = getConnection();

const CONTRIBUTION_FIELDS = ['firstName', 'lastName', 'streetAddress', 'city', 'state', 'country',
    'postalCode', 'phoneNumber', 'email', 'formOfContact', 'formOfPayment',
    'frequencyOfDonation', 'donationAmount', 'comments'];

const insertContribution = (data) => {

    const sql = `INSERT INTO contributions(${CONTRIBUTION_FIELDS.join(', ')}) VALUES (${CONTRIBUTION_FIELDS.map(() => '?').join(', ')});`;
    const values = CONTRIBUTION_FIELDS.map(field => data[field]);
    connection.connect();
    connection.query({sql, values}, (err) => {
        if (err) throw err;
    });
    connection.end();
};

module.exports = {
    insertContribution
};
