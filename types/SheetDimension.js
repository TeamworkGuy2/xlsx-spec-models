"use strict";
var SheetDimension = (function () {
    function SheetDimension() {
    }
    SheetDimension.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "dimension", "worksheet");
        var attrs = elem.attributes;
        return {
            ref: xmlDoc.attrString(attrs, "ref")
        };
    };
    SheetDimension.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("dimension")
            .attrString("ref", inst.ref)
            .element;
        return elem;
    };
    return SheetDimension;
}());
SheetDimension.type = SheetDimension; // TODO type-checker
module.exports = SheetDimension;
