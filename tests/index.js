'use strict';

var endsWith = require('../');
var test = require('tape');

var runTests = require('./tests');

test('as a function', function (t) {
	runTests(endsWith, t);

	t.end();
});
