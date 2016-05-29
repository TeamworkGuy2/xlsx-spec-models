"use strict";
/** <legacyDrawing> (Legacy Drawing Reference) "x:legacyDrawing"
 * parent: chartsheet (Part 1, §18.3.1.12); dialogsheet (Part 1, §18.3.1.34); worksheet (Part 1, §18.3.1.99)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.legacydrawing.aspx
 */
var LegacyDrawing = (function () {
    function LegacyDrawing() {
    }
    LegacyDrawing.read = function (xmlDoc, elem) {
        if (elem.tagName !== "legacyDrawing") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "legacyDrawing", "chartsheet, dialogsheet, worksheet");
        }
        var attrs = elem.attributes;
        return {
            rid: xmlDoc.domHelper.attrString(attrs, "r:id"),
        };
    };
    LegacyDrawing.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("legacyDrawing")
            .attrString("r:id", inst.rid)
            .element;
        return elem;
    };
    LegacyDrawing.type = LegacyDrawing; // TODO type-checker
    return LegacyDrawing;
}());
module.exports = LegacyDrawing;
