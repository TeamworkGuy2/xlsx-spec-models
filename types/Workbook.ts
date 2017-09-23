import Sheets = require("./Sheets");

class Workbook {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Workbook> = Workbook; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Workbook {
        xmlDoc.validator.expectNode(elem, "workbook", "root element of SpreadsheetML Workbook part");
        var sheetsElem = xmlDoc.queryOneChild(elem, "sheets");
        return {
            sheets: Sheets.read(xmlDoc, sheetsElem),
            bookViews: xmlDoc.queryOneChild(elem, "bookViews"),
            calcPr: xmlDoc.queryOneChild(elem, "calcPr"),
            fileVersion: xmlDoc.queryOneChild(elem, "fileVersion"),
            workbookPr: xmlDoc.queryOneChild(elem, "workbookPr"),
            extLst: xmlDoc.queryOneChild(elem, "extLst"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Workbook): ElementLike {
        var elem = xmlDoc.dom.createElement("workbook");
        if (inst.fileVersion) { elem.appendChild(<Element>inst.fileVersion); }
        if (inst.workbookPr) { elem.appendChild(<Element>inst.workbookPr); }
        if (inst.bookViews) { elem.appendChild(<Element>inst.bookViews); }
        elem.appendChild(Sheets.write(xmlDoc, inst.sheets));
        if (inst.calcPr) { elem.appendChild(<Element>inst.calcPr); }
        if (inst.extLst) { elem.appendChild(<Element>inst.extLst); }
        return elem;
    }

}

export = Workbook;