"use strict";
var TwoCellAnchor = require("./TwoCellAnchor");
var WorksheetDrawing = (function () {
    function WorksheetDrawing() {
    }
    WorksheetDrawing.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "xdr:wsDr", "root element of SpreadsheetML Drawings part");
        var twoCellAnchorElems = xmlDoc.queryAllChilds(elem, "twoCellAnchor");
        return {
            twoCellAnchors: xmlDoc.readMulti(TwoCellAnchor.read, twoCellAnchorElems),
        };
    };
    WorksheetDrawing.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("xdr:wsDr");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(TwoCellAnchor.write, inst.twoCellAnchors));
        return elem;
    };
    return WorksheetDrawing;
}());
WorksheetDrawing.type = WorksheetDrawing; // TODO type-checker
module.exports = WorksheetDrawing;
