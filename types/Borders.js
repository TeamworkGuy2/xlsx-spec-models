"use strict";
var Border = require("./Border");
/** <borders> (Formatting Records) "x:borders"
 * parents: styleSheet (§18.8.39)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.borders.aspx
 */
var Borders = (function () {
    function Borders() {
    }
    Borders.read = function (xmlDoc, elem) {
        if (elem.tagName !== "borders") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "borders", "styleSheet");
        }
        var borderElems = xmlDoc.domHelper.queryAllChilds(elem, "border");
        var attrs = elem.attributes;
        return {
            borders: xmlDoc.readOpenXml.readMulti(xmlDoc, Border.read, borderElems),
            count: xmlDoc.domHelper.attrInt(attrs, "count"),
        };
    };
    Borders.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("borders")
            .attrInt("count", inst.count, true)
            .element;
        var borderElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, Border.write, inst.borders);
        xmlDoc.domHelper.addChilds(elem, borderElems);
        return elem;
    };
    Borders.type = Borders; // TODO type-checker
    return Borders;
}());
module.exports = Borders;
