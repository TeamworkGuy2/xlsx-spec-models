"use strict";
var CellFormat = require("./CellFormat");
var CellFormats = (function () {
    function CellFormats() {
    }
    CellFormats.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "cellXfs", "styleSheet");
        var cellFormatElems = xmlDoc.queryAllChilds(elem, "xf");
        var attrs = elem.attributes;
        return {
            xfs: xmlDoc.readMulti(CellFormat.read, cellFormatElems),
            count: xmlDoc.attrInt(attrs, "count"),
        };
    };
    CellFormats.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("cellXfs")
            .attrInt("count", inst.count, true)
            .element;
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(CellFormat.write, inst.xfs));
        return elem;
    };
    return CellFormats;
}());
CellFormats.type = CellFormats; // TODO type-checker
module.exports = CellFormats;
