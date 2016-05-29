import SheetView = require("./SheetView");

/** <sheetViews> (Sheet Views) "x:sheetViews"
 * parent: dialogsheet (§18.3.1.34); worksheet (§18.3.1.99)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.sheetviews.aspx
 */
class SheetViews {
    private static type: OpenXmlIo.ReadWrite<OpenXml.SheetViews> = SheetViews; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.SheetViews {
        if (elem.tagName !== "sheetViews") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "sheetViews", "dialogsheet, worksheet"); }
        var sheetViewElems = xmlDoc.domHelper.queryAllChilds(elem, "sheetView");
        return {
            sheetViews: xmlDoc.readOpenXml.readMulti(xmlDoc, SheetView.read, sheetViewElems),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.SheetViews): HTMLElement {
        var elem = xmlDoc.dom.createElement("sheetViews");
        var sheetViewElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, SheetView.write, inst.sheetViews);
        xmlDoc.domHelper.addChilds(elem, sheetViewElems);
        return elem;
    }

}

export = SheetViews;