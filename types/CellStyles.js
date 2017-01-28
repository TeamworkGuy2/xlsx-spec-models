"use strict";
var CellStyle = require("./CellStyle");
var CellStyles = (function () {
    function CellStyles() {
    }
    CellStyles.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "cellStyles", "styleSheet");
        var cellStyleElems = xmlDoc.queryAllChilds(elem, "cellStyle");
        var attrs = elem.attributes;
        return {
            cellStyles: xmlDoc.readMulti(CellStyle.read, cellStyleElems),
            count: xmlDoc.attrInt(attrs, "count"),
        };
    };
    CellStyles.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("cellStyles")
            .attrInt("count", inst.count, true)
            .element;
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(CellStyle.write, inst.cellStyles));
        return elem;
    };
    return CellStyles;
}());
CellStyles.type = CellStyles; // TODO type-checker
module.exports = CellStyles;
