var assert = require('assert');

describe('Basic Mocha String Test', function () {
 it('should return number of characters in a string', function () {
        assert.equal("Hello".length, 4);
    });
 it('should return first character of the string', function () {
        assert.equal("Hello".charAt(0), 'H');
    });
});


const firstPaarl = require('./firstPaarl'); 

describe('firstPaarl Function Test', function () {
 it('should return the first registration for Paarl', function () {
        assert.equal(firstPaarl("CA 123 456, CK 555 444, CJ 258 456"), "CJ 258 456");
    });
});