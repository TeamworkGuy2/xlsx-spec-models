/** <alignment> (Alignment) "x:alignment"
 * parent: dxf (§18.8.14); ndxf (§18.11.1.4); odxf (§18.11.1.6); xf (§18.8.45)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.alignment.aspx
 */
class Alignment {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Alignment> = Alignment; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.Alignment {
        if (elem.tagName !== "alignment") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "alignment", "dxf, ndxf, odxf, xf"); }
        var attrs = elem.attributes;
        return {
            horizontal: xmlDoc.domHelper.attrString(attrs, "horizontal"),
            indent: xmlDoc.domHelper.attrInt(attrs, "indent"),
            justifyLastLine: xmlDoc.domHelper.attrBool(attrs, "justifyLastLine"),
            readingOrder: xmlDoc.domHelper.attrInt(attrs, "readingOrder"),
            relativeIndent: xmlDoc.domHelper.attrInt(attrs, "relativeIndent"),
            shrinkToFit: xmlDoc.domHelper.attrBool(attrs, "shrinkToFit"),
            textRotation: xmlDoc.domHelper.attrFloat(attrs, "textRotation"),
            vertical: xmlDoc.domHelper.attrString(attrs, "vertical"),
            wrapText: xmlDoc.domHelper.attrBool(attrs, "wrapText"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.Alignment): HTMLElement {
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