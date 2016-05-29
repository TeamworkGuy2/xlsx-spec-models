/** <sheetFormatPr> (Sheet Format Properties) "x:sheetFormatPr"
 * parent: dialogsheet (§18.3.1.34); worksheet (§18.3.1.99)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.sheetformatproperties.aspx
 */
class SheetFormatProperties {
    private static type: OpenXmlIo.ReadWrite<OpenXml.SheetFormatProperties> = SheetFormatProperties; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.SheetFormatProperties {
        if (elem.tagName !== "sheetFormatPr") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "sheetFormatPr", "dialogsheet, worksheet"); }
        var attrs = elem.attributes;
        return {
            defaultColWidth: xmlDoc.domHelper.attrFloat(attrs, "defaultColWidth"),
            defaultRowHeight: xmlDoc.domHelper.attrFloat(attrs, "defaultRowHeight"),
            dyDescent: xmlDoc.domHelper.attrFloat(attrs, "x14ac:dyDescent"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.SheetFormatProperties): HTMLElement {
        var elem = xmlDoc.domBldr.create("sheetFormatPr")
            .attrFloat("defaultColWidth", inst.defaultColWidth, true)
            .attrFloat("defaultRowHeight", inst.defaultRowHeight)
            .attrFloat("x14ac:dyDescent", inst.dyDescent, true)
            .element;
        return elem;
    }

}

export = SheetFormatProperties;