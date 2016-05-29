/** <b> (Bold) "x:b"
 * parent: font (§18.8.22); rPr (§18.4.7)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.bold.aspx
 */
class Bold {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Bold> = Bold; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement, expectedTagName: string, parentTags?: string): OpenXml.Bold {
        if (elem.tagName !== expectedTagName) { throw xmlDoc.validator.unexpectedNode(elem.tagName, expectedTagName, (parentTags || "font, rPr")); }
        var attrs = elem.attributes;
        var valAttr = xmlDoc.domHelper.attrBool(attrs, "val");
        return {
            val: (valAttr == null || valAttr == true) ? true : valAttr,
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.Bold, tagName: string): HTMLElement {
        var elem = xmlDoc.domBldr.create(tagName)
            .attrBool("val", inst.val === true ? null : inst.val, true, "1", "0")
            .element;
        return elem;
    }


    public static copy(inst: OpenXml.Bold): OpenXml.Bold {
        return {
            val: inst.val,
        };
    }

}

export = Bold;