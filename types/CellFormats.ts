import CellFormat = require("./CellFormat");

/** <cellXfs> (Cell Formats) "x:cellXfs"
 * parents: styleSheet (§18.8.39)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.cellformats.aspx
 */
class CellFormats {
    private static type: OpenXmlIo.ReadWrite<OpenXml.CellFormats> = CellFormats; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.CellFormats {
        if (elem.tagName !== "cellXfs") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "cellXfs", "styleSheet"); }
        var cellFormatElems = xmlDoc.domHelper.queryAllChilds(elem, "xf");
        var attrs = elem.attributes;
        return {
            xfs: xmlDoc.readOpenXml.readMulti(xmlDoc, CellFormat.read, cellFormatElems),
            count: xmlDoc.domHelper.attrInt(attrs, "count"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.CellFormats): HTMLElement {
        var elem = xmlDoc.domBldr.create("cellXfs")
            .attrInt("count", inst.count, true)
            .element;
        var cellFormatElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, CellFormat.write, inst.xfs);
        xmlDoc.domHelper.addChilds(elem, cellFormatElems);
        return elem;
    }

}

export = CellFormats;