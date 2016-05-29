/** <rFont> (Font) "x:rFont"
 * parent: rPr (§18.4.7)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.runfont.aspx
 */
class RunFont {
    private static type: OpenXmlIo.ReadWrite<OpenXml.RunFont> = RunFont; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.RunFont {
        if (elem.tagName !== "rFont") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "rFont", "rPr"); }
        var attrs = elem.attributes;
        return {
            val: xmlDoc.domHelper.attrString(attrs, "val"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.RunFont): HTMLElement {
        var elem = xmlDoc.domBldr.create("rFont")
            .attrString("val", inst.val)
            .element;
        return elem;
    }


    public static copy(inst: OpenXml.RunFont): OpenXml.RunFont {
        return {
            val: inst.val
        };
    }

}

export = RunFont;