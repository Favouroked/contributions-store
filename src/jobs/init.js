const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: 'wikimedia'
});

const createContributionTable = () => {
    connection.connect();
    
}
