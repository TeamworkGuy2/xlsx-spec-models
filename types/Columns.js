"use strict";
var Column = require("./Column");
/** <cols> (Column Information) "x:cols"
 * parent: worksheet (§18.3.1.99)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.columns.aspx
 */
var Columns = (function () {
    function Columns() {
    }
    Columns.read = function (xmlDoc, elem) {
        if (elem.tagName !== "cols") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "cols", "worksheet");
        }
        var colElems = xmlDoc.domHelper.queryAllChilds(elem, "col");
        return {
            cols: xmlDoc.readOpenXml.readMulti(xmlDoc, Column.read, colElems),
        };
    };
    Columns.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("cols");
        var colElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, Column.write, inst.cols);
        xmlDoc.domHelper.addChilds(elem, colElems);
        return elem;
    };
    Columns.type = Columns; // TODO type-checker
    return Columns;
}());
module.exports = Columns;
