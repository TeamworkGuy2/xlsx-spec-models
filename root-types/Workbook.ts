
export const Workbook: OpenXmlIo.ReadWrite<OpenXml.Workbook> = {
    read(xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "workbook", "root element of SpreadsheetML Workbook part");
        var sheetsElem = xmlDoc.queryOneChild(elem, "sheets");

        return {
            sheets: Sheets.read(xmlDoc, sheetsElem),
            bookViews: xmlDoc.queryOneChild(elem, "bookViews", false),
            calcPr: xmlDoc.queryOneChild(elem, "calcPr", false),
            fileVersion: xmlDoc.queryOneChild(elem, "fileVersion", false),
            workbookPr: xmlDoc.queryOneChild(elem, "workbookPr", false),
            extLst: xmlDoc.queryOneChild(elem, "extLst", false),
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

export const Sheet: OpenXmlIo.ReadWrite<OpenXml.Sheet> = {
    read(xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "sheet", "sheets");
        return {
            id: xmlDoc.attrString(elem, "r:id") ?? "",
            name: xmlDoc.attrString(elem, "name") ?? "",
            sheetId: xmlDoc.attrInt(elem, "sheetId") ?? 0,
            state: <OpenXml.ST_SheetState | null>xmlDoc.attrString(elem, "state"),
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

export const Sheets: OpenXmlIo.ReadWrite<OpenXml.Sheets> = {
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