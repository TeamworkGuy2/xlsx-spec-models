"use strict";
var IndexedColors = require("./IndexedColors");
var MruColors = require("./MruColors");
var Colors = (function () {
    function Colors() {
    }
    Colors.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "colors", "styleSheet");
        var indexedColorElem = xmlDoc.queryOneChild(elem, "indexedColors");
        var mruColorElem = xmlDoc.queryOneChild(elem, "mruColors");
        return {
            indexedColors: indexedColorElem ? IndexedColors.read(xmlDoc, indexedColorElem) : null,
            mruColors: mruColorElem ? MruColors.read(xmlDoc, mruColorElem) : null,
        };
    };
    Colors.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("cellXfs");
        if (inst.indexedColors) {
            elem.appendChild(IndexedColors.write(xmlDoc, inst.indexedColors));
        }
        if (inst.mruColors) {
            elem.appendChild(MruColors.write(xmlDoc, inst.mruColors));
        }
        return elem;
    };
    return Colors;
}());
Colors.type = Colors; // TODO type-checker
module.exports = Colors;
