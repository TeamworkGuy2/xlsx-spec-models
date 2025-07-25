/// <reference path="./open-xml.d.ts" />
/// <reference path="./open-xml-io.d.ts" />

import * as CalcChain from "./root-types/CalcChain";
import * as Comments from "./root-types/Comments";
import * as ContentTypes from "./root-types/ContentTypes";
import * as Relationships from "./root-types/Relationships";
import * as SharedStringTable from "./root-types/SharedStringTable";
import * as Stylesheet from "./root-types/Stylesheet";
import * as Workbook from "./root-types/Workbook";
import * as Worksheet from "./root-types/Worksheet";
import * as WorksheetDrawing from "./root-types/WorksheetDrawing";

var cc = CalcChain;
var c = Comments;
var ct = ContentTypes;
var r = Relationships.Relationship;
var sst = SharedStringTable;
var s = Stylesheet;
var wb = Workbook;
var ws = Worksheet;
var wd = WorksheetDrawing;

export module XlsxSpecModels {
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