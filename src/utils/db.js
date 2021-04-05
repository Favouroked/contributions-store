const fs = require('fs');
const path = require('path');

const retrieveSQLFilePath = (filename) => {
    return path.resolve('src', 'sql', `${filename}.sql`);
};

const retrieveSQL = (filename) => {
    const filePath = retrieveSQLFilePath(filename);
    return fs.readFileSync(filePath, {encoding: "utf-8", flag: "r"});
};

module.exports = {
    retrieveSQL,
    retrieveSQLFilePath
};
