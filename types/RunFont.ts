
class RunFont {
    private static type: OpenXmlIo.ReadWrite<OpenXml.RunFont> = RunFont; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.RunFont {
        xmlDoc.validator.expectNode(elem, "rFont", "rPr");
        return {
            val: xmlDoc.attrString(elem, "val") ?? "",
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.RunFont): ElementLike {
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