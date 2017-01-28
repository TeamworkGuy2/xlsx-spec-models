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
    return EndBorder;
}());
EndBorder.type = EndBorder; // TODO type-checker
module.exports = EndBorder;
