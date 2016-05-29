/** <dimension> (Worksheet Dimensions) "x:dimension"
 * parent: worksheet (§18.3.1.99)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.sheetdimension.aspx
 */
class SheetDimension {
    private static type: OpenXmlIo.ReadWrite<OpenXml.SheetDimension> = SheetDimension; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.SheetDimension {
        if (elem.tagName !== "dimension") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "dimension", "worksheet"); }
        var attrs = elem.attributes;
        return {
            ref: xmlDoc.domHelper.attrString(attrs, "ref")
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.SheetDimension): HTMLElement {
        var elem = xmlDoc.domBldr.create("dimension")
            .attrString("ref", inst.ref)
            .element;
        return elem;
    }

}

export = SheetDimension;