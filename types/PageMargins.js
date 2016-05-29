"use strict";
/** <pageMargins> (Page Margins) "x:pageMargins"
 * parent: chartsheet (§18.3.1.12); customSheetView (§18.3.1.24); customSheetView (§18.3.1.25); dialogsheet (§18.3.1.34); worksheet (§18.3.1.99)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.pagemargins.aspx
 */
var PageMargins = (function () {
    function PageMargins() {
    }
    PageMargins.read = function (xmlDoc, elem) {
        if (elem.tagName !== "pageMargins") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "pageMargins", "chartsheet, customSheetView, customSheetView, dialogsheet, worksheet");
        }
        var attrs = elem.attributes;
        return {
            bottom: xmlDoc.domHelper.attrFloat(attrs, "bottom"),
            footer: xmlDoc.domHelper.attrFloat(attrs, "footer"),
            header: xmlDoc.domHelper.attrFloat(attrs, "header"),
            left: xmlDoc.domHelper.attrFloat(attrs, "left"),
            right: xmlDoc.domHelper.attrFloat(attrs, "right"),
            top: xmlDoc.domHelper.attrFloat(attrs, "top"),
        };
    };
    PageMargins.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("pageMargins")
            .attrFloat("left", inst.left)
            .attrFloat("right", inst.right)
            .attrFloat("top", inst.top)
            .attrFloat("bottom", inst.bottom)
            .attrFloat("header", inst.header)
            .attrFloat("footer", inst.footer)
            .element;
        return elem;
    };
    PageMargins.type = PageMargins; // TODO type-checker
    return PageMargins;
}());
module.exports = PageMargins;
