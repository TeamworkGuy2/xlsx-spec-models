"use strict";
var Workbook;
(function (Workbook_1) {
    Workbook_1.Workbook = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "workbook", "root element of SpreadsheetML Workbook part");
            var sheetsElem = xmlDoc.queryOneChild(elem, "sheets");
            return {
                sheets: Workbook_1.Sheets.read(xmlDoc, sheetsElem),
                bookViews: xmlDoc.queryOneChild(elem, "bookViews"),
                calcPr: xmlDoc.queryOneChild(elem, "calcPr"),
                fileVersion: xmlDoc.queryOneChild(elem, "fileVersion"),
                workbookPr: xmlDoc.queryOneChild(elem, "workbookPr"),
                extLst: xmlDoc.queryOneChild(elem, "extLst"),
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
            elem.appendChild(Workbook_1.Sheets.write(xmlDoc, inst.sheets));
            if (inst.calcPr) {
                elem.appendChild(inst.calcPr);
            }
            if (inst.extLst) {
                elem.appendChild(inst.extLst);
            }
            return elem;
        }
    };
    Workbook_1.Sheet = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "sheet", "sheets");
            return {
                id: xmlDoc.attrString(elem, "r:id"),
                name: xmlDoc.attrString(elem, "name"),
                sheetId: xmlDoc.attrInt(elem, "sheetId"),
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
    Workbook_1.Sheets = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "sheets", "workbook");
            var sheetElems = xmlDoc.queryAllChilds(elem, "sheet");
            return {
                sheets: xmlDoc.readMulti(Workbook_1.Sheet.read, sheetElems),
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("sheets");
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Workbook_1.Sheet.write, inst.sheets));
            return elem;
        }
    };
})(Workbook || (Workbook = {}));
module.exports = Workbook;
