import DifferentialFormat = require("./DifferentialFormat");

/** <dxfs> (Formats) "x:dxfs"
 * parents: styleSheet (§18.8.39)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.differentialformats.aspx
 */
class DifferentialFormats {
    private static type: OpenXmlIo.ReadWrite<OpenXml.DifferentialFormats> = DifferentialFormats; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.DifferentialFormats {
        if (elem.tagName !== "dxfs") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "dxfs", "styleSheet"); }
        var dxfElems = xmlDoc.domHelper.queryAllChilds(elem, "dxf");
        var attrs = elem.attributes;
        return {
            dxfs: xmlDoc.readOpenXml.readMulti(xmlDoc, DifferentialFormat.read, dxfElems),
            count: xmlDoc.domHelper.attrInt(attrs, "count"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.DifferentialFormats): HTMLElement {
        var elem = xmlDoc.domBldr.create("dxfs")
            .attrInt("count", inst.count, true)
            .element;
        var dxfElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, DifferentialFormat.write, inst.dxfs);
        xmlDoc.domHelper.addChilds(elem, dxfElems);
        return elem;
    }
}

export = DifferentialFormats;