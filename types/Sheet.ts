
class Sheet {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Sheet> = Sheet; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Sheet {
        xmlDoc.validator.expectNode(elem, "sheet", "sheets");
        var attrs = elem.attributes;
        return {
            id: xmlDoc.attrString(attrs, "r:id"),
            name: xmlDoc.attrString(attrs, "name"),
            sheetId: xmlDoc.attrInt(attrs, "sheetId"),
            state: <OpenXml.ST_SheetState>xmlDoc.attrString(attrs, "state"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Sheet): ElementLike {
        var elem = xmlDoc.domBldr.create("sheet")
            .attrString("r:id", inst.id)
            .attrString("name", inst.name)
            .attrInt("sheetId", inst.sheetId)
            .attrString("state", inst.state, true)
            .element;

        return elem;
    }

}

export = Sheet;