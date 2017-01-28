"use strict";
var StringElement = require("../base-types/StringElement");
var CellValue = (function () {
    function CellValue() {
    }
    CellValue.read = function (xmlDoc, elem) {
        return StringElement.read(xmlDoc, elem, "v", "c, cell, nc, oc, tp");
    };
    CellValue.write = function (xmlDoc, inst) {
        return StringElement.write(xmlDoc, inst, "v");
    };
    return CellValue;
}());
CellValue.type = CellValue; // TODO type-checker
module.exports = CellValue;
