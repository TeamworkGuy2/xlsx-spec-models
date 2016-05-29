"use strict";
var Fill = require("./Fill");
/** <fills> (Number Formats) "x:fills"
 * parents: styleSheet (§18.8.39)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.fills.aspx
 */
var Fills = (function () {
    function Fills() {
    }
    Fills.read = function (xmlDoc, elem) {
        if (elem.tagName !== "fills") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "fills", "styleSheet");
        }
        var fillElems = xmlDoc.domHelper.queryAllChilds(elem, "fill");
        var attrs = elem.attributes;
        return {
            fills: xmlDoc.readOpenXml.readMulti(xmlDoc, Fill.read, fillElems),
            count: xmlDoc.domHelper.attrInt(attrs, "count"),
        };
    };
    Fills.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("fills")
            .attrInt("count", inst.count, true)
            .element;
        var cellStyleElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, Fill.write, inst.fills);
        xmlDoc.domHelper.addChilds(elem, cellStyleElems);
        return elem;
    };
    Fills.type = Fills; // TODO type-checker
    return Fills;
}());
module.exports = Fills;
