/** <drawing> (Drawing) "x:drawing"
 * parent: chartsheet (§18.3.1.12); dialogsheet (§18.3.1.34); worksheet (§18.3.1.99)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.drawing.aspx
 */
class Drawing {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Drawing> = Drawing; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.Drawing {
        if (elem.tagName !== "drawing") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "drawing", "chartsheet, dialogsheet, worksheet"); }
        var attrs = elem.attributes;
        return {
            rid: xmlDoc.domHelper.attrString(attrs, "r:id"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.Drawing): HTMLElement {
        var elem = xmlDoc.domBldr.create("drawing")
            .attr("r:id", inst.rid)
            .element;
        return elem;
    }

}

export = Drawing;