"use strict";
var BorderProperty = require("../base-types/BorderProperty");
var BottomBorder = (function () {
    function BottomBorder() {
    }
    BottomBorder.read = function (xmlDoc, elem) {
        return BorderProperty.read(xmlDoc, elem, "bottom", "border");
    };
    BottomBorder.write = function (xmlDoc, inst) {
        return BorderProperty.write(xmlDoc, inst, "bottom");
    };
    BottomBorder.type = BottomBorder; // TODO type-checker
    return BottomBorder;
}());
module.exports = BottomBorder;
