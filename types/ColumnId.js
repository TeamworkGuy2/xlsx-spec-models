"use strict";
var IntElement = require("../base-types/IntElement");
var ColumnId = (function () {
    function ColumnId() {
    }
    ColumnId.read = function (xmlDoc, elem) {
        return IntElement.read(xmlDoc, elem, "xdr:col", "from, to");
    };
    ColumnId.write = function (xmlDoc, inst) {
        return IntElement.write(xmlDoc, inst, "xdr:col");
    };
    ColumnId.type = ColumnId; // TODO type-checker
    return ColumnId;
}());
module.exports = ColumnId;
