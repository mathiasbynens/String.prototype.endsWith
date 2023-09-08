# ES6 `String.prototype.endsWith` polyfill [![string.prototype.endswith on npm](https://img.shields.io/npm/v/string.prototype.endswith)](https://www.npmjs.com/package/string.prototype.endswith)

A robust & optimized polyfill for [the `String.prototype.endsWith` method in ECMAScript 6](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.endswith).

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-string.prototype.endswith).

Other polyfills for `String.prototype.endsWith` are available:

* <https://github.com/paulmillr/es6-shim/blob/d8c4ec246a15e7df55da60b7f9b745af84ca9021/es6-shim.js#L175-L184> by [Paul Miller](http://paulmillr.com/) (~~fails some tests: [1](https://github.com/paulmillr/es6-shim/issues/168), [2](https://github.com/paulmillr/es6-shim/issues/175)~~ passes all tests)
* <https://github.com/google/traceur-compiler/blob/315bdad05d41de46d25337422d66686d63100d7a/src/runtime/polyfills/String.js#L39-L66> by Google (~~[fails a lot of tests](https://github.com/google/traceur-compiler/pull/555)~~ now uses this polyfill and passes all tests)

## Installation

Via [npm](http://npmjs.org/):

```bash
npm install string.prototype.endswith
```

Then, in [Node.js](http://nodejs.org/):

```js
var endsWith = require('string.prototype.endswith');
```

```html
<script src="https://bundle.run/string.prototype.endswith"></script>
```

> **NOTE**: It's recommended that you install this module using a package manager
> such as `npm`, because loading multiple polyfills from a CDN (such as `bundle.run`)
> will lead to duplicated code.

## Notes

Polyfills + test suites for [`String.prototype.startsWith`](https://mths.be/startswith) and [`String.prototype.contains`](https://mths.be/contains) are available, too.

## For maintainers

### How to publish a new release

1. On the `main` branch, bump the version number in `package.json`:

    ```sh
    npm version patch
    ```

    Instead of `patch`, use `minor` or `major` [as needed](https://semver.org/).

    Note that this produces a Git commit + tag.

1. Push the release commit and tag:

    ```sh
    git push && git push --tags
    ```

    Our CI then automatically publishes the new release to npm.

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

This polyfill is available under the [MIT](https://mths.be/mit) license.
