"use strict";
var Point2DType = /** @class */ (function () {
    function Point2DType() {
    }
    Point2DType.read = function (xmlDoc, elem, expectedTagName, parentTags) {
        var _a, _b;
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
        return {
            x: (_a = xmlDoc.attrInt(elem, "x")) !== null && _a !== void 0 ? _a : 0,
            y: (_b = xmlDoc.attrInt(elem, "y")) !== null && _b !== void 0 ? _b : 0,
        };
    };
    Point2DType.write = function (xmlDoc, inst, tagName) {
        var elem = xmlDoc.domBldr.create(tagName)
            .attrInt("x", inst.x, true)
            .attrInt("y", inst.y, true)
            .element;
        return elem;
    };
    Point2DType.type = Point2DType; // TODO type-checker
    return Point2DType;
}());
module.exports = Point2DType;
