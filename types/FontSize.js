"use strict";
var FloatAttribute = require("../base-types/FloatAttribute");
var FontSize = (function () {
    function FontSize() {
    }
    FontSize.read = function (xmlDoc, elem) {
        return FloatAttribute.read(xmlDoc, elem, "sz", "font, rPr");
    };
    FontSize.write = function (xmlDoc, inst) {
        return FloatAttribute.write(xmlDoc, inst, "sz");
    };
    FontSize.copy = function (inst) {
        return FloatAttribute.copy(inst);
    };
    return FontSize;
}());
FontSize.type = FontSize; // TODO type-checker
module.exports = FontSize;
