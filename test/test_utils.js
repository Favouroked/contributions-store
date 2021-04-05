const assert = require('chai').assert;
const expect = require('chai').expect;

const path = require('path');
const fs = require('fs');

const dbUtils = require('../src/utils/db');
const envUtils = require('../src/utils/env');

describe('#Utils', function () {
    describe('#DB', function () {
        it('should return sql file path when supplied with file name', function () {
            const filename = 'create_contributions_table';
            const filePath = dbUtils.retrieveSQLFilePath(filename);
            assert.isTrue(fs.existsSync(filePath));
            assert.equal(path.basename(filePath), `${filename}.sql`);
            assert.equal(path.extname(filePath), '.sql');
        });
    });

    describe('#Env', function () {
        it('should throw error if environment variable doesnt exist', function () {
            process.env.SAMPLE_EXISTING_ENV = 'fizz';
            const requiredEnv = envUtils.getRequiredEnv('SAMPLE_EXISTING_ENV');
            assert.equal(requiredEnv, 'fizz');
            expect(() => envUtils.getRequiredEnv('NON_EXISTENT_ENV')).to.throw('NON_EXISTENT_ENV is required');
        });
    });
});
