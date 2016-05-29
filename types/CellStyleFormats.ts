import CellFormat = require("./CellFormat");

/** <cellStyleXfs> (Formatting Records) "x:cellStyleXfs"
 * parents: styleSheet (§18.8.39)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.cellstyleformats.aspx
 */
class CellStyleFormats {
    private static type: OpenXmlIo.ReadWrite<OpenXml.CellStyleFormats> = CellStyleFormats; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.CellStyleFormats {
        if (elem.tagName !== "cellStyleXfs") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "cellStyleXfs", "styleSheet"); }
        var cellFormatElems = xmlDoc.domHelper.queryAllChilds(elem, "xf");
        var attrs = elem.attributes;
        return {
            xfs: xmlDoc.readOpenXml.readMulti(xmlDoc, CellFormat.read, cellFormatElems),
            count: xmlDoc.domHelper.attrInt(attrs, "count"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.CellStyleFormats): HTMLElement {
        var elem = xmlDoc.domBldr.create("cellStyleXfs")
            .attrInt("count", inst.count, true)
            .element;
        var cellFormatElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, CellFormat.write, inst.xfs);
        xmlDoc.domHelper.addChilds(elem, cellFormatElems);
        return elem;
    }

}

export = CellStyleFormats;