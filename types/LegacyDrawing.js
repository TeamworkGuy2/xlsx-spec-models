"use strict";
var LegacyDrawing = (function () {
    function LegacyDrawing() {
    }
    LegacyDrawing.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "legacyDrawing", "chartsheet, dialogsheet, worksheet");
        var attrs = elem.attributes;
        return {
            rid: xmlDoc.attrString(attrs, "r:id"),
        };
    };
    LegacyDrawing.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("legacyDrawing")
            .attrString("r:id", inst.rid)
            .element;
        return elem;
    };
    LegacyDrawing.type = LegacyDrawing; // TODO type-checker
    return LegacyDrawing;
}());
module.exports = LegacyDrawing;
