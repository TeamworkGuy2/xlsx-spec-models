"use strict";
var Sheets = require("./Sheets");
var Workbook = (function () {
    function Workbook() {
    }
    Workbook.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "workbook", "root element of SpreadsheetML Workbook part");
        var sheetsElem = xmlDoc.queryOneChild(elem, "sheets");
        return {
            sheets: Sheets.read(xmlDoc, sheetsElem),
            bookViews: xmlDoc.queryOneChild(elem, "bookViews"),
            calcPr: xmlDoc.queryOneChild(elem, "calcPr"),
            fileVersion: xmlDoc.queryOneChild(elem, "fileVersion"),
            workbookPr: xmlDoc.queryOneChild(elem, "workbookPr"),
            extLst: xmlDoc.queryOneChild(elem, "extLst"),
        };
    };
    Workbook.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("workbook");
        if (inst.fileVersion) {
            elem.appendChild(inst.fileVersion);
        }
        if (inst.workbookPr) {
            elem.appendChild(inst.workbookPr);
        }
        if (inst.bookViews) {
            elem.appendChild(inst.bookViews);
        }
        elem.appendChild(Sheets.write(xmlDoc, inst.sheets));
        if (inst.calcPr) {
            elem.appendChild(inst.calcPr);
        }
        if (inst.extLst) {
            elem.appendChild(inst.extLst);
        }
        return elem;
    };
    Workbook.type = Workbook; // TODO type-checker
    return Workbook;
}());
module.exports = Workbook;
