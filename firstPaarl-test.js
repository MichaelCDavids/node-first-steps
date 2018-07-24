var assert = require('assert');

const firstPaarl = require('./firstPaarl'); 

describe('firstPaarl Function Test', function () {
 it('should return the first registration for Paarl', function () {
        assert.equal(firstPaarl("CA 123 456, CK 555 444, CJ 258 456"), "CJ 258 456");
    });
});