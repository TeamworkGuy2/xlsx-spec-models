"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RowId = void 0;
var IntElement_1 = require("../types/IntElement");
var RowId = /** @class */ (function () {
    function RowId() {
    }
    RowId.read = function (xmlDoc, elem) {
        return IntElement_1.IntElement.read(xmlDoc, elem, "xdr:row", "from, to");
    };
    RowId.write = function (xmlDoc, inst) {
        return IntElement_1.IntElement.write(xmlDoc, inst, "xdr:row");
    };
    RowId.type = RowId; // TODO type-checker
    return RowId;
}());
exports.RowId = RowId;
