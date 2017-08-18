import Sheet = require("./Sheet");

class Sheets {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Sheets> = Sheets; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Sheets {
        xmlDoc.validator.expectNode(elem, "sheets", "workbook");
        var sheetElems = xmlDoc.queryAllChilds(elem, "sheet");
        return {
            sheets: xmlDoc.readMulti(Sheet.read, sheetElems),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Sheets): ElementLike {
        var elem = xmlDoc.dom.createElement("sheets");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Sheet.write, inst.sheets));
        return elem;
    }

}

export = Sheets;