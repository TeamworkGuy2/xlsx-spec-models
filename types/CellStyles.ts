import CellStyle = require("./CellStyle");

/** <cellStyles> (Cell Styles) "x:cellStyles"
 * parents: styleSheet (§18.8.39)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.cellstyles.aspx
 */
class CellStyles {
    private static type: OpenXmlIo.ReadWrite<OpenXml.CellStyles> = CellStyles; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.CellStyles {
        if (elem.tagName !== "cellStyles") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "cellStyles", "styleSheet"); }
        var cellStyleElems = xmlDoc.domHelper.queryAllChilds(elem, "cellStyle");
        var attrs = elem.attributes;
        return {
            cellStyles: xmlDoc.readOpenXml.readMulti(xmlDoc, CellStyle.read, cellStyleElems),
            count: xmlDoc.domHelper.attrInt(attrs, "count"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.CellStyles): HTMLElement {
        var elem = xmlDoc.domBldr.create("cellStyles")
            .attrInt("count", inst.count, true)
            .element;
        var cellStyleElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, CellStyle.write, inst.cellStyles);
        xmlDoc.domHelper.addChilds(elem, cellStyleElems);
        return elem;
    }

}

export = CellStyles;