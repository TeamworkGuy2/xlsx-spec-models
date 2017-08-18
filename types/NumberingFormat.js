"use strict";
var NumberingFormat = (function () {
    function NumberingFormat() {
    }
    NumberingFormat.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "numFmt", "dxf, ndxf, numFmts, odxf");
        var attrs = elem.attributes;
        return {
            formatCode: xmlDoc.attrString(attrs, "formatCode"),
            numFmtId: xmlDoc.attrInt(attrs, "numFmtId"),
        };
    };
    NumberingFormat.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("numFmt")
            .attrInt("numFmtId", inst.numFmtId)
            .attrString("formatCode", inst.formatCode)
            .element;
        return elem;
    };
    NumberingFormat.type = NumberingFormat; // TODO type-checker
    return NumberingFormat;
}());
module.exports = NumberingFormat;
