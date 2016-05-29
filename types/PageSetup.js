"use strict";
/** <pageSetup> (Page Setup) "x:pageSetup"
 * parent: customSheetView (§18.3.1.25); dialogsheet (§18.3.1.34); worksheet (§18.3.1.99)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.pagesetup.aspx
 */
var PageSetup = (function () {
    function PageSetup() {
    }
    // TODO incomplete
    PageSetup.read = function (xmlDoc, elem) {
        if (elem.tagName !== "pageSetup") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "pageSetup", "customSheetView, dialogsheet, worksheet");
        }
        var attrs = elem.attributes;
        return {
            orientation: xmlDoc.domHelper.attrString(attrs, "orientation"),
            rid: xmlDoc.domHelper.attrString(attrs, "r:id"),
            scale: xmlDoc.domHelper.attrInt(attrs, "scale"),
        };
    };
    PageSetup.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("pageSetup")
            .attrInt("scale", inst.scale, true)
            .attrString("orientation", inst.orientation, true)
            .attrString("r:id", inst.rid, true)
            .element;
        return elem;
    };
    PageSetup.type = PageSetup; // TODO type-checker
    return PageSetup;
}());
module.exports = PageSetup;
