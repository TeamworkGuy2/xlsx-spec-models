import Font = require("./Font");

class Fonts {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Fonts> = Fonts; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Fonts {
        xmlDoc.validator.expectNode(elem, "fonts", "styleSheet");
        var fontElems = xmlDoc.queryAllChilds(elem, "font");
        var attrs = elem.attributes;
        return {
            fonts: xmlDoc.readMulti(Font.read, fontElems),
            count: xmlDoc.attrInt(attrs, "count"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Fonts): HTMLElement {
        var elem = xmlDoc.domBldr.create("fonts")
            .attrInt("count", inst.count, true)
            .element;
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Font.write, inst.fonts));
        return elem;
    }

}

export = Fonts;