const express = require('express');

const {PORT} = require('./config/env');

const {createContributionTable} = require('./jobs/init');


const app = express();


app.listen(PORT, () => {
    // init jobs
    createContributionTable();
    console.log(`App is listening on port ${PORT}`);
});
