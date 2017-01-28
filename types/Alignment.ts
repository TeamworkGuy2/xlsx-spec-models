
class Alignment {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Alignment> = Alignment; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Alignment {
        xmlDoc.validator.expectNode(elem, "alignment", "dxf, ndxf, odxf, xf");
        var attrs = elem.attributes;
        return {
            horizontal: <OpenXml.ST_HorizontalAlignment>xmlDoc.attrString(attrs, "horizontal"),
            indent: xmlDoc.attrInt(attrs, "indent"),
            justifyLastLine: xmlDoc.attrBool(attrs, "justifyLastLine"),
            readingOrder: xmlDoc.attrInt(attrs, "readingOrder"),
            relativeIndent: xmlDoc.attrInt(attrs, "relativeIndent"),
            shrinkToFit: xmlDoc.attrBool(attrs, "shrinkToFit"),
            textRotation: xmlDoc.attrFloat(attrs, "textRotation"),
            vertical: <OpenXml.ST_VerticalAlignment>xmlDoc.attrString(attrs, "vertical"),
            wrapText: xmlDoc.attrBool(attrs, "wrapText"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Alignment): HTMLElement {
        var elem = xmlDoc.domBldr.create("alignment")
            .attrString("horizontal", inst.horizontal, true)
            .attrInt("indent", inst.indent, true)
            .attrBool("justifyLastLine", inst.justifyLastLine, true, "1", "0")
            .attrInt("readingOrder", inst.readingOrder, true)
            .attrInt("relativeIndent", inst.relativeIndent, true)
            .attrBool("shrinkToFit", inst.shrinkToFit, true, "1", "0")
            .attrFloat("textRotation", inst.textRotation, true)
            .attrString("vertical", inst.vertical, true)
            .attrBool("wrapText", inst.wrapText, true, "1", "0")
            .element;
        return elem;
    }

}

export = Alignment;