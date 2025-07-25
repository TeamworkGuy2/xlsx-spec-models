TypeScript XLSX Models
==============

npm: [`xlsx-spec-models`](https://www.npmjs.com/package/xlsx-spec-models)

TypeScript models for most of the OpenXML spreadsheet (XLSX) spec with methods to read/write from a DOM object.

The Open XML specification referenced throughout this project files can be found here: http://www.ecma-international.org/publications/standards/Ecma-376.htm
Warning ~40MB PDF - [ECMA-376 5th edition Part 1](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-376,%20Fifth%20Edition,%20Part%201%20-%20Fundamentals%20And%20Markup%20Language%20Reference.zip)
Additional reference material: https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet?view=openxml-2.8.1

### Usage
Alone these models are difficult to use. You need to construct a real or mock DOM 'document' and write the models to the document. There is a companion library [xlsx-spec-utils](https://github.com/TeamworkGuy2/xlsx-spec-utils) which provides helpers to read and write XML.

Here is a Node.js example of reading an XML stream into a [`Workbook`](root-types/Workbook.ts) and writing it back to an XML string.

```ts
import { Workbook } from 'xlsx-spec-models/root-types/Workbook';
import DomBuilderHelper = require('@twg2/dom-builder/dom/DomBuilderHelper'); // for mock DOM 'document' in Node.js runtime
import { XmlFileInst } = require('xlsx-spec-utils/files/XmlFileInst');

// Read from XML
const xmlStr = /* load XML */;
const dom = DomBuilderHelper.getParser().parseFromString(xmlStr, 'application/xml');
var xmlDoc = XmlFileInst.newInst(dom);
const myWorkbook = Workbook.read(xmlDoc, <HTMLElement>xmlDoc.dom.childNodes[0]);

// modify 'myWorkbook'...

// Write to XML
xmlDoc.removeChilds(<HTMLElement>(<Document>xmlDoc.dom).childNodes[0]);
var elem = Workbook.write(xmlDoc, myWorkbook);

var elemDom = <HTMLElement>(<Document>xmlDoc.dom).childNodes[0];
xmlDoc.addChilds(elemDom, xmlDoc.getChildNodes(elem));

const xmlText = DomBuilderHelper.getSerializer().serializeToString(xmlDoc.dom);
/* write 'xmlText' */
```

If you need a mock DOM 'document' in Node.js, you can use something like [jsdom](https://www.npmjs.com/package/jsdom) or a lightweight version created to accompany this library [`@twg2/dom-builder`](https://github.com/TeamworkGuy2/dom-builder).
