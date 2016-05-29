"use strict";
var DifferentialFormat = require("./DifferentialFormat");
/** <dxfs> (Formats) "x:dxfs"
 * parents: styleSheet (§18.8.39)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.differentialformats.aspx
 */
var DifferentialFormats = (function () {
    function DifferentialFormats() {
    }
    DifferentialFormats.read = function (xmlDoc, elem) {
        if (elem.tagName !== "dxfs") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "dxfs", "styleSheet");
        }
        var dxfElems = xmlDoc.domHelper.queryAllChilds(elem, "dxf");
        var attrs = elem.attributes;
        return {
            dxfs: xmlDoc.readOpenXml.readMulti(xmlDoc, DifferentialFormat.read, dxfElems),
            count: xmlDoc.domHelper.attrInt(attrs, "count"),
        };
    };
    DifferentialFormats.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("dxfs")
            .attrInt("count", inst.count, true)
            .element;
        var dxfElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, DifferentialFormat.write, inst.dxfs);
        xmlDoc.domHelper.addChilds(elem, dxfElems);
        return elem;
    };
    DifferentialFormats.type = DifferentialFormats; // TODO type-checker
    return DifferentialFormats;
}());
module.exports = DifferentialFormats;
