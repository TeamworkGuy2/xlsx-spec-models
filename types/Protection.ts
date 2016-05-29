/** <protection> (Protection Properties) "x:protection"
 * parent: dxf (§18.8.14); ndxf (§18.11.1.4); odxf (§18.11.1.6); xf (§18.8.45)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.protection.aspx
 */
class Protection {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Protection> = Protection; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.Protection {
        if (elem.tagName !== "protection") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "protection", "dxf, ndxf, odxf, xf"); }
        var attrs = elem.attributes;
        return {
            hidden: xmlDoc.domHelper.attrBool(attrs, "hidden"),
            locked: xmlDoc.domHelper.attrBool(attrs, "locked"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.Protection): HTMLElement {
        var elem = xmlDoc.domBldr.create("protection")
            .attrBool("hidden", inst.hidden, true, "1", "0")
            .attrBool("locked", inst.locked, true, "1", "0")
            .element;
        return elem;
    }

}

export = Protection;