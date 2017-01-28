"use strict";
var BorderProperty = require("../base-types/BorderProperty");
var DiagonalBorder = (function () {
    function DiagonalBorder() {
    }
    DiagonalBorder.read = function (xmlDoc, elem) {
        return BorderProperty.read(xmlDoc, elem, "diagonal", "border");
    };
    DiagonalBorder.write = function (xmlDoc, inst) {
        return BorderProperty.write(xmlDoc, inst, "diagonal");
    };
    return DiagonalBorder;
}());
DiagonalBorder.type = DiagonalBorder; // TODO type-checker
module.exports = DiagonalBorder;
