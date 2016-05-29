/** <selection> (Selection) "x:selection"
 * parent: customSheetView (§18.3.1.25); sheetView (§18.3.1.87)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.selection.aspx
 */
class Selection {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Selection> = Selection; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.Selection {
        if (elem.tagName !== "selection") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "selection", "customSheetView, sheetView"); }
        var attrs = elem.attributes;
        return {
            activeCell: xmlDoc.domHelper.attrString(attrs, "activeCell"),
            activeCellId: xmlDoc.domHelper.attrInt(attrs, "activeCellId"),
            sqref: xmlDoc.domHelper.attrString(attrs, "sqref")
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.Selection): HTMLElement {
        return xmlDoc.domBldr.create("selection")
            .attrString("activeCell", inst.activeCell, true)
            .attrInt("activeCellId", inst.activeCellId, true)
            .attrString("sqref", inst.sqref, true)
            .element;
    }

}

export = Selection;