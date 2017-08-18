
class Protection {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Protection> = Protection; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Protection {
        xmlDoc.validator.expectNode(elem, "protection", "dxf, ndxf, odxf, xf");
        var attrs = elem.attributes;
        return {
            hidden: xmlDoc.attrBool(attrs, "hidden"),
            locked: xmlDoc.attrBool(attrs, "locked"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Protection): ElementLike {
        var elem = xmlDoc.domBldr.create("protection")
            .attrBool("hidden", inst.hidden, true, "1", "0")
            .attrBool("locked", inst.locked, true, "1", "0")
            .element;
        return elem;
    }

}

export = Protection;