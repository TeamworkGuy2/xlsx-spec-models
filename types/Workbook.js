"use strict";
var Sheets = require("./Sheets");
var Workbook = (function () {
    function Workbook() {
    }
    Workbook.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "workbook", "root element of SpreadsheetML Workbook part");
        var sheetsElem = xmlDoc.queryOneChild(elem, "sheets");
        var inst = {
            sheets: Sheets.read(xmlDoc, sheetsElem),
        };
        return inst;
    };
    Workbook.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("workbook");
        elem.appendChild(Sheets.write(xmlDoc, inst.sheets));
        return elem;
    };
    Workbook.type = Workbook; // TODO type-checker
    return Workbook;
}());
module.exports = Workbook;
