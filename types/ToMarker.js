"use strict";
var MarkerType = require("../base-types/MarkerType");
var ToMarker = (function () {
    function ToMarker() {
    }
    ToMarker.read = function (xmlDoc, elem) {
        return MarkerType.read(xmlDoc, elem, "xdr:to", "anchor, twoCellAnchor");
    };
    ToMarker.write = function (xmlDoc, inst) {
        return MarkerType.write(xmlDoc, inst, "xdr:to");
    };
    return ToMarker;
}());
ToMarker.type = ToMarker; // TODO type-checker
module.exports = ToMarker;
