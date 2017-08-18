import CellFormat = require("./CellFormat");

class CellStyleFormats {
    private static type: OpenXmlIo.ReadWrite<OpenXml.CellStyleFormats> = CellStyleFormats; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.CellStyleFormats {
        xmlDoc.validator.expectNode(elem, "cellStyleXfs", "styleSheet");
        var cellFormatElems = xmlDoc.queryAllChilds(elem, "xf");
        var attrs = elem.attributes;
        return {
            xfs: xmlDoc.readMulti(CellFormat.read, cellFormatElems),
            count: xmlDoc.attrInt(attrs, "count"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.CellStyleFormats): ElementLike {
        var elem = xmlDoc.domBldr.create("cellStyleXfs")
            .attrInt("count", inst.count, true)
            .element;
        var cellFormatElems = xmlDoc.writeMulti(CellFormat.write, inst.xfs);
        xmlDoc.addChilds(elem, cellFormatElems);
        return elem;
    }

}

export = CellStyleFormats;