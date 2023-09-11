'use strict';

module.exports = function(endsWith, t) {
	t.test('nullish search string', function(st) {
		st.equal(endsWith('undefined'), true);
		st.equal(endsWith('undefined', undefined), true);
		st.equal(endsWith('undefined', null), false);
		st.equal(endsWith('null'), false);
		st.equal(endsWith('null', undefined), false);
		st.equal(endsWith('null', null), true);
		st.end();
	});

	t.test('basic support', function(st) {
		st.equal(endsWith('abc'), false);
		st.equal(endsWith('abc', ''), true);
		st.equal(endsWith('abc', '\0'), false);
		st.equal(endsWith('abc', 'c'), true);
		st.equal(endsWith('abc', 'b'), false);
		st.equal(endsWith('abc', 'ab'), false);
		st.equal(endsWith('abc', 'bc'), true);
		st.equal(endsWith('abc', 'abc'), true);
		st.equal(endsWith('abc', 'bcd'), false);
		st.equal(endsWith('abc', 'abcd'), false);
		st.equal(endsWith('abc', 'bcde'), false);
		st.end();
	});

	t.test('position argument - NaN', function(st) {
		st.equal(endsWith('abc', '', NaN), true);
		st.equal(endsWith('abc', '\0', NaN), false);
		st.equal(endsWith('abc', 'c', NaN), false);
		st.equal(endsWith('abc', 'b', NaN), false);
		st.equal(endsWith('abc', 'a', NaN), false);
		st.equal(endsWith('abc', 'ab', NaN), false);
		st.equal(endsWith('abc', 'bc', NaN), false);
		st.equal(endsWith('abc', 'abc', NaN), false);
		st.equal(endsWith('abc', 'bcd', NaN), false);
		st.equal(endsWith('abc', 'abcd', NaN), false);
		st.equal(endsWith('abc', 'bcde', NaN), false);
		st.end();
	});

	t.test('position argument - false', function(st) {
		st.equal(endsWith('abc', '', false), true);
		st.equal(endsWith('abc', '\0', false), false);
		st.equal(endsWith('abc', 'c', false), false);
		st.equal(endsWith('abc', 'b', false), false);
		st.equal(endsWith('abc', 'a', false), false);
		st.equal(endsWith('abc', 'ab', false), false);
		st.equal(endsWith('abc', 'bc', false), false);
		st.equal(endsWith('abc', 'abc', false), false);
		st.equal(endsWith('abc', 'bcd', false), false);
		st.equal(endsWith('abc', 'abcd', false), false);
		st.equal(endsWith('abc', 'bcde', false), false);
		st.end();
	});

	t.test('position argument - undefined', function(st) {
		st.equal(endsWith('abc', '', undefined), true);
		st.equal(endsWith('abc', '\0', undefined), false);
		st.equal(endsWith('abc', 'c', undefined), true);
		st.equal(endsWith('abc', 'b', undefined), false);
		st.equal(endsWith('abc', 'a', undefined), false);
		st.equal(endsWith('abc', 'ab', undefined), false);
		st.equal(endsWith('abc', 'bc', undefined), true);
		st.equal(endsWith('abc', 'abc', undefined), true);
		st.equal(endsWith('abc', 'bcd', undefined), false);
		st.equal(endsWith('abc', 'abcd', undefined), false);
		st.equal(endsWith('abc', 'bcde', undefined), false);
		st.end();
	});

	t.test('position argument - null', function(st) {
		st.equal(endsWith('abc', '', null), true);
		st.equal(endsWith('abc', '\0', null), false);
		st.equal(endsWith('abc', 'c', null), false);
		st.equal(endsWith('abc', 'b', null), false);
		st.equal(endsWith('abc', 'a', null), false);
		st.equal(endsWith('abc', 'ab', null), false);
		st.equal(endsWith('abc', 'bc', null), false);
		st.equal(endsWith('abc', 'abc', null), false);
		st.equal(endsWith('abc', 'bcd', null), false);
		st.equal(endsWith('abc', 'abcd', null), false);
		st.equal(endsWith('abc', 'bcde', null), false);
		st.end();
	});

	t.test('position argument - -Infinity', function(st) {
		st.equal(endsWith('abc', '', -Infinity), true);
		st.equal(endsWith('abc', '\0', -Infinity), false);
		st.equal(endsWith('abc', 'c', -Infinity), false);
		st.equal(endsWith('abc', 'b', -Infinity), false);
		st.equal(endsWith('abc', 'a', -Infinity), false);
		st.equal(endsWith('abc', 'ab', -Infinity), false);
		st.equal(endsWith('abc', 'bc', -Infinity), false);
		st.equal(endsWith('abc', 'abc', -Infinity), false);
		st.equal(endsWith('abc', 'bcd', -Infinity), false);
		st.equal(endsWith('abc', 'abcd', -Infinity), false);
		st.equal(endsWith('abc', 'bcde', -Infinity), false);
		st.end();
	});

	t.test('position argument - -1', function(st) {
		st.equal(endsWith('abc', '', -1), true);
		st.equal(endsWith('abc', '\0', -1), false);
		st.equal(endsWith('abc', 'c', -1), false);
		st.equal(endsWith('abc', 'b', -1), false);
		st.equal(endsWith('abc', 'a', -1), false);
		st.equal(endsWith('abc', 'ab', -1), false);
		st.equal(endsWith('abc', 'bc', -1), false);
		st.equal(endsWith('abc', 'abc', -1), false);
		st.equal(endsWith('abc', 'bcd', -1), false);
		st.equal(endsWith('abc', 'abcd', -1), false);
		st.equal(endsWith('abc', 'bcde', -1), false);
		st.end();
	});

	t.test('position argument - -0', function(st) {
		st.equal(endsWith('abc', '', -0), true);
		st.equal(endsWith('abc', '\0', -0), false);
		st.equal(endsWith('abc', 'c', -0), false);
		st.equal(endsWith('abc', 'b', -0), false);
		st.equal(endsWith('abc', 'a', -0), false);
		st.equal(endsWith('abc', 'ab', -0), false);
		st.equal(endsWith('abc', 'bc', -0), false);
		st.equal(endsWith('abc', 'abc', -0), false);
		st.equal(endsWith('abc', 'bcd', -0), false);
		st.equal(endsWith('abc', 'abcd', -0), false);
		st.equal(endsWith('abc', 'bcde', -0), false);
		st.end();
	});

	t.test('position argument - +0', function(st) {
		st.equal(endsWith('abc', '', +0), true);
		st.equal(endsWith('abc', '\0', +0), false);
		st.equal(endsWith('abc', 'c', +0), false);
		st.equal(endsWith('abc', 'b', +0), false);
		st.equal(endsWith('abc', 'a', +0), false);
		st.equal(endsWith('abc', 'ab', +0), false);
		st.equal(endsWith('abc', 'bc', +0), false);
		st.equal(endsWith('abc', 'abc', +0), false);
		st.equal(endsWith('abc', 'bcd', +0), false);
		st.equal(endsWith('abc', 'abcd', +0), false);
		st.equal(endsWith('abc', 'bcde', +0), false);
		st.end();
	});

	t.test('position argument - 1', function(st) {
		st.equal(endsWith('abc', '', 1), true);
		st.equal(endsWith('abc', '\0', 1), false);
		st.equal(endsWith('abc', 'c', 1), false);
		st.equal(endsWith('abc', 'b', 1), false);
		st.equal(endsWith('abc', 'a', 1), true);
		st.equal(endsWith('abc', 'ab', 1), false);
		st.equal(endsWith('abc', 'bc', 1), false);
		st.equal(endsWith('abc', 'abc', 1), false);
		st.equal(endsWith('abc', 'bcd', 1), false);
		st.equal(endsWith('abc', 'abcd', 1), false);
		st.equal(endsWith('abc', 'bcde', 1), false);
		st.end();
	});

	t.test('position argument - common integer', function(st) {
		st.equal(endsWith('abc', '', 2), true);
		st.equal(endsWith('abc', '\0', 2), false);
		st.equal(endsWith('abc', 'c', 2), false);
		st.equal(endsWith('abc', 'b', 2), true);
		st.equal(endsWith('abc', 'a', 2), false);
		st.equal(endsWith('abc', 'ab', 2), true);
		st.equal(endsWith('abc', 'bc', 2), false);
		st.equal(endsWith('abc', 'abc', 2), false);
		st.equal(endsWith('abc', 'bcd', 2), false);
		st.equal(endsWith('abc', 'abcd', 2), false);
		st.equal(endsWith('abc', 'bcde', 2), false);
		st.end();
	});

	t.test('position argument - +Infinity', function(st) {
		st.equal(endsWith('abc', '', +Infinity), true);
		st.equal(endsWith('abc', '\0', +Infinity), false);
		st.equal(endsWith('abc', 'c', +Infinity), true);
		st.equal(endsWith('abc', 'b', +Infinity), false);
		st.equal(endsWith('abc', 'a', +Infinity), false);
		st.equal(endsWith('abc', 'ab', +Infinity), false);
		st.equal(endsWith('abc', 'bc', +Infinity), true);
		st.equal(endsWith('abc', 'abc', +Infinity), true);
		st.equal(endsWith('abc', 'bcd', +Infinity), false);
		st.equal(endsWith('abc', 'abcd', +Infinity), false);
		st.equal(endsWith('abc', 'bcde', +Infinity), false);
		st.end();
	});

	t.test('position argument - true', function(st) {
		st.equal(endsWith('abc', '', true), true);
		st.equal(endsWith('abc', '\0', true), false);
		st.equal(endsWith('abc', 'c', true), false);
		st.equal(endsWith('abc', 'b', true), false);
		st.equal(endsWith('abc', 'a', true), true);
		st.equal(endsWith('abc', 'ab', true), false);
		st.equal(endsWith('abc', 'bc', true), false);
		st.equal(endsWith('abc', 'abc', true), false);
		st.equal(endsWith('abc', 'bcd', true), false);
		st.equal(endsWith('abc', 'abcd', true), false);
		st.equal(endsWith('abc', 'bcde', true), false);
		st.end();
	});

	t.test('position argument - string', function(st) {
		st.equal(endsWith('abc', '', 'x'), true);
		st.equal(endsWith('abc', '\0', 'x'), false);
		st.equal(endsWith('abc', 'c', 'x'), false);
		st.equal(endsWith('abc', 'b', 'x'), false);
		st.equal(endsWith('abc', 'a', 'x'), false);
		st.equal(endsWith('abc', 'ab', 'x'), false);
		st.equal(endsWith('abc', 'bc', 'x'), false);
		st.equal(endsWith('abc', 'abc', 'x'), false);
		st.equal(endsWith('abc', 'bcd', 'x'), false);
		st.equal(endsWith('abc', 'abcd', 'x'), false);
		st.equal(endsWith('abc', 'bcde', 'x'), false);
		st.end();
	});

	t.test('search regexp', function(st) {
		st.equal(endsWith('[a-z]+(bar)?', '(bar)?'), true);
		st['throws'](function() { endsWith('[a-z]+(bar)?', /(bar)?/); }, TypeError);
		st.equal(endsWith('[a-z]+(bar)?', '[a-z]+', 6), true);
		st['throws'](function() { endsWith('[a-z]+(bar)?', /(bar)?/); }, TypeError);
		st['throws'](function() { endsWith('[a-z]+/(bar)?/', /(bar)?/); }, TypeError);
		st.end();
	});

	t.test('astral code points', function(st) {
		// https://mathiasbynens.be/notes/javascript-unicode#poo-test
		var string = 'I\xF1t\xEBrn\xE2ti\xF4n\xE0liz\xE6ti\xF8n\u2603\uD83D\uDCA9';
		st.equal(string.endsWith(''), true);
		st.equal(string.endsWith('\xF1t\xEBr'), false);
		st.equal(string.endsWith('\xF1t\xEBr', 5), true);
		st.equal(string.endsWith('\xE0liz\xE6'), false);
		st.equal(string.endsWith('\xE0liz\xE6', 16), true);
		st.equal(string.endsWith('\xF8n\u2603\uD83D\uDCA9'), true);
		st.equal(string.endsWith('\xF8n\u2603\uD83D\uDCA9', 23), true);
		st.equal(string.endsWith('\u2603'), false);
		st.equal(string.endsWith('\u2603', 21), true);
		st.equal(string.endsWith('\uD83D\uDCA9'), true);
		st.equal(string.endsWith('\uD83D\uDCA9', 23), true);
		st.end();
	});

	t.test('nullish this object', function(st) {
		st['throws'](function() { endsWith(undefined); }, TypeError);
		st['throws'](function() { endsWith(undefined, 'b'); }, TypeError);
		st['throws'](function() { endsWith(undefined, 'b', 4); }, TypeError);
		st['throws'](function() { endsWith(null); }, TypeError);
		st['throws'](function() { endsWith(null, 'b'); }, TypeError);
		st['throws'](function() { endsWith(null, 'b', 4); }, TypeError);
		st.end();
	});

	t.test('cast this object', function(st) {
		st.equal(endsWith(42, '2'), true);
		st.equal(endsWith(42, '4'), false);
		st.equal(endsWith(42, 'b', 4), false);
		st.equal(endsWith(42, '2', 1), false);
		st.equal(endsWith(42, '2', 4), true);
		st.equal(endsWith({ 'toString': function() { return 'abc'; } }, 'b', 0), false);
		st.equal(endsWith({ 'toString': function() { return 'abc'; } }, 'b', 1), false);
		st.equal(endsWith({ 'toString': function() { return 'abc'; } }, 'b', 2), true);
		st['throws'](function() { endsWith({ 'toString': function() { throw RangeError(); } }, /./); }, RangeError);
		st['throws'](function() { endsWith({ 'toString': function() { return 'abc' } }, /./); }, TypeError);
		st.end();
	});
};
