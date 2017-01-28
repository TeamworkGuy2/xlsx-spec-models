"use strict";
var IntAttribute = require("../base-types/IntAttribute");
var FontFamily = (function () {
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
    return FontFamily;
}());
FontFamily.type = FontFamily; // TODO type-checker
module.exports = FontFamily;
