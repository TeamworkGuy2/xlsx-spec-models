"use strict";
var CellFormat = require("./CellFormat");
/** <cellStyleXfs> (Formatting Records) "x:cellStyleXfs"
 * parents: styleSheet (§18.8.39)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.cellstyleformats.aspx
 */
var CellStyleFormats = (function () {
    function CellStyleFormats() {
    }
    CellStyleFormats.read = function (xmlDoc, elem) {
        if (elem.tagName !== "cellStyleXfs") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "cellStyleXfs", "styleSheet");
        }
        var cellFormatElems = xmlDoc.domHelper.queryAllChilds(elem, "xf");
        var attrs = elem.attributes;
        return {
            xfs: xmlDoc.readOpenXml.readMulti(xmlDoc, CellFormat.read, cellFormatElems),
            count: xmlDoc.domHelper.attrInt(attrs, "count"),
        };
    };
    CellStyleFormats.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("cellStyleXfs")
            .attrInt("count", inst.count, true)
            .element;
        var cellFormatElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, CellFormat.write, inst.xfs);
        xmlDoc.domHelper.addChilds(elem, cellFormatElems);
        return elem;
    };
    CellStyleFormats.type = CellStyleFormats; // TODO type-checker
    return CellStyleFormats;
}());
module.exports = CellStyleFormats;
