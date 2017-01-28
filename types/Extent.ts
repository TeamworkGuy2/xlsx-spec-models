
class Extent {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Extent> = Extent; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Extent {
        xmlDoc.validator.expectNode(elem, "a:ext", "absoluteAnchor, oneCellAnchor");
        var attrs = elem.attributes;
        return {
            cx: xmlDoc.attrInt(attrs, "cx"),
            cy: xmlDoc.attrInt(attrs, "cy"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Extent): HTMLElement {
        var elem = xmlDoc.domBldr.create("a:ext")
            .attrInt("cx", inst.cx, true)
            .attrInt("cy", inst.cy, true)
            .element;
        return elem;
    }

}

export = Extent;