/// <reference path="./open-xml.d.ts" />
/// <reference path="./open-xml-io.d.ts" />

import CalcChain = require("./root-types/CalcChain");
import Comments = require("./root-types/Comments");
import ContentTypes = require("./root-types/ContentTypes");
import Relationships = require("./root-types/Relationships");
import SharedStringTable = require("./root-types/SharedStringTable");
import Stylesheet = require("./root-types/Stylesheet");
import Workbook = require("./root-types/Workbook");
import Worksheet = require("./root-types/Worksheet");
import WorksheetDrawing = require("./root-types/WorksheetDrawing");

var cc = CalcChain;
var c = Comments;
var ct = ContentTypes;
var r = Relationships.Relationship;
var sst = SharedStringTable;
var s = Stylesheet;
var wb = Workbook;
var ws = Worksheet;
var wd = WorksheetDrawing;

module XlsxSpecModels {

    export var CalcChain = cc;

    export var Comments = c;

    export var ContentTypes = ct;

    export var Relationships = r;

    export var SharedStringTable = sst;

    export var Stylesheet = s;

    export var Workbook = wb;

    export var Worksheet = ws;

    export var WorksheetDrawing = wd;

}

export = XlsxSpecModels;
