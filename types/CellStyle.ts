/** <cellStyle> (Cell Style) "x:cellStyle"
 * parent: cellStyles (§18.8.8)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.cellstyle.aspx
 */
class CellStyle {
    private static type: OpenXmlIo.ReadWrite<OpenXml.CellStyle> = CellStyle; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.CellStyle {
        if (elem.tagName !== "cellStyle") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "cellStyle", "cellStyles"); }
        var attrs = elem.attributes;
        return {
            builtinId: xmlDoc.domHelper.attrInt(attrs, "builtinId"),
            customBuiltin: xmlDoc.domHelper.attrBool(attrs, "customBuiltin"),
            hidden: xmlDoc.domHelper.attrBool(attrs, "hidden"),
            iLevel: xmlDoc.domHelper.attrInt(attrs, "iLevel"),
            name: xmlDoc.domHelper.attrString(attrs, "name"),
            xfId: xmlDoc.domHelper.attrInt(attrs, "xfId"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.CellStyle): HTMLElement {
        var elem = xmlDoc.domBldr.create("cellStyle")
            .attrString("name", inst.name, true)
            .attrInt("xfId", inst.xfId)
            .attrInt("builtinId", inst.builtinId, true)
            .attrBool("customBuiltin", inst.customBuiltin, true, "1", "0")
            .attrBool("hidden", inst.hidden, true, "1", "0")
            .attrInt("iLevel", inst.iLevel, true)
            .element;
        return elem;
    }

}

export = CellStyle;