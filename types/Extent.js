"use strict";
var Extent = (function () {
    function Extent() {
    }
    Extent.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "a:ext", "absoluteAnchor, oneCellAnchor");
        var attrs = elem.attributes;
        return {
            cx: xmlDoc.attrInt(attrs, "cx"),
            cy: xmlDoc.attrInt(attrs, "cy"),
        };
    };
    Extent.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("a:ext")
            .attrInt("cx", inst.cx, true)
            .attrInt("cy", inst.cy, true)
            .element;
        return elem;
    };
    Extent.type = Extent; // TODO type-checker
    return Extent;
}());
module.exports = Extent;
