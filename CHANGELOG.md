# Change Log
All notable changes to this project will be documented in this file.
This project does its best to adhere to [Semantic Versioning](http://semver.org/).


--------
### [0.2.1](N/A) - 2017-05-09
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