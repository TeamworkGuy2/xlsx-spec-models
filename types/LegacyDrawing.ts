
class LegacyDrawing {
    private static type: OpenXmlIo.ReadWrite<OpenXml.LegacyDrawing> = LegacyDrawing; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.LegacyDrawing {
        xmlDoc.validator.expectNode(elem, "legacyDrawing", "chartsheet, dialogsheet, worksheet");
        var attrs = elem.attributes;
        return {
            rid: xmlDoc.attrString(attrs, "r:id"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.LegacyDrawing): HTMLElement {
        var elem = xmlDoc.domBldr.create("legacyDrawing")
            .attrString("r:id", inst.rid)
            .element;
        return elem;
    }

}

export = LegacyDrawing;