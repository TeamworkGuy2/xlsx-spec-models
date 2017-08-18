"use strict";
var IntAttribute = require("../base-types/IntAttribute");
var FontCharSet = (function () {
    function FontCharSet() {
    }
    FontCharSet.read = function (xmlDoc, elem) {
        return IntAttribute.read(xmlDoc, elem, "charset");
    };
    FontCharSet.write = function (xmlDoc, inst) {
        return IntAttribute.write(xmlDoc, inst, "charset");
    };
    FontCharSet.copy = function (inst) {
        return IntAttribute.copy(inst);
    };
    FontCharSet.type = FontCharSet; // TODO type-checker
    return FontCharSet;
}());
module.exports = FontCharSet;
