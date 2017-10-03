
module Workbook {

    export var Workbook: OpenXmlIo.ReadWrite<OpenXml.Workbook> = {
        read(xmlDoc, elem) {
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
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("workbook");
            if (inst.fileVersion) { elem.appendChild(<Element>inst.fileVersion); }
            if (inst.workbookPr) { elem.appendChild(<Element>inst.workbookPr); }
            if (inst.bookViews) { elem.appendChild(<Element>inst.bookViews); }
            elem.appendChild(Sheets.write(xmlDoc, inst.sheets));
            if (inst.calcPr) { elem.appendChild(<Element>inst.calcPr); }
            if (inst.extLst) { elem.appendChild(<Element>inst.extLst); }
            return elem;
        }
    };


    export var Sheet: OpenXmlIo.ReadWrite<OpenXml.Sheet> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "sheet", "sheets");
            var attrs = elem.attributes;
            return {
                id: xmlDoc.attrString(attrs, "r:id"),
                name: xmlDoc.attrString(attrs, "name"),
                sheetId: xmlDoc.attrInt(attrs, "sheetId"),
                state: <OpenXml.ST_SheetState>xmlDoc.attrString(attrs, "state"),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("sheet")
                .attrString("r:id", inst.id)
                .attrString("name", inst.name)
                .attrInt("sheetId", inst.sheetId)
                .attrString("state", inst.state, true)
                .element;

            return elem;
        }
    };


    export var Sheets: OpenXmlIo.ReadWrite<OpenXml.Sheets> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "sheets", "workbook");
            var sheetElems = xmlDoc.queryAllChilds(elem, "sheet");
            return {
                sheets: xmlDoc.readMulti(Sheet.read, sheetElems),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("sheets");
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Sheet.write, inst.sheets));
            return elem;
        }
    };

}

export = Workbook;