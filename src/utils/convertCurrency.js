const axios = require('axios');

const {EXCHANGE_RATE_API_KEY, LATEST_EXCHANGE_RATE_API} = require('../config/env');

const convertToDollars = async (currency, amount) => {
    const res = await axios.get(LATEST_EXCHANGE_RATE_API,
        {params: {access_key: EXCHANGE_RATE_API_KEY, symbols: "EUR,BTC,USD"}});
    const { rates } = res.data;
    if (currency === 'EUR') {
        return rates['USD'] * amount;
    } else if (currency === 'BTC') {
        const euroAmount = amount / rates['BTC'];
        return euroAmount * rates['USD'];
    } else {
        return amount;
    }
};

module.exports = {
    convertToDollars
};
