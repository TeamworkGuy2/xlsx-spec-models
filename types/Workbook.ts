import Sheets = require("./Sheets");

class Workbook {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Workbook> = Workbook; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Workbook {
        xmlDoc.validator.expectNode(elem, "workbook", "root element of SpreadsheetML Workbook part");
        var sheetsElem = xmlDoc.queryOneChild(elem, "sheets");
        var inst = {
            sheets: Sheets.read(xmlDoc, sheetsElem),
        };
        return inst;
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Workbook): ElementLike {
        var elem = xmlDoc.dom.createElement("workbook");
        elem.appendChild(Sheets.write(xmlDoc, inst.sheets));
        return elem;
    }

}

export = Workbook;