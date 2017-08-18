"use strict";
var Sheet = require("./Sheet");
var Sheets = (function () {
    function Sheets() {
    }
    Sheets.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "sheets", "workbook");
        var sheetElems = xmlDoc.queryAllChilds(elem, "sheet");
        return {
            sheets: xmlDoc.readMulti(Sheet.read, sheetElems),
        };
    };
    Sheets.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("sheets");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Sheet.write, inst.sheets));
        return elem;
    };
    Sheets.type = Sheets; // TODO type-checker
    return Sheets;
}());
module.exports = Sheets;
