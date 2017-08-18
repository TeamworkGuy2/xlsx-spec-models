"use strict";
var Fill = require("./Fill");
var Fills = (function () {
    function Fills() {
    }
    Fills.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "fills", "styleSheet");
        var fillElems = xmlDoc.queryAllChilds(elem, "fill");
        var attrs = elem.attributes;
        return {
            fills: xmlDoc.readMulti(Fill.read, fillElems),
            count: xmlDoc.attrInt(attrs, "count"),
        };
    };
    Fills.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("fills")
            .attrInt("count", inst.count, true)
            .element;
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Fill.write, inst.fills));
        return elem;
    };
    Fills.type = Fills; // TODO type-checker
    return Fills;
}());
module.exports = Fills;
