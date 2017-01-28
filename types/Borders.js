"use strict";
var Border = require("./Border");
var Borders = (function () {
    function Borders() {
    }
    Borders.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "borders", "styleSheet");
        var borderElems = xmlDoc.queryAllChilds(elem, "border");
        var attrs = elem.attributes;
        return {
            borders: xmlDoc.readMulti(Border.read, borderElems),
            count: xmlDoc.attrInt(attrs, "count"),
        };
    };
    Borders.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("borders")
            .attrInt("count", inst.count, true)
            .element;
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Border.write, inst.borders));
        return elem;
    };
    return Borders;
}());
Borders.type = Borders; // TODO type-checker
module.exports = Borders;
