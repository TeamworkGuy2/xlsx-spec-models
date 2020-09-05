# Change Log
All notable changes to this project will be documented in this file.
This project does its best to adhere to [Semantic Versioning](http://semver.org/).


--------
### [0.5.0](N/A) - 2020-09-05
#### Changes
* Update to TypeScript 4.0


--------
### [0.4.10](https://github.com/TeamworkGuy2/xlsx-spec-models/commit/5c3cb32c0b968ca42e65f6938eb83bc0ca98e0be) - 2019-11-08
#### Changes
* Update to TypeScript 3.7


--------
### [0.4.9](https://github.com/TeamworkGuy2/xlsx-spec-models/commit/fcd4706bc6452d6eeec82250c16e0258888f72aa) - 2019-07-06
#### Changes
* Update to TypeScript 3.5


--------
### [0.4.8](https://github.com/TeamworkGuy2/xlsx-spec-models/commit/68a03571fe6877fdf9c3ca97b68333cfcfbf3ecc) - 2019-05-24
#### Changes
* `dom-builder` dependency update to v0.7.0 (improved attribute handling)
* Switching `DocumentLike.attr*()` calls from passing 'elem.attributes' to simply passing 'elem'


--------
### [0.4.7](https://github.com/TeamworkGuy2/xlsx-spec-models/commit/349068f0636a0f240ee979a17c41af549bb5ea3b) - 2019-03-21
#### Fixed
* `dom-builder` import/reference paths not being updated to `@twg2/dom-builder`


--------
### [0.4.6](https://github.com/TeamworkGuy2/xlsx-spec-models/commit/49e5289b29e82ad1c889ca824ab8091f8ccd78dc) - 2019-03-21
#### Changed
* Switch `dom-builder` dependency from github to npm `@twg2/dom-builder`


--------
### [0.4.5](https://github.com/TeamworkGuy2/xlsx-spec-models/commit/3ad225d5329f26e4f1e31ae1975b0ade27adfada) - 2018-12-29
#### Changed
* Update to TypeScript 3.2
* Update @types dependencies


--------
### [0.4.4](https://github.com/TeamworkGuy2/xlsx-spec-models/commit/0b1f45dedab6519ed50e8ee4e2e400dd63bd988e) - 2018-10-20
#### Changed
* Switch `package.json` github dependencies from tag urls to release tarballs to simplify npm install (doesn't require git to npm install tarballs)
* Added `repository` to `package.json`


--------
### [0.4.3](https://github.com/TeamworkGuy2/xlsx-spec-models/commit/cdbe5d0f6c0a562da0a9533510742452e331e635) - 2018-10-17
#### Changed
* Update to TypeScript 3.1
* Update dev dependencies and @types
* Enable `tsconfig.json` `strict` and fix compile errors
* Removed compiled bin tarball in favor of git tags


--------
### [0.4.2](https://github.com/TeamworkGuy2/xlsx-spec-models/commit/33a67650de5c82f7421dab2c7593ec6fb8efd821) - 2018-04-08
#### Changed
* Update to TypeScript 2.8
* Update tsconfig.json with `noImplicitReturns: true` and `forceConsistentCasingInFileNames: true`
* Added tarball and package.json npm script `build-package` reference for creating tarball


--------
### [0.4.1](https://github.com/TeamworkGuy2/xlsx-spec-models/commit/ebceb72c60344d8262dd2a8fd0f66b61ac2d76b7) - 2018-02-28
#### Changed
* Update to TypeScript 2.7
* Update dependencies: mocha, @types/chai, @types/mocha, @types/node
* Enable tsconfig.json `noImplicitAny`


--------
### [0.4.0](https://github.com/TeamworkGuy2/xlsx-spec-models/commit/0ec93974ea8a0eca808544e6ede40927f1d66b1a) - 2017-10-03
#### Changed
* Combined most `types/` into new `root-types/` modules such as `CalcChain`, `SharedStringTable`, and `Workbook`
* Moved `base-types/` to `types/`


--------
### [0.3.1](https://github.com/TeamworkGuy2/xlsx-spec-models/commit/040c4aa76c2480acee6ec4006a11816aca3d7a3e) - 2017-09-23
#### Added
* Fix `Workbook` not preserving import data required by MS Office through to export


--------
### [0.3.0](https://github.com/TeamworkGuy2/xlsx-spec-models/commit/36851aba92ef41c64c2179b45ea92bc5862e1b39) - 2017-08-18
#### Added
* `Workbook` interfaces and types

#### Changed
* Updated to TypeScript 2.4
* Moved `open-xml-io.d.ts` from `xlsx-spec-utils` library to this project
* Switched from `Document` and `HTMLElement` in `open-xml-io.d.ts` interfaces to `DocumentLike` and `ElementLike` (going along with `dom-builder` update)
* Added `dom-builder@0.4.1` dev-dependency since it is required to compile the TypeScript code
* Made many interface members optional based on open-xml spec and experience with real world xlsx files


--------
### [0.2.1](https://github.com/TeamworkGuy2/xlsx-spec-models/commit/8de4e66af713401f5bd65b8970e473a920d7002f) - 2017-05-09
#### Changed
* Updated to TypeScript 2.3, added tsconfig.json, use @types/ definitions


--------
### [0.2.0](https://github.com/TeamworkGuy2/xlsx-spec-models/commit/2b1727cf374b71f7ddc2ddb412ea07c2203db84f) - 2017-01-28
#### Added
*  WorksheetDrawing ('xl/drawings/drawing#.xml') spreadsheet part support

#### Changed
* Moved documentation from implementation classes to `open-xml.d.ts`
* `xlsx-spec-utils` refactored
  * `OpenXmlIo.ParsedFile` interface refactored into `OpenXmlIo.ReaderContext` and `OpenXmlIo.WriterContext` for read() and write() methods, almost all related method calls simplified
  * Use `xmlDoc.validator.expectNode(...)` instead of `if(...) { xmlDoc.validator.unexpectedNode(...) }`


--------
### [0.1.0](https://github.com/TeamworkGuy2/xlsx-spec-models/commit/db3df614b82eb17135ce5b48d0154b245e9fbddb) - 2016-05-28
#### Added
Initial commit of XLSX format models with read/write methods.