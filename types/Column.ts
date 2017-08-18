
class Column {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Column> = Column; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Column {
        xmlDoc.validator.expectNode(elem, "col", "cols");
        var attrs = elem.attributes;
        return {
            bestFit: xmlDoc.attrBool(attrs, "bestFit"),
            collapsed: xmlDoc.attrBool(attrs, "collapsed"),
            customWidth: xmlDoc.attrBool(attrs, "customWidth"),
            hidden: xmlDoc.attrBool(attrs, "hidden"),
            max: xmlDoc.attrInt(attrs, "max"),
            min: xmlDoc.attrInt(attrs, "min"),
            outlineLevel: xmlDoc.attrInt(attrs, "outlineLevel"),
            phonetic: xmlDoc.attrBool(attrs, "phonetic"),
            style: xmlDoc.attrInt(attrs, "style"),
            width: xmlDoc.attrFloat(attrs, "width"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Column): ElementLike {
        var elem = xmlDoc.domBldr.create("col")
            .attrInt("min", inst.min)
            .attrInt("max", inst.max)
            .attrFloat("width", inst.width, true)
            .attrInt("style", inst.style, true)
            .attrInt("outlineLevel", inst.outlineLevel, true)
            .attrBool("customWidth", inst.customWidth, true, "1", "0")
            .attrBool("bestFit", inst.bestFit, true, "1", "0")
            .attrBool("collapsed", inst.collapsed, true, "1", "0")
            .attrBool("hidden", inst.hidden, true, "1", "0")
            .attrBool("phonetic", inst.phonetic, true, "1", "0")
            .element;

        return elem;
    }

}

export = Column;