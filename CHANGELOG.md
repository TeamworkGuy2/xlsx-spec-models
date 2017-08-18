# Change Log
All notable changes to this project will be documented in this file.
This project does its best to adhere to [Semantic Versioning](http://semver.org/).


--------
### [0.3.0](N/A) - 2017-08-18
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