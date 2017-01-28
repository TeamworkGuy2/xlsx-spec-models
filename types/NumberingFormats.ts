import NumberingFormat = require("./NumberingFormat");

class NumberingFormats {
    private static type: OpenXmlIo.ReadWrite<OpenXml.NumberingFormats> = NumberingFormats; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.NumberingFormats {
        xmlDoc.validator.expectNode(elem, "numFmts", "styleSheet");
        var numFmtElems = xmlDoc.queryAllChilds(elem, "numFmt");
        var attrs = elem.attributes;
        return {
            numFmts: xmlDoc.readMulti(NumberingFormat.read, numFmtElems),
            count: xmlDoc.attrInt(attrs, "count"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.NumberingFormats): HTMLElement {
        var elem = xmlDoc.domBldr.create("numFmts")
            .attrInt("count", inst.count, true)
            .element;
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(NumberingFormat.write, inst.numFmts));
        return elem;
    }

}

export = NumberingFormats;