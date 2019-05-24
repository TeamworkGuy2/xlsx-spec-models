
class Bold {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Bold> = Bold; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement, expectedTagName: string, parentTags?: string): OpenXml.Bold {
        xmlDoc.validator.expectNode(elem, expectedTagName, (parentTags || "font, rPr"));
        var valAttr = xmlDoc.attrBool(elem, "val");
        return {
            val: (valAttr == null || valAttr == true) ? true : valAttr,
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Bold, tagName: string): ElementLike {
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