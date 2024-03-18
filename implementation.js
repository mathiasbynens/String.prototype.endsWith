'use strict';

var RequireObjectCoercible = require('es-object-atoms/RequireObjectCoercible');
var ToString = require('es-abstract/2023/ToString');
var IsRegExp = require('es-abstract/2023/IsRegExp');
var ToIntegerOrInfinity = require('es-abstract/2023/ToIntegerOrInfinity');

var callBound = require('call-bind/callBound');

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
	var pos = endPosition === undefined ? len : ToIntegerOrInfinity(endPosition);

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
