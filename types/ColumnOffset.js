"use strict";
var IntElement = require("../types/IntElement");
var ColumnOffset = /** @class */ (function () {
    function ColumnOffset() {
    }
    ColumnOffset.read = function (xmlDoc, elem) {
        return IntElement.read(xmlDoc, elem, "xdr:colOff", "from, to");
    };
    ColumnOffset.write = function (xmlDoc, inst) {
        return IntElement.write(xmlDoc, inst, "xdr:colOff");
    };
    ColumnOffset.type = ColumnOffset; // TODO type-checker
    return ColumnOffset;
}());
module.exports = ColumnOffset;
