/*! https://mths.be/endswith v1.0.0 by @mathias */

'use strict';

var callBind = require('es-abstract/helpers/callBind');
var define = require('define-properties');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

var boundEndsWith = callBind(getPolyfill());

define(boundEndsWith, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundEndsWith;
