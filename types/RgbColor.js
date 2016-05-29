"use strict";
/** <rgbColor> (RGB Color) "x:rgbColor"
 * parent: indexedColors (§18.8.27)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.rgbcolor.aspx
 */
var RgbColor = (function () {
    function RgbColor() {
    }
    RgbColor.read = function (xmlDoc, elem) {
        if (elem.tagName !== "rgbColor") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "rgbColor", "indexedColors");
        }
        var rgbStr = xmlDoc.domHelper.attrString(elem.attributes, "rgb");
        return {
            rgb: rgbStr ? parseInt(rgbStr, 16) : null,
        };
    };
    RgbColor.write = function (xmlDoc, inst) {
        var rgbStr = inst.rgb && typeof inst.rgb === "number" ? inst.rgb.toString(16).toUpperCase() : inst.rgb;
        var elem = xmlDoc.domBldr.create("rgbColor")
            .attrString("rgb", rgbStr, true)
            .element;
        return elem;
    };
    RgbColor.type = RgbColor; // TODO type-checker
    return RgbColor;
}());
module.exports = RgbColor;
