"use strict";
var MarkerType = require("../base-types/MarkerType");
var FromMarker = (function () {
    function FromMarker() {
    }
    FromMarker.read = function (xmlDoc, elem) {
        return MarkerType.read(xmlDoc, elem, "xdr:from", "anchor, oneCellAnchor, twoCellAnchor");
    };
    FromMarker.write = function (xmlDoc, inst) {
        return MarkerType.write(xmlDoc, inst, "xdr:from");
    };
    return FromMarker;
}());
FromMarker.type = FromMarker; // TODO type-checker
module.exports = FromMarker;
