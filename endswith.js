/*! http://mths.be/endswith v0.1.0 by @mathias */
if (!String.prototype.endsWith) {
	(function() {
		'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
		var lastIndexOf = ''.lastIndexOf;
		var toString = {}.toString;
		String.prototype.endsWith = function(search) {
			if (
				this == null ||
				(search && toString.call(search) == '[object RegExp]')
			) {
				throw TypeError();
			}
			var string = String(this);
			var stringLength = string.length;
			var searchString = String(search);
			var searchLength = searchString.length;
			var pos = stringLength;
			if (arguments.length > 1) {
				var position = arguments[1];
				if (position !== undefined) {
					// `ToInteger`
					pos = position ? Number(position) : 0;
					if (isNaN(pos)) {
						pos = 0;
					}
				}
			}
			var end = Math.min(Math.max(pos, 0), stringLength);
			var start = end - searchLength;
			if (start < 0) {
				return false;
			}
			return lastIndexOf.call(string, searchString, start) == start;
		};
	}());
}
