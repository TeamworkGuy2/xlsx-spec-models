import Border = require("./Border");

class Borders {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Borders> = Borders; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Borders {
        xmlDoc.validator.expectNode(elem, "borders", "styleSheet");
        var borderElems = xmlDoc.queryAllChilds(elem, "border");
        var attrs = elem.attributes;
        return {
            borders: xmlDoc.readMulti(Border.read, borderElems),
            count: xmlDoc.attrInt(attrs, "count"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Borders): HTMLElement {
        var elem = xmlDoc.domBldr.create("borders")
            .attrInt("count", inst.count, true)
            .element;
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Border.write, inst.borders));
        return elem;
    }

}

export = Borders;