
class SheetDimension {
    private static type: OpenXmlIo.ReadWrite<OpenXml.SheetDimension> = SheetDimension; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.SheetDimension {
        xmlDoc.validator.expectNode(elem, "dimension", "worksheet");
        var attrs = elem.attributes;
        return {
            ref: xmlDoc.attrString(attrs, "ref")
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.SheetDimension): HTMLElement {
        var elem = xmlDoc.domBldr.create("dimension")
            .attrString("ref", inst.ref)
            .element;
        return elem;
    }

}

export = SheetDimension;