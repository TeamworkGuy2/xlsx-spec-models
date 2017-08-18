"use strict";
var SheetView = require("./SheetView");
var SheetViews = (function () {
    function SheetViews() {
    }
    SheetViews.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "sheetViews", "dialogsheet, worksheet");
        var sheetViewElems = xmlDoc.queryAllChilds(elem, "sheetView");
        return {
            sheetViews: xmlDoc.readMulti(SheetView.read, sheetViewElems),
        };
    };
    SheetViews.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("sheetViews");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(SheetView.write, inst.sheetViews));
        return elem;
    };
    SheetViews.type = SheetViews; // TODO type-checker
    return SheetViews;
}());
module.exports = SheetViews;
