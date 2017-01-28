"use strict";
var IntElement = require("../base-types/IntElement");
var RowOffset = (function () {
    function RowOffset() {
    }
    RowOffset.read = function (xmlDoc, elem) {
        return IntElement.read(xmlDoc, elem, "xdr:rowOff", "from, to");
    };
    RowOffset.write = function (xmlDoc, inst) {
        return IntElement.write(xmlDoc, inst, "xdr:rowOff");
    };
    return RowOffset;
}());
RowOffset.type = RowOffset; // TODO type-checker
module.exports = RowOffset;
