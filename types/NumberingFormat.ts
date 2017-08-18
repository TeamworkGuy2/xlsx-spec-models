
class NumberingFormat {
    private static type: OpenXmlIo.ReadWrite<OpenXml.NumberingFormat> = NumberingFormat; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.NumberingFormat {
        xmlDoc.validator.expectNode(elem, "numFmt", "dxf, ndxf, numFmts, odxf");
        var attrs = elem.attributes;
        return {
            formatCode: xmlDoc.attrString(attrs, "formatCode"),
            numFmtId: xmlDoc.attrInt(attrs, "numFmtId"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.NumberingFormat): ElementLike {
        var elem = xmlDoc.domBldr.create("numFmt")
            .attrInt("numFmtId", inst.numFmtId)
            .attrString("formatCode", inst.formatCode)
            .element;
        return elem;
    }

}

export = NumberingFormat;