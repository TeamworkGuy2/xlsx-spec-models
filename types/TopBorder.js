"use strict";
var BorderProperty = require("../base-types/BorderProperty");
var TopBorder = (function () {
    function TopBorder() {
    }
    TopBorder.read = function (xmlDoc, elem) {
        return BorderProperty.read(xmlDoc, elem, "top", "border");
    };
    TopBorder.write = function (xmlDoc, inst) {
        return BorderProperty.write(xmlDoc, inst, "top");
    };
    TopBorder.type = TopBorder; // TODO type-checker
    return TopBorder;
}());
module.exports = TopBorder;
