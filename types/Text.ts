
class Text {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Text> = Text; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Text {
        xmlDoc.validator.expectNode(elem, "t", "si, r");
        return {
            preserveSpace: xmlDoc.attrBool(elem, "xml:space"),
            content: elem.textContent
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Text): ElementLike {
        var elem = xmlDoc.domBldr.create("t");
        if (inst.preserveSpace) { elem.attrString("xml:space", "preserve"); }
        elem.element.textContent = inst.content;
        return elem.element;
    }


    public static copy(inst: OpenXml.Text): OpenXml.Text {
        return {
            content: inst.content,
            preserveSpace: inst.preserveSpace
        };
    }

}

export = Text;