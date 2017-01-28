
class Selection {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Selection> = Selection; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Selection {
        xmlDoc.validator.expectNode(elem, "selection", "customSheetView, sheetView");
        var attrs = elem.attributes;
        return {
            activeCell: xmlDoc.attrString(attrs, "activeCell"),
            activeCellId: xmlDoc.attrInt(attrs, "activeCellId"),
            sqref: xmlDoc.attrString(attrs, "sqref")
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Selection): HTMLElement {
        return xmlDoc.domBldr.create("selection")
            .attrString("activeCell", inst.activeCell, true)
            .attrInt("activeCellId", inst.activeCellId, true)
            .attrString("sqref", inst.sqref, true)
            .element;
    }

}

export = Selection;