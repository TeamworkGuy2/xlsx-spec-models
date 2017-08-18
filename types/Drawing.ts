
class Drawing {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Drawing> = Drawing; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Drawing {
        xmlDoc.validator.expectNode(elem, "drawing", "chartsheet, dialogsheet, worksheet");
        var attrs = elem.attributes;
        return {
            rid: xmlDoc.attrString(attrs, "r:id"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Drawing): ElementLike {
        var elem = xmlDoc.domBldr.create("drawing")
            .attr("r:id", inst.rid)
            .element;
        return elem;
    }

}

export = Drawing;