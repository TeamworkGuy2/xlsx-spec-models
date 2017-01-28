"use strict";
var Selection = require("./Selection");
var SheetView = (function () {
    function SheetView() {
    }
    SheetView.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "sheetView", "sheetViews");
        var attrs = elem.attributes;
        var selectionElems = xmlDoc.queryAllChilds(elem, "selection");
        return {
            selections: xmlDoc.readMulti(Selection.read, selectionElems),
            tabSelected: xmlDoc.attrBool(attrs, "tabSelected"),
            view: xmlDoc.attrString(attrs, "view"),
            topLeftCell: xmlDoc.attrString(attrs, "topLeftCell"),
            workbookViewId: xmlDoc.attrInt(attrs, "workbookViewId"),
            zoomScale: xmlDoc.attrInt(attrs, "zoomScale"),
            zoomScaleNormal: xmlDoc.attrInt(attrs, "zoomScaleNormal"),
            zoomScalePageLayoutView: xmlDoc.attrInt(attrs, "zoomScalePageLayoutView"),
            zoomScaleSheetLayoutView: xmlDoc.attrInt(attrs, "zoomScaleSheetLayoutView"),
        };
    };
    SheetView.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("sheetView")
            .attrBool("tabSelected", inst.tabSelected, true, "1", "0")
            .attrString("view", inst.view, true)
            .attrInt("zoomScale", inst.zoomScale, true)
            .attrInt("zoomScaleNormal", inst.zoomScaleNormal, true)
            .attrString("topLeftCell", inst.topLeftCell, true)
            .attrInt("zoomScaleSheetLayoutView", inst.zoomScaleSheetLayoutView, true)
            .attrInt("zoomScalePageLayoutView", inst.zoomScalePageLayoutView, true)
            .attrInt("workbookViewId", inst.workbookViewId)
            .element;
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Selection.write, inst.selections));
        return elem;
    };
    return SheetView;
}());
SheetView.type = SheetView; // TODO type-checker
module.exports = SheetView;
