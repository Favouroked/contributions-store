const { getRequiredEnv } = require('../utils/env');

const env = {
    PORT: process.env.PORT || 8080,
    MYSQL_HOST: getRequiredEnv('MYSQL_HOST'),
    MYSQL_PORT: getRequiredEnv('MYSQL_PORT'),
    MYSQL_USERNAME: getRequiredEnv('MYSQL_USERNAME'),
    MYSQL_PASSWORD: getRequiredEnv('MYSQL_PASSWORD'),
    MYSQL_DATABASE: getRequiredEnv('MYSQL_DATABASE'),
};

module.exports = env;
