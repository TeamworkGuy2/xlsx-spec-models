"use strict";
var Column = require("./Column");
var Columns = (function () {
    function Columns() {
    }
    Columns.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "cols", "worksheet");
        var colElems = xmlDoc.queryAllChilds(elem, "col");
        return {
            cols: xmlDoc.readMulti(Column.read, colElems),
        };
    };
    Columns.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("cols");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Column.write, inst.cols));
        return elem;
    };
    Columns.type = Columns; // TODO type-checker
    return Columns;
}());
module.exports = Columns;
