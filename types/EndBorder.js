"use strict";
var BorderProperty = require("../base-types/BorderProperty");
var EndBorder = (function () {
    function EndBorder() {
    }
    EndBorder.read = function (xmlDoc, elem) {
        return BorderProperty.read(xmlDoc, elem, "end", "border");
    };
    EndBorder.write = function (xmlDoc, inst) {
        return BorderProperty.write(xmlDoc, inst, "end");
    };
    EndBorder.type = EndBorder; // TODO type-checker
    return EndBorder;
}());
module.exports = EndBorder;
