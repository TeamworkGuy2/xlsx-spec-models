"use strict";
/** <drawing> (Drawing) "x:drawing"
 * parent: chartsheet (§18.3.1.12); dialogsheet (§18.3.1.34); worksheet (§18.3.1.99)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.drawing.aspx
 */
var Drawing = (function () {
    function Drawing() {
    }
    Drawing.read = function (xmlDoc, elem) {
        if (elem.tagName !== "drawing") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "drawing", "chartsheet, dialogsheet, worksheet");
        }
        var attrs = elem.attributes;
        return {
            rid: xmlDoc.domHelper.attrString(attrs, "r:id"),
        };
    };
    Drawing.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("drawing")
            .attr("r:id", inst.rid)
            .element;
        return elem;
    };
    Drawing.type = Drawing; // TODO type-checker
    return Drawing;
}());
module.exports = Drawing;
