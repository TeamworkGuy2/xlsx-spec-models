"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnOffset = void 0;
var IntElement_1 = require("../types/IntElement");
var ColumnOffset = /** @class */ (function () {
    function ColumnOffset() {
    }
    ColumnOffset.read = function (xmlDoc, elem) {
        return IntElement_1.IntElement.read(xmlDoc, elem, "xdr:colOff", "from, to");
    };
    ColumnOffset.write = function (xmlDoc, inst) {
        return IntElement_1.IntElement.write(xmlDoc, inst, "xdr:colOff");
    };
    ColumnOffset.type = ColumnOffset; // TODO type-checker
    return ColumnOffset;
}());
exports.ColumnOffset = ColumnOffset;
