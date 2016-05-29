/** <legacyDrawing> (Legacy Drawing Reference) "x:legacyDrawing"
 * parent: chartsheet (Part 1, §18.3.1.12); dialogsheet (Part 1, §18.3.1.34); worksheet (Part 1, §18.3.1.99)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.legacydrawing.aspx
 */
class LegacyDrawing {
    private static type: OpenXmlIo.ReadWrite<OpenXml.LegacyDrawing> = LegacyDrawing; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.LegacyDrawing {
        if (elem.tagName !== "legacyDrawing") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "legacyDrawing", "chartsheet, dialogsheet, worksheet"); }
        var attrs = elem.attributes;
        return {
            rid: xmlDoc.domHelper.attrString(attrs, "r:id"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.LegacyDrawing): HTMLElement {
        var elem = xmlDoc.domBldr.create("legacyDrawing")
            .attrString("r:id", inst.rid)
            .element;
        return elem;
    }

}

export = LegacyDrawing;