"use strict";
var Drawing = (function () {
    function Drawing() {
    }
    Drawing.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "drawing", "chartsheet, dialogsheet, worksheet");
        var attrs = elem.attributes;
        return {
            rid: xmlDoc.attrString(attrs, "r:id"),
        };
    };
    Drawing.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("drawing")
            .attr("r:id", inst.rid)
            .element;
        return elem;
    };
    return Drawing;
}());
Drawing.type = Drawing; // TODO type-checker
module.exports = Drawing;
