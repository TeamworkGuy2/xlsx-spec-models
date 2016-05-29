/** <numFmt> (Number Format) "x:numFmt"
 * parent: dxf (§18.8.14); ndxf (§18.11.1.4); numFmts (§18.8.31); odxf (§18.11.1.6)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.numberingformat.aspx
 */
class NumberingFormat {
    private static type: OpenXmlIo.ReadWrite<OpenXml.NumberingFormat> = NumberingFormat; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.NumberingFormat {
        if (elem.tagName !== "numFmt") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "numFmt", "dxf, ndxf, numFmts, odxf"); }
        var attrs = elem.attributes;
        return {
            formatCode: xmlDoc.domHelper.attrString(attrs, "formatCode"),
            numFmtId: xmlDoc.domHelper.attrInt(attrs, "numFmtId"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.NumberingFormat): HTMLElement {
        var elem = xmlDoc.domBldr.create("numFmt")
            .attrInt("numFmtId", inst.numFmtId)
            .attrString("formatCode", inst.formatCode)
            .element;
        return elem;
    }

}

export = NumberingFormat;