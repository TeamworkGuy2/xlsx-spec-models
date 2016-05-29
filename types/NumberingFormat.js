"use strict";
/** <numFmt> (Number Format) "x:numFmt"
 * parent: dxf (§18.8.14); ndxf (§18.11.1.4); numFmts (§18.8.31); odxf (§18.11.1.6)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.numberingformat.aspx
 */
var NumberingFormat = (function () {
    function NumberingFormat() {
    }
    NumberingFormat.read = function (xmlDoc, elem) {
        if (elem.tagName !== "numFmt") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "numFmt", "dxf, ndxf, numFmts, odxf");
        }
        var attrs = elem.attributes;
        return {
            formatCode: xmlDoc.domHelper.attrString(attrs, "formatCode"),
            numFmtId: xmlDoc.domHelper.attrInt(attrs, "numFmtId"),
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
