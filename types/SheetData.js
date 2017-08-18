"use strict";
var Row = require("./Row");
var SheetData = (function () {
    function SheetData() {
    }
    SheetData.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "sheetData", "worksheet");
        var rowElems = xmlDoc.queryAllChilds(elem, "row");
        return {
            rows: xmlDoc.readMulti(Row.read, rowElems),
        };
    };
    SheetData.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("sheetData");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Row.write, inst.rows));
        return elem;
    };
    SheetData.type = SheetData; // TODO type-checker
    return SheetData;
}());
module.exports = SheetData;
