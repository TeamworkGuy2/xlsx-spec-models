"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sheets = exports.Sheet = exports.Workbook = void 0;
exports.Workbook = {
    read: function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "workbook", "root element of SpreadsheetML Workbook part");
        var sheetsElem = xmlDoc.queryOneChild(elem, "sheets");
        return {
            sheets: exports.Sheets.read(xmlDoc, sheetsElem),
            bookViews: xmlDoc.queryOneChild(elem, "bookViews", false),
            calcPr: xmlDoc.queryOneChild(elem, "calcPr", false),
            fileVersion: xmlDoc.queryOneChild(elem, "fileVersion", false),
            workbookPr: xmlDoc.queryOneChild(elem, "workbookPr", false),
            extLst: xmlDoc.queryOneChild(elem, "extLst", false),
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("workbook");
        if (inst.fileVersion) {
            elem.appendChild(inst.fileVersion);
        }
        if (inst.workbookPr) {
            elem.appendChild(inst.workbookPr);
        }
        if (inst.bookViews) {
            elem.appendChild(inst.bookViews);
        }
        elem.appendChild(exports.Sheets.write(xmlDoc, inst.sheets));
        if (inst.calcPr) {
            elem.appendChild(inst.calcPr);
        }
        if (inst.extLst) {
            elem.appendChild(inst.extLst);
        }
        return elem;
    }
};
exports.Sheet = {
    read: function (xmlDoc, elem) {
        var _a, _b, _c;
        xmlDoc.validator.expectNode(elem, "sheet", "sheets");
        return {
            id: (_a = xmlDoc.attrString(elem, "r:id")) !== null && _a !== void 0 ? _a : "",
            name: (_b = xmlDoc.attrString(elem, "name")) !== null && _b !== void 0 ? _b : "",
            sheetId: (_c = xmlDoc.attrInt(elem, "sheetId")) !== null && _c !== void 0 ? _c : 0,
            state: xmlDoc.attrString(elem, "state"),
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("sheet")
            .attrString("r:id", inst.id)
            .attrString("name", inst.name)
            .attrInt("sheetId", inst.sheetId)
            .attrString("state", inst.state, true)
            .element;
        return elem;
    }
};
exports.Sheets = {
    read: function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "sheets", "workbook");
        var sheetElems = xmlDoc.queryAllChilds(elem, "sheet");
        return {
            sheets: xmlDoc.readMulti(exports.Sheet.read, sheetElems),
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("sheets");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(exports.Sheet.write, inst.sheets));
        return elem;
    }
};
