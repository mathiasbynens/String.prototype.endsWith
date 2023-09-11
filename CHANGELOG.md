# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.0.0](https://github.com/mathiasbynens/String.prototype.endsWith/compare/v0.2.0...v1.0.0) - 2020-05-21

### Commits

- Merge pull request #9 from mathiasbynens/nr/es-shim-api [`272752d`](https://github.com/mathiasbynens/String.prototype.endsWith/commit/272752d0bd32884fb6acb9bcf5e05f2e46c8310b)
- Use `tape` in tests and run them on every Node.js version [`8030508`](https://github.com/mathiasbynens/String.prototype.endsWith/commit/8030508ea2fcebf20ec3c1b7f30cf525a3d26185)
- [breaking] Implement the es-shim-api interface [`c6eb152`](https://github.com/mathiasbynens/String.prototype.endsWith/commit/c6eb1525f9a405c72c3f63d7fb3453c7b10f2ad6)
- Use HTTPS URLs where possible [`a0eea7f`](https://github.com/mathiasbynens/String.prototype.endsWith/commit/a0eea7f368c6f3f00a1f7a53f01f8c05db325e12)
- Update readme [`15ba134`](https://github.com/mathiasbynens/String.prototype.endsWith/commit/15ba134cabae6af361afc60865abce6bbe6c2482)
- Test that it respects the es-shim-api interface [`1baf690`](https://github.com/mathiasbynens/String.prototype.endsWith/commit/1baf69037e3b852fcc238a4bda85884a0a99b136)
- Update repo config files [`e5b7310`](https://github.com/mathiasbynens/String.prototype.endsWith/commit/e5b73100fe51f680f0207fc77f7d22682e46cd8d)
- Improve error messages [`6853d40`](https://github.com/mathiasbynens/String.prototype.endsWith/commit/6853d40f69ed13350deb2cd3007eb508407f7665)

## [v0.2.0](https://github.com/mathiasbynens/String.prototype.endsWith/compare/v0.1.0...v0.2.0) - 2014-04-10

### Fixed

- Follow spec order [`#5`](https://github.com/mathiasbynens/String.prototype.endsWith/issues/5)

### Commits

- Avoid IE8’s broken `Object.defineProperty` [`e27c8f2`](https://github.com/mathiasbynens/String.prototype.endsWith/commit/e27c8f24a761e88792e5a850834e103cc01b5c3e)
- Add more tests [`cc63a25`](https://github.com/mathiasbynens/String.prototype.endsWith/commit/cc63a259d2d2814d28745ec6e543c8596879dbcd)
- Make the `endsWith` property non-enumerable [`bffbff9`](https://github.com/mathiasbynens/String.prototype.endsWith/commit/bffbff90911cabf88ff0541ad44205018b5e9ab8)
- Avoid `lastIndexOf` [`bb6501c`](https://github.com/mathiasbynens/String.prototype.endsWith/commit/bb6501c9fab6c2f380dc1a45a8efd024a0719bca)
- Tag the v0.2.0 release [`ca2dddb`](https://github.com/mathiasbynens/String.prototype.endsWith/commit/ca2dddb7e3a6f7fe8d996b02eec6ee908c958663)
- README: Explicitly request SVG badges [`c20c83a`](https://github.com/mathiasbynens/String.prototype.endsWith/commit/c20c83a5efadc594431de9ba4dcfb58786409007)
- Perform RegExp check after `ToString(this)` [`f375ac0`](https://github.com/mathiasbynens/String.prototype.endsWith/commit/f375ac092cc7f5e52b2f6216c9808c8f8e09de50)
- README: Mention polyfills for similar functions [`960fccb`](https://github.com/mathiasbynens/String.prototype.endsWith/commit/960fccb4d7139bd2361e8d91c74e7688074c5bb9)
- Use `charCodeAt` instead of `charAt` [`bb1901f`](https://github.com/mathiasbynens/String.prototype.endsWith/commit/bb1901f9173c5df8ca7444919cfbe18457ebfa3f)
- Avoid `isNaN` [`dd38046`](https://github.com/mathiasbynens/String.prototype.endsWith/commit/dd3804682838a24c10cb25371fc2b4a95f693d37)
- README: Update Traceur link [`c34bff5`](https://github.com/mathiasbynens/String.prototype.endsWith/commit/c34bff5eaecf484658ced6e291c08bf074975f23)
- README: Update es6-shim link [`f51af73`](https://github.com/mathiasbynens/String.prototype.endsWith/commit/f51af73a18afaef7b51264cb8cf81525d457c449)
- Fix typo in test [`e10ff32`](https://github.com/mathiasbynens/String.prototype.endsWith/commit/e10ff323b6a1b3489cfcd8776c3248a4db617ac4)
- README: Update link [`c28d87c`](https://github.com/mathiasbynens/String.prototype.endsWith/commit/c28d87cf41d32c27d52e1dc97cd02c3bf34199b4)
- README: Note that Traceur now uses this polyfill [`2e2d880`](https://github.com/mathiasbynens/String.prototype.endsWith/commit/2e2d880a24c42754937e5039ada1a9b938f2f16f)

## v0.1.0 - 2013-12-17

### Commits

- Initial commit [`4bf8ebd`](https://github.com/mathiasbynens/String.prototype.endsWith/commit/4bf8ebdbc0e77cb7be77ca69dc5b29c734ed7e12)
