"use strict";
var CellFormat = require("./CellFormat");
var CellStyleFormats = (function () {
    function CellStyleFormats() {
    }
    CellStyleFormats.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "cellStyleXfs", "styleSheet");
        var cellFormatElems = xmlDoc.queryAllChilds(elem, "xf");
        var attrs = elem.attributes;
        return {
            xfs: xmlDoc.readMulti(CellFormat.read, cellFormatElems),
            count: xmlDoc.attrInt(attrs, "count"),
        };
    };
    CellStyleFormats.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("cellStyleXfs")
            .attrInt("count", inst.count, true)
            .element;
        var cellFormatElems = xmlDoc.writeMulti(CellFormat.write, inst.xfs);
        xmlDoc.addChilds(elem, cellFormatElems);
        return elem;
    };
    CellStyleFormats.type = CellStyleFormats; // TODO type-checker
    return CellStyleFormats;
}());
module.exports = CellStyleFormats;
