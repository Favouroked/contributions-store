const {connection} = require("../db/mysql");

const CONTRIBUTION_FIELDS = ['firstName', 'lastName', 'streetAddress', 'city', 'state', 'country',
    'postalCode', 'phoneNumber', 'email', 'formOfContact', 'formOfPayment',
    'frequencyDonation', 'donationAmount', 'comments'];

const insertContribution = (data) => {

    const sql = `INSERT INTO contributions(${CONTRIBUTION_FIELDS.join(', ')}) VALUES (${CONTRIBUTION_FIELDS.map(() => '?').join(', ')});`;
    const values = CONTRIBUTION_FIELDS.map(field => data[field]);
    connection.connect();
    connection.query(sql, values, (err) => {
        if (err) throw err;
    });
    connection.end();

};

module.exports = {
    insertContribution
};
