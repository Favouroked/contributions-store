const assert = require('chai').assert;

const path = require('path');
const fs = require('fs');

const dbUtils = require('../src/utils/db');

describe('DB Utils', function () {
    it('should return sql file path when supplied with file name', function () {
        const filename = 'create_contributions_table';
        const filePath = dbUtils.retrieveSQLFilePath(filename);
        assert.isTrue(fs.existsSync(filePath));
        assert.equal(path.basename(filePath), `${filename}.sql`);
        assert.equal(path.extname(filePath), '.sql');
    });
});
