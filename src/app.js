const express = require('express');
const {PORT} = require('./config/env');


const app = express();


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
