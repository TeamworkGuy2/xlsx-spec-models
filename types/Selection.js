"use strict";
/** <selection> (Selection) "x:selection"
 * parent: customSheetView (§18.3.1.25); sheetView (§18.3.1.87)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.selection.aspx
 */
var Selection = (function () {
    function Selection() {
    }
    Selection.read = function (xmlDoc, elem) {
        if (elem.tagName !== "selection") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "selection", "customSheetView, sheetView");
        }
        var attrs = elem.attributes;
        return {
            activeCell: xmlDoc.domHelper.attrString(attrs, "activeCell"),
            activeCellId: xmlDoc.domHelper.attrInt(attrs, "activeCellId"),
            sqref: xmlDoc.domHelper.attrString(attrs, "sqref")
        };
    };
    Selection.write = function (xmlDoc, inst) {
        return xmlDoc.domBldr.create("selection")
            .attrString("activeCell", inst.activeCell, true)
            .attrInt("activeCellId", inst.activeCellId, true)
            .attrString("sqref", inst.sqref, true)
            .element;
    };
    Selection.type = Selection; // TODO type-checker
    return Selection;
}());
module.exports = Selection;
