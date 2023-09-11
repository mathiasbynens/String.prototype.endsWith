/*! https://mths.be/endswith v1.0.0 by @mathias */

'use strict';

var callBound = require('es-abstract/helpers/callBound');
var RequireObjectCoercible = require('es-abstract/2019/RequireObjectCoercible');
var ToString = require('es-abstract/2019/ToString');
var IsRegExp = require('es-abstract/2019/IsRegExp');
var ToInteger = require('es-abstract/2019/ToInteger');

var StringCharCodeAt = callBound('String.prototype.charCodeAt');
var max = Math.max;
var min = Math.min;

module.exports = function endsWith(searchString) {
	var O = RequireObjectCoercible(this);
	var S = ToString(O);
	if (IsRegExp(searchString)) {
		throw new TypeError('Argument to String.prototype.endsWith cannot be a RegExp');
	}
	var searchStr = ToString(searchString);

	var len = S.length;
	var searchLength = searchStr.length;
	var endPosition = arguments.length > 1 ? arguments[1] : undefined;
	var pos = endPosition === undefined ? len : ToInteger(endPosition);

	var end = min(max(pos, 0), len);
	var start = end - searchLength;
	if (start < 0) {
		return false;
	}
	var index = -1;
	while (++index < searchLength) { // eslint-disable-line no-plusplus
		if (StringCharCodeAt(S, start + index) !== StringCharCodeAt(searchStr, index)) {
			return false;
		}
	}
	return true;
};
