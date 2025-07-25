"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FontFamily = void 0;
var IntAttribute_1 = require("../types/IntAttribute");
var FontFamily = /** @class */ (function () {
    function FontFamily() {
    }
    FontFamily.read = function (xmlDoc, elem) {
        return IntAttribute_1.IntAttribute.read(xmlDoc, elem, "family", "font, rPr");
    };
    FontFamily.write = function (xmlDoc, inst) {
        return IntAttribute_1.IntAttribute.write(xmlDoc, inst, "family");
    };
    FontFamily.copy = function (inst) {
        return IntAttribute_1.IntAttribute.copy(inst);
    };
    FontFamily.type = FontFamily; // TODO type-checker
    return FontFamily;
}());
exports.FontFamily = FontFamily;
