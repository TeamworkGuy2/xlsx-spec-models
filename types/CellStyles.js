"use strict";
var CellStyle = require("./CellStyle");
/** <cellStyles> (Cell Styles) "x:cellStyles"
 * parents: styleSheet (§18.8.39)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.cellstyles.aspx
 */
var CellStyles = (function () {
    function CellStyles() {
    }
    CellStyles.read = function (xmlDoc, elem) {
        if (elem.tagName !== "cellStyles") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "cellStyles", "styleSheet");
        }
        var cellStyleElems = xmlDoc.domHelper.queryAllChilds(elem, "cellStyle");
        var attrs = elem.attributes;
        return {
            cellStyles: xmlDoc.readOpenXml.readMulti(xmlDoc, CellStyle.read, cellStyleElems),
            count: xmlDoc.domHelper.attrInt(attrs, "count"),
        };
    };
    CellStyles.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("cellStyles")
            .attrInt("count", inst.count, true)
            .element;
        var cellStyleElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, CellStyle.write, inst.cellStyles);
        xmlDoc.domHelper.addChilds(elem, cellStyleElems);
        return elem;
    };
    CellStyles.type = CellStyles; // TODO type-checker
    return CellStyles;
}());
module.exports = CellStyles;
