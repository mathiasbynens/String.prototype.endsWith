/*! https://mths.be/endswith v1.0.0 by @mathias */

'use strict';

var define = require('define-properties');

var getPolyfill = require('./polyfill');

module.exports = function shimEndsWith() {
	var polyfill = getPolyfill();

	if (String.prototype.endsWith !== polyfill) {
		define(String.prototype, { endsWith: polyfill });
	}

	return polyfill;
};
