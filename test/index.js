/*eslint-disable*/
'use strict';

var expect = require('chai').expect;
var Catbox = require('catbox');
var Noop = require('..');

describe('Noop', function() {
    it('throws an error if not created with new', function(done) {
        var fn = function() {
            var noop = Noop();
        };

        expect(fn).to.throw(Error);
        done();
    });

    it('creates a new connection', function(done) {
        var client = new Catbox.Client(Noop);
        client.start(function(err) {
            expect(err).to.not.exist;
            expect(client.isReady()).to.equal(true);
            done();
        });
    });

    it('closes the connection', function(done) {

        var client = new Catbox.Client(Noop);
        client.start(function(err) {
            expect(err).to.not.exist;
            expect(client.isReady()).to.equal(true);
            client.stop();
            expect(client.isReady()).to.equal(false);
            done();
        });
    });
});
