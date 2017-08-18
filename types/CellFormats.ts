import CellFormat = require("./CellFormat");

class CellFormats {
    private static type: OpenXmlIo.ReadWrite<OpenXml.CellFormats> = CellFormats; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.CellFormats {
        xmlDoc.validator.expectNode(elem, "cellXfs", "styleSheet");
        var cellFormatElems = xmlDoc.queryAllChilds(elem, "xf");
        var attrs = elem.attributes;
        return {
            xfs: xmlDoc.readMulti(CellFormat.read, cellFormatElems),
            count: xmlDoc.attrInt(attrs, "count"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.CellFormats): ElementLike {
        var elem = xmlDoc.domBldr.create("cellXfs")
            .attrInt("count", inst.count, true)
            .element;
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(CellFormat.write, inst.xfs));
        return elem;
    }

}

export = CellFormats;