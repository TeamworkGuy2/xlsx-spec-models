import Selection = require("./Selection");

/** <sheetView> (Sheet View) "x:sheetView"
 * parent: sheetViews (§18.3.1.88)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.sheetview.aspx
 */
class SheetView {
    private static type: OpenXmlIo.ReadWrite<OpenXml.SheetView> = SheetView; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.SheetView {
        if (elem.tagName !== "sheetView") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "sheetView", "sheetViews"); }
        var selectionElems = xmlDoc.domHelper.queryAllChilds(elem, "selection");
        var attrs = elem.attributes;
        return {
            selections: xmlDoc.readOpenXml.readMulti(xmlDoc, Selection.read, selectionElems),
            tabSelected: xmlDoc.domHelper.attrBool(attrs, "tabSelected"),
            view: xmlDoc.domHelper.attrString(attrs, "view"),
            topLeftCell: xmlDoc.domHelper.attrString(attrs, "topLeftCell"),
            workbookViewId: xmlDoc.domHelper.attrInt(attrs, "workbookViewId"),
            zoomScale: xmlDoc.domHelper.attrInt(attrs, "zoomScale"),
            zoomScaleNormal: xmlDoc.domHelper.attrInt(attrs, "zoomScaleNormal"),
            zoomScalePageLayoutView: xmlDoc.domHelper.attrInt(attrs, "zoomScalePageLayoutView"),
            zoomScaleSheetLayoutView: xmlDoc.domHelper.attrInt(attrs, "zoomScaleSheetLayoutView"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.SheetView): HTMLElement {
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
        var selectionElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, Selection.write, inst.selections);
        xmlDoc.domHelper.addChilds(elem, selectionElems);

        return elem;
    }

}

export = SheetView;