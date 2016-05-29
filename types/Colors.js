"use strict";
var IndexedColors = require("./IndexedColors");
var MruColors = require("./MruColors");
/** <colors> (Colors) "x:colors"
 * parents: styleSheet (§18.8.39)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.colors.aspx
 */
var Colors = (function () {
    function Colors() {
    }
    Colors.read = function (xmlDoc, elem) {
        if (elem.tagName !== "colors") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "colors", "styleSheet");
        }
        var indexedColorElem = xmlDoc.domHelper.queryOneChild(elem, "indexedColors");
        var mruColorElem = xmlDoc.domHelper.queryOneChild(elem, "mruColors");
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
    Colors.type = Colors; // TODO type-checker
    return Colors;
}());
module.exports = Colors;
