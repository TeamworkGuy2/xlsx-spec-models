"use strict";
var StringElement = require("../base-types/StringElement");
/** <v> (Cell Value) "x:v"
 * parent: c (§18.3.1.4); cell (§18.14.1); nc (§18.11.1.3); oc (§18.11.1.5); tp (§18.15.3)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.cellvalue.aspx
 */
var CellValue = (function () {
    function CellValue() {
    }
    CellValue.read = function (xmlDoc, elem) {
        return StringElement.read(xmlDoc, elem, "v", "c, cell, nc, oc, tp");
    };
    CellValue.write = function (xmlDoc, inst) {
        return StringElement.write(xmlDoc, inst, "v");
    };
    CellValue.type = CellValue; // TODO type-checker
    return CellValue;
}());
module.exports = CellValue;
