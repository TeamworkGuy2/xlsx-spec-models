"use strict";
var Color = /** @class */ (function () {
    function Color() {
    }
    Color.read = function (xmlDoc, elem, expectedTagName) {
        xmlDoc.validator.expectNode(elem, expectedTagName, "bottom, colorScale, dataBar, diagonal, end, font, horizontal, mruColors, rPr, start, stop, top, vertical");
        var attrs = elem.attributes;
        var rgbStr = xmlDoc.attrString(attrs, "rgb");
        return {
            auto: xmlDoc.attrBool(attrs, "auto"),
            indexed: xmlDoc.attrInt(attrs, "indexed"),
            rgb: rgbStr ? parseInt(rgbStr, 16) : null,
            theme: xmlDoc.attrInt(attrs, "theme"),
            tint: xmlDoc.attrFloat(attrs, "tint"),
        };
    };
    Color.write = function (xmlDoc, inst, expectedTagName) {
        var rgbStr = inst.rgb && typeof inst.rgb === "number" ? inst.rgb.toString(16).toUpperCase() : inst.rgb;
        var elem = xmlDoc.domBldr.create(expectedTagName)
            .attrBool("auto", inst.auto, true, "1", "0")
            .attrInt("indexed", inst.indexed, true)
            .attrString("rgb", rgbStr, true)
            .attrInt("theme", inst.theme, true)
            .attrFloat("tint", inst.tint, true)
            .element;
        return elem;
    };
    Color.copy = function (inst) {
        return {
            auto: inst.auto,
            indexed: inst.indexed,
            rgb: inst.rgb,
            theme: inst.theme,
            tint: inst.tint,
        };
    };
    Color.type = Color; // TODO type-checker
    return Color;
}());
module.exports = Color;
