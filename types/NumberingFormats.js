"use strict";
var NumberingFormat = require("./NumberingFormat");
var NumberingFormats = (function () {
    function NumberingFormats() {
    }
    NumberingFormats.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "numFmts", "styleSheet");
        var numFmtElems = xmlDoc.queryAllChilds(elem, "numFmt");
        var attrs = elem.attributes;
        return {
            numFmts: xmlDoc.readMulti(NumberingFormat.read, numFmtElems),
            count: xmlDoc.attrInt(attrs, "count"),
        };
    };
    NumberingFormats.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("numFmts")
            .attrInt("count", inst.count, true)
            .element;
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(NumberingFormat.write, inst.numFmts));
        return elem;
    };
    NumberingFormats.type = NumberingFormats; // TODO type-checker
    return NumberingFormats;
}());
module.exports = NumberingFormats;
