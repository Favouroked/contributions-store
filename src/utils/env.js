const getRequiredEnv = (envName) => {
    if (process.env[envName]) {
        return process.env[envName];
    } else {
        throw new Error(`${envName} is required`);
    }
};

module.exports = {
    getRequiredEnv
}
