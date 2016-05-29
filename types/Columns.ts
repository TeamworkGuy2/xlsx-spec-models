import Column = require("./Column");

/** <cols> (Column Information) "x:cols"
 * parent: worksheet (§18.3.1.99)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.columns.aspx
 */
class Columns {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Columns> = Columns; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.Columns {
        if (elem.tagName !== "cols") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "cols", "worksheet"); }
        var colElems = xmlDoc.domHelper.queryAllChilds(elem, "col");
        return {
            cols: xmlDoc.readOpenXml.readMulti(xmlDoc, Column.read, colElems),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.Columns): HTMLElement {
        var elem = xmlDoc.dom.createElement("cols");
        var colElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, Column.write, inst.cols);
        xmlDoc.domHelper.addChilds(elem, colElems);

        return elem;
    }

}

export = Columns;