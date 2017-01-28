import SheetView = require("./SheetView");

class SheetViews {
    private static type: OpenXmlIo.ReadWrite<OpenXml.SheetViews> = SheetViews; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.SheetViews {
        xmlDoc.validator.expectNode(elem, "sheetViews", "dialogsheet, worksheet");
        var sheetViewElems = xmlDoc.queryAllChilds(elem, "sheetView");
        return {
            sheetViews: xmlDoc.readMulti(SheetView.read, sheetViewElems),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.SheetViews): HTMLElement {
        var elem = xmlDoc.dom.createElement("sheetViews");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(SheetView.write, inst.sheetViews));
        return elem;
    }

}

export = SheetViews;