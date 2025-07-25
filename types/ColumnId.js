"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnId = void 0;
var IntElement_1 = require("../types/IntElement");
var ColumnId = /** @class */ (function () {
    function ColumnId() {
    }
    ColumnId.read = function (xmlDoc, elem) {
        return IntElement_1.IntElement.read(xmlDoc, elem, "xdr:col", "from, to");
    };
    ColumnId.write = function (xmlDoc, inst) {
        return IntElement_1.IntElement.write(xmlDoc, inst, "xdr:col");
    };
    ColumnId.type = ColumnId; // TODO type-checker
    return ColumnId;
}());
exports.ColumnId = ColumnId;
