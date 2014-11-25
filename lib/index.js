'use strict';

var Hoek = require('hoek');

// Declare internals
var internals = {};

internals.defaults = {};

exports = module.exports = internals.Connection = function(options) {
    Hoek.assert(this.constructor === internals.Connection, 'No-op cache client must be instantiated using new');
    this.settings = Hoek.applyToDefaults(internals.defaults, options);
    this.ready = false;
    return this;
};

internals.Connection.prototype.start = function(callback) {
    var self = this;
    self.ready = true;
    return callback();
};

internals.Connection.prototype.stop = function() {
    this.ready = false;
};

internals.Connection.prototype.isReady = function() {
    return this.ready;
};

internals.Connection.prototype.validateSegmentName = function(name) {
    return null;
};

internals.Connection.prototype.get = function(key, callback) {
    return callback(null);
};

internals.Connection.prototype.set = function(key, value, ttl, callback) {
    return callback(null);
};

internals.Connection.prototype.drop = function(key, callback) {
    return callback();
};
