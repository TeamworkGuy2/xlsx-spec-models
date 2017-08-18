"use strict";
var RgbColor = (function () {
    function RgbColor() {
    }
    RgbColor.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "rgbColor", "indexedColors");
        var rgbStr = xmlDoc.attrString(elem.attributes, "rgb");
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
