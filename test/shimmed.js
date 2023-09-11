'use strict';

var endsWith = require('../');
endsWith.shim();

var test = require('tape');
var defineProperties = require('define-properties');
var bind = require('function-bind');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(String.prototype.endsWith.length, 1, 'String#endsWith has a length of 1');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(String.prototype.endsWith.name, 'endsWith', 'String#endsWith has name "endsWith"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (st) {
		st.equal(false, isEnumerable.call(String.prototype, 'endsWith'), 'String#endsWith is not enumerable');
		st.end();
	});

	runTests(bind.call(Function.call, String.prototype.endsWith), t);

	t.end();
});
