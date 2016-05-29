"use strict";
var SheetView = require("./SheetView");
/** <sheetViews> (Sheet Views) "x:sheetViews"
 * parent: dialogsheet (§18.3.1.34); worksheet (§18.3.1.99)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.sheetviews.aspx
 */
var SheetViews = (function () {
    function SheetViews() {
    }
    SheetViews.read = function (xmlDoc, elem) {
        if (elem.tagName !== "sheetViews") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "sheetViews", "dialogsheet, worksheet");
        }
        var sheetViewElems = xmlDoc.domHelper.queryAllChilds(elem, "sheetView");
        return {
            sheetViews: xmlDoc.readOpenXml.readMulti(xmlDoc, SheetView.read, sheetViewElems),
        };
    };
    SheetViews.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("sheetViews");
        var sheetViewElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, SheetView.write, inst.sheetViews);
        xmlDoc.domHelper.addChilds(elem, sheetViewElems);
        return elem;
    };
    SheetViews.type = SheetViews; // TODO type-checker
    return SheetViews;
}());
module.exports = SheetViews;
