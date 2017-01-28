"use strict";
var Point2DType = (function () {
    function Point2DType() {
    }
    Point2DType.read = function (xmlDoc, elem, expectedTagName, parentTags) {
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
        var attrs = elem.attributes;
        return {
            x: xmlDoc.attrInt(attrs, "x"),
            y: xmlDoc.attrInt(attrs, "y"),
        };
    };
    Point2DType.write = function (xmlDoc, inst, tagName) {
        var elem = xmlDoc.domBldr.create(tagName)
            .attrInt("x", inst.x, true)
            .attrInt("y", inst.y, true)
            .element;
        return elem;
    };
    return Point2DType;
}());
Point2DType.type = Point2DType; // TODO type-checker
module.exports = Point2DType;
