"use strict";
var IntElement = require("../base-types/IntElement");
var ColumnOffset = (function () {
    function ColumnOffset() {
    }
    ColumnOffset.read = function (xmlDoc, elem) {
        return IntElement.read(xmlDoc, elem, "xdr:colOff", "from, to");
    };
    ColumnOffset.write = function (xmlDoc, inst) {
        return IntElement.write(xmlDoc, inst, "xdr:colOff");
    };
    return ColumnOffset;
}());
ColumnOffset.type = ColumnOffset; // TODO type-checker
module.exports = ColumnOffset;
