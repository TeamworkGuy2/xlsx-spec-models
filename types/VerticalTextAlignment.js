"use strict";
var StringAttribute = require("../base-types/StringAttribute");
var VerticalTextAlignment = (function () {
    function VerticalTextAlignment() {
    }
    VerticalTextAlignment.read = function (xmlDoc, elem) {
        return StringAttribute.read(xmlDoc, elem, "vertAlign", "font, rPr");
    };
    VerticalTextAlignment.write = function (xmlDoc, inst) {
        return StringAttribute.write(xmlDoc, inst, "vertAlign");
    };
    VerticalTextAlignment.copy = function (inst) {
        return StringAttribute.copy(inst);
    };
    VerticalTextAlignment.type = VerticalTextAlignment; // TODO type-checker
    return VerticalTextAlignment;
}());
module.exports = VerticalTextAlignment;
