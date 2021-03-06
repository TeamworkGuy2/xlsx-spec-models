"use strict";
var IntElement = require("../types/IntElement");
var RowOffset = /** @class */ (function () {
    function RowOffset() {
    }
    RowOffset.read = function (xmlDoc, elem) {
        return IntElement.read(xmlDoc, elem, "xdr:rowOff", "from, to");
    };
    RowOffset.write = function (xmlDoc, inst) {
        return IntElement.write(xmlDoc, inst, "xdr:rowOff");
    };
    RowOffset.type = RowOffset; // TODO type-checker
    return RowOffset;
}());
module.exports = RowOffset;
