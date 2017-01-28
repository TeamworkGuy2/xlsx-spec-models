import CellStyle = require("./CellStyle");

class CellStyles {
    private static type: OpenXmlIo.ReadWrite<OpenXml.CellStyles> = CellStyles; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.CellStyles {
        xmlDoc.validator.expectNode(elem, "cellStyles", "styleSheet");
        var cellStyleElems = xmlDoc.queryAllChilds(elem, "cellStyle");
        var attrs = elem.attributes;
        return {
            cellStyles: xmlDoc.readMulti(CellStyle.read, cellStyleElems),
            count: xmlDoc.attrInt(attrs, "count"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.CellStyles): HTMLElement {
        var elem = xmlDoc.domBldr.create("cellStyles")
            .attrInt("count", inst.count, true)
            .element;
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(CellStyle.write, inst.cellStyles));
        return elem;
    }

}

export = CellStyles;