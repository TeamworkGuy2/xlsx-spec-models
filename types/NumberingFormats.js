"use strict";
var NumberingFormat = require("./NumberingFormat");
/** <numFmts> (Number Formats) "x:numFmts"
 * parents: styleSheet (§18.8.39)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.numberingformats.aspx
 */
var NumberingFormats = (function () {
    function NumberingFormats() {
    }
    NumberingFormats.read = function (xmlDoc, elem) {
        if (elem.tagName !== "numFmts") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "numFmts", "styleSheet");
        }
        var numFmtElems = xmlDoc.domHelper.queryAllChilds(elem, "numFmt");
        var attrs = elem.attributes;
        return {
            numFmts: xmlDoc.readOpenXml.readMulti(xmlDoc, NumberingFormat.read, numFmtElems),
            count: xmlDoc.domHelper.attrInt(attrs, "count"),
        };
    };
    NumberingFormats.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("numFmts")
            .attrInt("count", inst.count, true)
            .element;
        var numFmtElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, NumberingFormat.write, inst.numFmts);
        xmlDoc.domHelper.addChilds(elem, numFmtElems);
        return elem;
    };
    NumberingFormats.type = NumberingFormats; // TODO type-checker
    return NumberingFormats;
}());
module.exports = NumberingFormats;
