const { getRequiredEnv } = require('../utils/env');

const env = {
    PORT: process.env.PORT || 8080,
    MYSQL_HOST: getRequiredEnv('MYSQL_HOST'),
    MYSQL_PORT: getRequiredEnv('MYSQL_PORT'),
    MYSQL_USERNAME: getRequiredEnv('MYSQL_USERNAME'),
    MYSQL_PASSWORD: getRequiredEnv('MYSQL_PASSWORD'),
    MYSQL_DATABASE: getRequiredEnv('MYSQL_DATABASE'),
    COUNTRIES_API: "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries",
    EXCHANGE_RATE_API_KEY: getRequiredEnv("EXCHANGE_RATE_API_KEY"),
    LATEST_EXCHANGE_RATE_API: "http://api.exchangeratesapi.io/v1/latest"
};

module.exports = env;
