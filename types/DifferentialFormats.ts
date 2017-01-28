import DifferentialFormat = require("./DifferentialFormat");

class DifferentialFormats {
    private static type: OpenXmlIo.ReadWrite<OpenXml.DifferentialFormats> = DifferentialFormats; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.DifferentialFormats {
        xmlDoc.validator.expectNode(elem, "dxfs", "styleSheet");
        var dxfElems = xmlDoc.queryAllChilds(elem, "dxf");
        var attrs = elem.attributes;
        return {
            dxfs: xmlDoc.readMulti(DifferentialFormat.read, dxfElems),
            count: xmlDoc.attrInt(attrs, "count"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.DifferentialFormats): HTMLElement {
        var elem = xmlDoc.domBldr.create("dxfs")
            .attrInt("count", inst.count, true)
            .element;
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(DifferentialFormat.write, inst.dxfs));
        return elem;
    }
}

export = DifferentialFormats;