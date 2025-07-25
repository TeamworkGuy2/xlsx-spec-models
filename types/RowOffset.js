"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RowOffset = void 0;
var IntElement_1 = require("../types/IntElement");
var RowOffset = /** @class */ (function () {
    function RowOffset() {
    }
    RowOffset.read = function (xmlDoc, elem) {
        return IntElement_1.IntElement.read(xmlDoc, elem, "xdr:rowOff", "from, to");
    };
    RowOffset.write = function (xmlDoc, inst) {
        return IntElement_1.IntElement.write(xmlDoc, inst, "xdr:rowOff");
    };
    RowOffset.type = RowOffset; // TODO type-checker
    return RowOffset;
}());
exports.RowOffset = RowOffset;
