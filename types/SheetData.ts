import Row = require("./Row");

/** <sheetData> (Sheet Data) "x:sheetData"
 * parent: worksheet (§18.3.1.99)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.text.aspx
 */
class SheetData {
    private static type: OpenXmlIo.ReadWrite<OpenXml.SheetData> = SheetData; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.SheetData {
        if (elem.tagName !== "sheetData") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "sheetData", "worksheet"); }
        var rowElems = xmlDoc.domHelper.queryAllChilds(elem, "row");
        return {
            rows: xmlDoc.readOpenXml.readMulti(xmlDoc, Row.read, rowElems),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.SheetData): HTMLElement {
        var elem = xmlDoc.dom.createElement("sheetData");
        xmlDoc.domHelper.addChilds(elem, xmlDoc.writeOpenXml.writeMulti(xmlDoc, Row.write, inst.rows));
        return elem;
    }

}

export = SheetData;