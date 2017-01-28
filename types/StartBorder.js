"use strict";
var BorderProperty = require("../base-types/BorderProperty");
var StartBorder = (function () {
    function StartBorder() {
    }
    StartBorder.read = function (xmlDoc, elem) {
        return BorderProperty.read(xmlDoc, elem, "start", "border");
    };
    StartBorder.write = function (xmlDoc, inst) {
        return BorderProperty.write(xmlDoc, inst, "start");
    };
    return StartBorder;
}());
StartBorder.type = StartBorder; // TODO type-checker
module.exports = StartBorder;
