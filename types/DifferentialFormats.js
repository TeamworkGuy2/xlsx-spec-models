"use strict";
var DifferentialFormat = require("./DifferentialFormat");
var DifferentialFormats = (function () {
    function DifferentialFormats() {
    }
    DifferentialFormats.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "dxfs", "styleSheet");
        var dxfElems = xmlDoc.queryAllChilds(elem, "dxf");
        var attrs = elem.attributes;
        return {
            dxfs: xmlDoc.readMulti(DifferentialFormat.read, dxfElems),
            count: xmlDoc.attrInt(attrs, "count"),
        };
    };
    DifferentialFormats.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("dxfs")
            .attrInt("count", inst.count, true)
            .element;
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(DifferentialFormat.write, inst.dxfs));
        return elem;
    };
    return DifferentialFormats;
}());
DifferentialFormats.type = DifferentialFormats; // TODO type-checker
module.exports = DifferentialFormats;
