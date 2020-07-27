const assert = require('assert');
const buildMessage = require('../utils/buildMessage');

describe.only('utils - buildMessage', function() {
    describe('when receibes an entity and an action', function() {
        it('should return the respective message', function() {
            const result = buildMessage('movie', 'create');
            const expect = 'movie created';
            assert.strictEqual(result, expect);
        });
    });

    describe('when it receives an entity and a action and it is a list', function() {
        it('should return the respective message with entity in plural', function() {
            const result = buildMessage('movie', 'list');
            const expected = 'movies listed';
            assert.strictEqual(result, expected)
        })
    })
});
