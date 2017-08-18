import Row = require("./Row");

class SheetData {
    private static type: OpenXmlIo.ReadWrite<OpenXml.SheetData> = SheetData; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.SheetData {
        xmlDoc.validator.expectNode(elem, "sheetData", "worksheet");
        var rowElems = xmlDoc.queryAllChilds(elem, "row");
        return {
            rows: xmlDoc.readMulti(Row.read, rowElems),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.SheetData): ElementLike {
        var elem = xmlDoc.dom.createElement("sheetData");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Row.write, inst.rows));
        return elem;
    }

}

export = SheetData;