"use strict";
var IntElement = require("../types/IntElement");
var RowId = (function () {
    function RowId() {
    }
    RowId.read = function (xmlDoc, elem) {
        return IntElement.read(xmlDoc, elem, "xdr:row", "from, to");
    };
    RowId.write = function (xmlDoc, inst) {
        return IntElement.write(xmlDoc, inst, "xdr:row");
    };
    RowId.type = RowId; // TODO type-checker
    return RowId;
}());
module.exports = RowId;
