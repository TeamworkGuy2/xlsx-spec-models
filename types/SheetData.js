"use strict";
var Row = require("./Row");
/** <sheetData> (Sheet Data) "x:sheetData"
 * parent: worksheet (§18.3.1.99)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.text.aspx
 */
var SheetData = (function () {
    function SheetData() {
    }
    SheetData.read = function (xmlDoc, elem) {
        if (elem.tagName !== "sheetData") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "sheetData", "worksheet");
        }
        var rowElems = xmlDoc.domHelper.queryAllChilds(elem, "row");
        return {
            rows: xmlDoc.readOpenXml.readMulti(xmlDoc, Row.read, rowElems),
        };
    };
    SheetData.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("sheetData");
        xmlDoc.domHelper.addChilds(elem, xmlDoc.writeOpenXml.writeMulti(xmlDoc, Row.write, inst.rows));
        return elem;
    };
    SheetData.type = SheetData; // TODO type-checker
    return SheetData;
}());
module.exports = SheetData;
