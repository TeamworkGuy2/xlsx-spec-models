"use strict";
/// <reference path="./open-xml.d.ts" />
/// <reference path="./open-xml-io.d.ts" />
var CalcChain = require("./root-types/CalcChain");
var Comments = require("./root-types/Comments");
var ContentTypes = require("./root-types/ContentTypes");
var Relationships = require("./root-types/Relationships");
var SharedStringTable = require("./root-types/SharedStringTable");
var Stylesheet = require("./root-types/Stylesheet");
var Workbook = require("./root-types/Workbook");
var Worksheet = require("./root-types/Worksheet");
var WorksheetDrawing = require("./root-types/WorksheetDrawing");
var cc = CalcChain;
var c = Comments;
var ct = ContentTypes;
var r = Relationships.Relationship;
var sst = SharedStringTable;
var s = Stylesheet;
var wb = Workbook;
var ws = Worksheet;
var wd = WorksheetDrawing;
var XlsxSpecModels;
(function (XlsxSpecModels) {
    XlsxSpecModels.CalcChain = cc;
    XlsxSpecModels.Comments = c;
    XlsxSpecModels.ContentTypes = ct;
    XlsxSpecModels.Relationships = r;
    XlsxSpecModels.SharedStringTable = sst;
    XlsxSpecModels.Stylesheet = s;
    XlsxSpecModels.Workbook = wb;
    XlsxSpecModels.Worksheet = ws;
    XlsxSpecModels.WorksheetDrawing = wd;
})(XlsxSpecModels || (XlsxSpecModels = {}));
module.exports = XlsxSpecModels;
