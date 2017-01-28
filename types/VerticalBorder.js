"use strict";
var BorderProperty = require("../base-types/BorderProperty");
var VerticalBorder = (function () {
    function VerticalBorder() {
    }
    VerticalBorder.read = function (xmlDoc, elem) {
        return BorderProperty.read(xmlDoc, elem, "vertical", "border");
    };
    VerticalBorder.write = function (xmlDoc, inst) {
        return BorderProperty.write(xmlDoc, inst, "vertical");
    };
    return VerticalBorder;
}());
VerticalBorder.type = VerticalBorder; // TODO type-checker
module.exports = VerticalBorder;
