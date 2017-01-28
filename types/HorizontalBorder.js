"use strict";
var BorderProperty = require("../base-types/BorderProperty");
var HorizontalBorder = (function () {
    function HorizontalBorder() {
    }
    HorizontalBorder.read = function (xmlDoc, elem) {
        return BorderProperty.read(xmlDoc, elem, "horizontal", "border");
    };
    HorizontalBorder.write = function (xmlDoc, inst) {
        return BorderProperty.write(xmlDoc, inst, "horizontal");
    };
    return HorizontalBorder;
}());
HorizontalBorder.type = HorizontalBorder; // TODO type-checker
module.exports = HorizontalBorder;
