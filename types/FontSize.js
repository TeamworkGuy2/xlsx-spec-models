"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FontSize = void 0;
var FloatAttribute_1 = require("../types/FloatAttribute");
var FontSize = /** @class */ (function () {
    function FontSize() {
    }
    FontSize.read = function (xmlDoc, elem) {
        return FloatAttribute_1.FloatAttribute.read(xmlDoc, elem, "sz", "font, rPr");
    };
    FontSize.write = function (xmlDoc, inst) {
        return FloatAttribute_1.FloatAttribute.write(xmlDoc, inst, "sz");
    };
    FontSize.copy = function (inst) {
        return FloatAttribute_1.FloatAttribute.copy(inst);
    };
    FontSize.type = FontSize; // TODO type-checker
    return FontSize;
}());
exports.FontSize = FontSize;
