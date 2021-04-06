const axios = require('axios');
const env = require('../config/env');

const getCountries = async () => {
    const response = await axios.get(env.COUNTRIES_API);
    return response.data.split('\n');
};

module.exports = {
    getCountries
};
