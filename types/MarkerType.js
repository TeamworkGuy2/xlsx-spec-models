"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkerType = void 0;
var ColumnId_1 = require("../types/ColumnId");
var ColumnOffset_1 = require("../types/ColumnOffset");
var RowId_1 = require("../types/RowId");
var RowOffset_1 = require("../types/RowOffset");
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
            col: ColumnId_1.ColumnId.read(xmlDoc, colElem),
            colOff: ColumnOffset_1.ColumnOffset.read(xmlDoc, colOffElem),
            row: RowId_1.RowId.read(xmlDoc, rowElem),
            rowOff: RowOffset_1.RowOffset.read(xmlDoc, rowOffElem),
        };
    };
    MarkerType.write = function (xmlDoc, inst, tagName) {
        var elem = xmlDoc.dom.createElement(tagName);
        elem.appendChild(ColumnId_1.ColumnId.write(xmlDoc, inst.col));
        elem.appendChild(ColumnOffset_1.ColumnOffset.write(xmlDoc, inst.colOff));
        elem.appendChild(RowId_1.RowId.write(xmlDoc, inst.row));
        elem.appendChild(RowOffset_1.RowOffset.write(xmlDoc, inst.rowOff));
        return elem;
    };
    MarkerType.type = MarkerType; // TODO type-checker
    return MarkerType;
}());
exports.MarkerType = MarkerType;
