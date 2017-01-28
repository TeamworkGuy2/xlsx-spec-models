"use strict";
var Point2DType = require("../base-types/Point2DType");
var Offset = (function () {
    function Offset() {
    }
    Offset.read = function (xmlDoc, elem) {
        return Point2DType.read(xmlDoc, elem, "a:off", "xfrm");
    };
    Offset.write = function (xmlDoc, inst) {
        return Point2DType.write(xmlDoc, inst, "a:off");
    };
    return Offset;
}());
Offset.type = Offset; // TODO type-checker
module.exports = Offset;
