"use strict";
var StringAttribute = require("../base-types/StringAttribute");
var Underline = (function () {
    function Underline() {
    }
    Underline.read = function (xmlDoc, elem) {
        return StringAttribute.read(xmlDoc, elem, "u", "font, rPr");
    };
    Underline.write = function (xmlDoc, inst) {
        return StringAttribute.write(xmlDoc, inst, "u");
    };
    Underline.copy = function (inst) {
        return StringAttribute.copy(inst);
    };
    Underline.type = Underline; // TODO type-checker
    return Underline;
}());
module.exports = Underline;
