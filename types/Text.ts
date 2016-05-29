/** <t> (Text) "x:t"
 * parent: is (§18.3.1.53); r (§18.4.4); rPh (§18.4.6); si (§18.4.8); text (§18.7.7)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.text.aspx
 */
class Text {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Text> = Text; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.Text {
        if (elem.tagName !== "t") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "t", "si, r"); }
        return {
            preserveSpace: xmlDoc.domHelper.attrBool(elem.attributes, "xml:space"),
            content: elem.textContent
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.Text): HTMLElement {
        var elem = xmlDoc.dom.createElement("t");
        elem.textContent = inst.content;
        if (inst.preserveSpace) { elem.setAttribute("xml:space", "preserve"); }
        return elem;
    }


    public static copy(inst: OpenXml.Text): OpenXml.Text {
        return {
            content: inst.content,
            preserveSpace: inst.preserveSpace
        };
    }

}

export = Text;