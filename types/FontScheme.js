"use strict";
var StringAttribute = require("../base-types/StringAttribute");
var FontScheme = (function () {
    function FontScheme() {
    }
    FontScheme.read = function (xmlDoc, elem) {
        return StringAttribute.read(xmlDoc, elem, "scheme", "font, rPr");
    };
    FontScheme.write = function (xmlDoc, inst) {
        return StringAttribute.write(xmlDoc, inst, "scheme");
    };
    return FontScheme;
}());
FontScheme.type = FontScheme; // TODO type-checker
module.exports = FontScheme;
