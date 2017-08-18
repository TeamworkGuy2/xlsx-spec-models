"use strict";
var Selection = (function () {
    function Selection() {
    }
    Selection.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "selection", "customSheetView, sheetView");
        var attrs = elem.attributes;
        return {
            activeCell: xmlDoc.attrString(attrs, "activeCell"),
            activeCellId: xmlDoc.attrInt(attrs, "activeCellId"),
            sqref: xmlDoc.attrString(attrs, "sqref")
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
