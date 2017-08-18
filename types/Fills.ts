import Fill = require("./Fill");

class Fills {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Fills> = Fills; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Fills {
        xmlDoc.validator.expectNode(elem, "fills", "styleSheet");
        var fillElems = xmlDoc.queryAllChilds(elem, "fill");
        var attrs = elem.attributes;
        return {
            fills: xmlDoc.readMulti(Fill.read, fillElems),
            count: xmlDoc.attrInt(attrs, "count"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Fills): ElementLike {
        var elem = xmlDoc.domBldr.create("fills")
            .attrInt("count", inst.count, true)
            .element;
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Fill.write, inst.fills));
        return elem;
    }

}

export = Fills;