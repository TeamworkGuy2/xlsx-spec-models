
class PageSetup {
    private static type: OpenXmlIo.ReadWrite<OpenXml.PageSetup> = PageSetup; // TODO type-checker

    // TODO incomplete

    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.PageSetup {
        xmlDoc.validator.expectNode(elem, "pageSetup", "customSheetView, dialogsheet, worksheet");
        var attrs = elem.attributes;
        return {
            orientation: <OpenXml.ST_Orientation>xmlDoc.attrString(attrs, "orientation"),
            rid: xmlDoc.attrString(attrs, "r:id"),
            scale: xmlDoc.attrInt(attrs, "scale"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.PageSetup): ElementLike {
        var elem = xmlDoc.domBldr.create("pageSetup")
            .attrInt("scale", inst.scale, true)
            .attrString("orientation", inst.orientation, true)
            .attrString("r:id", inst.rid, true)
            .element;
        return elem;
    }

}

export = PageSetup;