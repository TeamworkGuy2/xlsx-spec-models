"use strict";
var RgbColor = require("./RgbColor");
/** <indexedColors> (Color Indexes) "x:indexedColors"
 * parent: colors (§18.8.11)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.indexedcolors.aspx
 */
var IndexedColors = (function () {
    function IndexedColors() {
    }
    IndexedColors.read = function (xmlDoc, elem) {
        if (elem.tagName !== "indexedColors") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "indexedColors", "colors");
        }
        var rgbColorElems = xmlDoc.domHelper.queryAllChilds(elem, "rgbColor");
        return {
            rgbColors: xmlDoc.readOpenXml.readMulti(xmlDoc, RgbColor.read, rgbColorElems),
        };
    };
    IndexedColors.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("indexedColors");
        var rgbColorElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, RgbColor.write, inst.rgbColors);
        xmlDoc.domHelper.addChilds(elem, rgbColorElems);
        return elem;
    };
    IndexedColors.type = IndexedColors; // TODO type-checker
    return IndexedColors;
}());
module.exports = IndexedColors;
