"use strict";
var RgbColor = require("./RgbColor");
var IndexedColors = (function () {
    function IndexedColors() {
    }
    IndexedColors.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "indexedColors", "colors");
        var rgbColorElems = xmlDoc.queryAllChilds(elem, "rgbColor");
        return {
            rgbColors: xmlDoc.readMulti(RgbColor.read, rgbColorElems),
        };
    };
    IndexedColors.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("indexedColors");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(RgbColor.write, inst.rgbColors));
        return elem;
    };
    return IndexedColors;
}());
IndexedColors.type = IndexedColors; // TODO type-checker
module.exports = IndexedColors;
