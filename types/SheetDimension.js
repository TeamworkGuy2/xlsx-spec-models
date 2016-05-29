"use strict";
/** <dimension> (Worksheet Dimensions) "x:dimension"
 * parent: worksheet (§18.3.1.99)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.sheetdimension.aspx
 */
var SheetDimension = (function () {
    function SheetDimension() {
    }
    SheetDimension.read = function (xmlDoc, elem) {
        if (elem.tagName !== "dimension") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "dimension", "worksheet");
        }
        var attrs = elem.attributes;
        return {
            ref: xmlDoc.domHelper.attrString(attrs, "ref")
        };
    };
    SheetDimension.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("dimension")
            .attrString("ref", inst.ref)
            .element;
        return elem;
    };
    SheetDimension.type = SheetDimension; // TODO type-checker
    return SheetDimension;
}());
module.exports = SheetDimension;
