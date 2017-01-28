"use strict";
var StringAttribute = require("../base-types/StringAttribute");
var FontName = (function () {
    function FontName() {
    }
    FontName.read = function (xmlDoc, elem) {
        return StringAttribute.read(xmlDoc, elem, "name");
    };
    FontName.write = function (xmlDoc, inst) {
        return StringAttribute.write(xmlDoc, inst, "name");
    };
    FontName.copy = function (inst) {
        return StringAttribute.copy(inst);
    };
    return FontName;
}());
FontName.type = FontName; // TODO type-checker
module.exports = FontName;
