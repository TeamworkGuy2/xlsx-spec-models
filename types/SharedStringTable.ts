import SharedStringItem = require("./SharedStringItem");

/** <sst> (Shared String Table) "x:sst"
 * parent: Root element of SpreadsheetML Shared String Table part
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.sharedstringtable.aspx
 */
class SharedStringTable {
    private static type: OpenXmlIo.ReadWrite<OpenXml.SharedStringTable> = SharedStringTable; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.SharedStringTable {
        if (elem.tagName !== "sst") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "sst", "root element of SpreadsheetML Shared String Table part"); }
        var sharedStringElems = xmlDoc.domHelper.queryAllChilds(elem, "si");
        return {
            sis: xmlDoc.readOpenXml.readMulti(xmlDoc, SharedStringItem.read, sharedStringElems),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.SharedStringTable): HTMLElement {
        var elem = xmlDoc.dom.createElement("sst");

        var siElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, SharedStringItem.write, inst.sis);
        xmlDoc.domHelper.addChilds(elem, siElems);

        return elem;
    }

}

export = SharedStringTable;