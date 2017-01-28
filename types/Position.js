"use strict";
var Point2DType = require("../base-types/Point2DType");
var Position = (function () {
    function Position() {
    }
    Position.read = function (xmlDoc, elem) {
        return Point2DType.read(xmlDoc, elem, "a:pos", "absoluteAnchor");
    };
    Position.write = function (xmlDoc, inst) {
        return Point2DType.write(xmlDoc, inst, "a:pos");
    };
    return Position;
}());
Position.type = Position; // TODO type-checker
module.exports = Position;
