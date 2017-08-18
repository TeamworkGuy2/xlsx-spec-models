
class PageMargins {
    private static type: OpenXmlIo.ReadWrite<OpenXml.PageMargins> = PageMargins; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.PageMargins {
        xmlDoc.validator.expectNode(elem, "pageMargins", "chartsheet, customSheetView, customSheetView, dialogsheet, worksheet");
        var attrs = elem.attributes;
        return {
            bottom: xmlDoc.attrFloat(attrs, "bottom"),
            footer: xmlDoc.attrFloat(attrs, "footer"),
            header: xmlDoc.attrFloat(attrs, "header"),
            left: xmlDoc.attrFloat(attrs, "left"),
            right: xmlDoc.attrFloat(attrs, "right"),
            top: xmlDoc.attrFloat(attrs, "top"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.PageMargins): ElementLike {
        var elem = xmlDoc.domBldr.create("pageMargins")
            .attrFloat("left", inst.left)
            .attrFloat("right", inst.right)
            .attrFloat("top", inst.top)
            .attrFloat("bottom", inst.bottom)
            .attrFloat("header", inst.header)
            .attrFloat("footer", inst.footer)
            .element;
        return elem;
    }

}

export = PageMargins;