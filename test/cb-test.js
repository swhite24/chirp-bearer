var should = require('should'),
	chirp_bearer = require('./../');

describe('chirp-bearer', function () {
	describe('on require', function () {

		it('should return a function', function () {
			chirp_bearer.should.be.type('function');
		});

		it('should expect two arguments', function () {
			chirp_bearer.should.have.lengthOf(2);
		});
	});

	describe('on invoke', function () {
		before(function () {
			chirp_bearer = chirp_bearer('key', 'secret');
		});

		it('should return an object', function () {
			chirp_bearer.should.be.type('object');
		});

		it('should expose a get method', function () {
			should.exist(chirp_bearer.get);
			chirp_bearer.get.should.be.type('function');
			chirp_bearer.get.should.have.lengthOf(1);
		});
	});
});
