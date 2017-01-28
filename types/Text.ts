
class Text {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Text> = Text; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Text {
        xmlDoc.validator.expectNode(elem, "t", "si, r");
        return {
            preserveSpace: xmlDoc.attrBool(elem.attributes, "xml:space"),
            content: elem.textContent
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Text): HTMLElement {
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