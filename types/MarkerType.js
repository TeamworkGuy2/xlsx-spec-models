"use strict";
var ColumnId = require("../types/ColumnId");
var ColumnOffset = require("../types/ColumnOffset");
var RowId = require("../types/RowId");
var RowOffset = require("../types/RowOffset");
var MarkerType = /** @class */ (function () {
    function MarkerType() {
    }
    MarkerType.read = function (xmlDoc, elem, expectedTagName, parentTags) {
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
        var colElem = xmlDoc.queryOneChild(elem, "col");
        var colOffElem = xmlDoc.queryOneChild(elem, "colOff");
        var rowElem = xmlDoc.queryOneChild(elem, "row");
        var rowOffElem = xmlDoc.queryOneChild(elem, "rowOff");
        return {
            col: ColumnId.read(xmlDoc, colElem),
            colOff: ColumnOffset.read(xmlDoc, colOffElem),
            row: RowId.read(xmlDoc, rowElem),
            rowOff: RowOffset.read(xmlDoc, rowOffElem),
        };
    };
    MarkerType.write = function (xmlDoc, inst, tagName) {
        var elem = xmlDoc.dom.createElement(tagName);
        elem.appendChild(ColumnId.write(xmlDoc, inst.col));
        elem.appendChild(ColumnOffset.write(xmlDoc, inst.colOff));
        elem.appendChild(RowId.write(xmlDoc, inst.row));
        elem.appendChild(RowOffset.write(xmlDoc, inst.rowOff));
        return elem;
    };
    MarkerType.type = MarkerType; // TODO type-checker
    return MarkerType;
}());
module.exports = MarkerType;
