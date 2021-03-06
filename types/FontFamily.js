"use strict";
var IntAttribute = require("../types/IntAttribute");
var FontFamily = /** @class */ (function () {
    function FontFamily() {
    }
    FontFamily.read = function (xmlDoc, elem) {
        return IntAttribute.read(xmlDoc, elem, "family", "font, rPr");
    };
    FontFamily.write = function (xmlDoc, inst) {
        return IntAttribute.write(xmlDoc, inst, "family");
    };
    FontFamily.copy = function (inst) {
        return IntAttribute.copy(inst);
    };
    FontFamily.type = FontFamily; // TODO type-checker
    return FontFamily;
}());
module.exports = FontFamily;
