"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SheetViews = exports.SheetView = exports.SheetFormatProperties = exports.SheetDimension = exports.SheetData = exports.Selection = exports.Row = exports.PageSetup = exports.PageMargins = exports.OddHeader = exports.OddFooter = exports.LegacyDrawing = exports.InlineString = exports.HeaderFooter = exports.FirstHeader = exports.FirstFooter = exports.EvenHeader = exports.EvenFooter = exports.Drawing = exports.Columns = exports.Column = exports.CellValue = exports.CellFormula = exports.Cell = exports.Worksheet = void 0;
var RichTextRun_1 = require("../types/RichTextRun");
var StringElement_1 = require("../types/StringElement");
var Text_1 = require("../types/Text");
exports.Worksheet = {
    read: function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "worksheet", "root element of SpreadsheetML Worksheet part");
        var colsElems = xmlDoc.queryAllChilds(elem, "cols");
        var dimensionElem = xmlDoc.queryOneChild(elem, "dimension", false);
        var drawingElem = xmlDoc.queryOneChild(elem, "drawing", false);
        var headerFooterElem = xmlDoc.queryOneChild(elem, "headerFooter", false);
        var legacyDrawingElem = xmlDoc.queryOneChild(elem, "legacyDrawing", false);
        var pageMarginElem = xmlDoc.queryOneChild(elem, "pageMargins", false);
        var pageSetupElem = xmlDoc.queryOneChild(elem, "pageSetup", false);
        var sheetDataElem = xmlDoc.queryOneChild(elem, "sheetData");
        var sheetFormatPrElem = xmlDoc.queryOneChild(elem, "sheetFormatPr", false);
        var sheetViewsElem = xmlDoc.queryOneChild(elem, "sheetViews", false);
        return {
            cols: xmlDoc.readMulti(exports.Columns.read, colsElems),
            dimension: dimensionElem ? exports.SheetDimension.read(xmlDoc, dimensionElem) : null,
            drawing: drawingElem ? exports.Drawing.read(xmlDoc, drawingElem) : null,
            headerFooter: headerFooterElem ? exports.HeaderFooter.read(xmlDoc, headerFooterElem) : null,
            legacyDrawing: legacyDrawingElem ? exports.LegacyDrawing.read(xmlDoc, legacyDrawingElem) : null,
            pageMargins: pageMarginElem ? exports.PageMargins.read(xmlDoc, pageMarginElem) : null,
            pageSetup: pageSetupElem ? exports.PageSetup.read(xmlDoc, pageSetupElem) : null,
            sheetData: exports.SheetData.read(xmlDoc, sheetDataElem),
            sheetFormatPr: sheetFormatPrElem ? exports.SheetFormatProperties.read(xmlDoc, sheetFormatPrElem) : null,
            sheetViews: sheetViewsElem ? exports.SheetViews.read(xmlDoc, sheetViewsElem) : null,
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("worksheet");
        if (inst.dimension) {
            elem.appendChild(exports.SheetDimension.write(xmlDoc, inst.dimension));
        }
        if (inst.sheetViews) {
            elem.appendChild(exports.SheetViews.write(xmlDoc, inst.sheetViews));
        }
        if (inst.sheetFormatPr) {
            elem.appendChild(exports.SheetFormatProperties.write(xmlDoc, inst.sheetFormatPr));
        }
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(exports.Columns.write, inst.cols));
        elem.appendChild(exports.SheetData.write(xmlDoc, inst.sheetData));
        if (inst.pageMargins) {
            elem.appendChild(exports.PageMargins.write(xmlDoc, inst.pageMargins));
        }
        if (inst.pageSetup) {
            elem.appendChild(exports.PageSetup.write(xmlDoc, inst.pageSetup));
        }
        if (inst.headerFooter) {
            elem.appendChild(exports.HeaderFooter.write(xmlDoc, inst.headerFooter));
        }
        if (inst.drawing) {
            elem.appendChild(exports.Drawing.write(xmlDoc, inst.drawing));
        }
        if (inst.legacyDrawing) {
            elem.appendChild(exports.LegacyDrawing.write(xmlDoc, inst.legacyDrawing));
        }
        return elem;
    }
};
exports.Cell = {
    read: function (xmlDoc, elem) {
        var _a;
        xmlDoc.validator.expectNode(elem, "c", "row");
        var fElem = xmlDoc.queryOneChild(elem, "f", false);
        var isElem = xmlDoc.queryOneChild(elem, "is", false);
        var vElem = xmlDoc.queryOneChild(elem, "v", false);
        return {
            f: fElem ? exports.CellFormula.read(xmlDoc, fElem) : null,
            is: isElem ? exports.InlineString.read(xmlDoc, isElem) : null,
            v: vElem ? exports.CellValue.read(xmlDoc, vElem) : null,
            cm: xmlDoc.attrInt(elem, "cm"),
            ph: xmlDoc.attrBool(elem, "ph"),
            r: (_a = xmlDoc.attrString(elem, "r")) !== null && _a !== void 0 ? _a : "",
            s: xmlDoc.attrInt(elem, "s"),
            t: xmlDoc.attrString(elem, "t"),
            vm: xmlDoc.attrInt(elem, "vm"),
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("c")
            .attrInt("cm", inst.cm, true)
            .attrBool("ph", inst.ph, true)
            .attrString("r", inst.r, true)
            .attrInt("s", inst.s, true)
            .attrString("t", inst.t, true)
            .attrInt("vm", inst.vm, true)
            .element;
        if (inst.f) {
            elem.appendChild(exports.CellFormula.write(xmlDoc, inst.f));
        }
        if (inst.is) {
            elem.appendChild(exports.InlineString.write(xmlDoc, inst.is));
        }
        if (inst.v) {
            elem.appendChild(exports.CellValue.write(xmlDoc, inst.v));
        }
        return elem;
    }
};
exports.CellFormula = {
    read: function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "f", "c, nc, oc");
        return {
            content: elem.textContent,
            ref: xmlDoc.attrString(elem, "ref"),
            si: xmlDoc.attrInt(elem, "si"),
            t: xmlDoc.attrString(elem, "t"),
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("f")
            .attrString("t", inst.t, true)
            .attrString("ref", inst.ref, true)
            .attrInt("si", inst.si, true)
            .element;
        elem.textContent = inst.content;
        return elem;
    }
};
exports.CellValue = {
    read: function (xmlDoc, elem) {
        return StringElement_1.StringElement.read(xmlDoc, elem, "v", "c, cell, nc, oc, tp");
    },
    write: function (xmlDoc, inst) {
        return StringElement_1.StringElement.write(xmlDoc, inst, "v");
    }
};
exports.Column = {
    read: function (xmlDoc, elem) {
        var _a, _b;
        xmlDoc.validator.expectNode(elem, "col", "cols");
        return {
            bestFit: xmlDoc.attrBool(elem, "bestFit"),
            collapsed: xmlDoc.attrBool(elem, "collapsed"),
            customWidth: xmlDoc.attrBool(elem, "customWidth"),
            hidden: xmlDoc.attrBool(elem, "hidden"),
            max: (_a = xmlDoc.attrInt(elem, "max")) !== null && _a !== void 0 ? _a : 0,
            min: (_b = xmlDoc.attrInt(elem, "min")) !== null && _b !== void 0 ? _b : 0,
            outlineLevel: xmlDoc.attrInt(elem, "outlineLevel"),
            phonetic: xmlDoc.attrBool(elem, "phonetic"),
            style: xmlDoc.attrInt(elem, "style"),
            width: xmlDoc.attrFloat(elem, "width"),
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("col")
            .attrInt("min", inst.min)
            .attrInt("max", inst.max)
            .attrFloat("width", inst.width, true)
            .attrInt("style", inst.style, true)
            .attrInt("outlineLevel", inst.outlineLevel, true)
            .attrBool("customWidth", inst.customWidth, true, "1", "0")
            .attrBool("bestFit", inst.bestFit, true, "1", "0")
            .attrBool("collapsed", inst.collapsed, true, "1", "0")
            .attrBool("hidden", inst.hidden, true, "1", "0")
            .attrBool("phonetic", inst.phonetic, true, "1", "0")
            .element;
        return elem;
    }
};
exports.Columns = {
    read: function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "cols", "worksheet");
        var colElems = xmlDoc.queryAllChilds(elem, "col");
        return {
            cols: xmlDoc.readMulti(exports.Column.read, colElems),
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("cols");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(exports.Column.write, inst.cols));
        return elem;
    }
};
exports.Drawing = {
    read: function (xmlDoc, elem) {
        var _a;
        xmlDoc.validator.expectNode(elem, "drawing", "chartsheet, dialogsheet, worksheet");
        return {
            rid: (_a = xmlDoc.attrString(elem, "r:id")) !== null && _a !== void 0 ? _a : "",
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("drawing")
            .attr("r:id", inst.rid)
            .element;
        return elem;
    }
};
exports.EvenFooter = {
    read: function (xmlDoc, elem) {
        return StringElement_1.StringElement.read(xmlDoc, elem, "evenfooter", "headerFooter");
    },
    write: function (xmlDoc, inst) {
        return StringElement_1.StringElement.write(xmlDoc, inst, "evenFooter");
    }
};
exports.EvenHeader = {
    read: function (xmlDoc, elem) {
        return StringElement_1.StringElement.read(xmlDoc, elem, "evenHeader", "headerFooter");
    },
    write: function (xmlDoc, inst) {
        return StringElement_1.StringElement.write(xmlDoc, inst, "evenHeader");
    }
};
exports.FirstFooter = {
    read: function (xmlDoc, elem) {
        return StringElement_1.StringElement.read(xmlDoc, elem, "firstFooter", "headerFooter");
    },
    write: function (xmlDoc, inst) {
        return StringElement_1.StringElement.write(xmlDoc, inst, "firstFooter");
    }
};
exports.FirstHeader = {
    read: function (xmlDoc, elem) {
        return StringElement_1.StringElement.read(xmlDoc, elem, "firstHeader", "headerFooter");
    },
    write: function (xmlDoc, inst) {
        return StringElement_1.StringElement.write(xmlDoc, inst, "firstHeader");
    }
};
exports.HeaderFooter = {
    read: function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "headerFooter", "chartsheet, customSheetView, customSheetView, dialogsheet, worksheet");
        var evenHeaderElem = xmlDoc.queryOneChild(elem, "evenHeader", false);
        var evenFooterElem = xmlDoc.queryOneChild(elem, "evenFooter", false);
        var firstHeaderElem = xmlDoc.queryOneChild(elem, "firstHeader", false);
        var firstFooterElem = xmlDoc.queryOneChild(elem, "firstFooter", false);
        var oddHeaderElem = xmlDoc.queryOneChild(elem, "oddHeader", false);
        var oddFooterElem = xmlDoc.queryOneChild(elem, "oddFooter", false);
        return {
            evenHeader: evenHeaderElem ? exports.EvenHeader.read(xmlDoc, evenHeaderElem) : null,
            evenFooter: evenFooterElem ? exports.EvenFooter.read(xmlDoc, evenFooterElem) : null,
            firstHeader: firstHeaderElem ? exports.FirstHeader.read(xmlDoc, firstHeaderElem) : null,
            firstFooter: firstFooterElem ? exports.FirstFooter.read(xmlDoc, firstFooterElem) : null,
            oddHeader: oddHeaderElem ? exports.OddHeader.read(xmlDoc, oddHeaderElem) : null,
            oddFooter: oddFooterElem ? exports.OddFooter.read(xmlDoc, oddFooterElem) : null,
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("headerFooter");
        if (inst.evenHeader) {
            elem.appendChild(exports.EvenHeader.write(xmlDoc, inst.evenHeader));
        }
        if (inst.evenFooter) {
            elem.appendChild(exports.EvenFooter.write(xmlDoc, inst.evenFooter));
        }
        if (inst.firstHeader) {
            elem.appendChild(exports.FirstHeader.write(xmlDoc, inst.firstHeader));
        }
        if (inst.firstFooter) {
            elem.appendChild(exports.FirstFooter.write(xmlDoc, inst.firstFooter));
        }
        if (inst.oddHeader) {
            elem.appendChild(exports.OddHeader.write(xmlDoc, inst.oddHeader));
        }
        if (inst.oddFooter) {
            elem.appendChild(exports.OddFooter.write(xmlDoc, inst.oddFooter));
        }
        return elem;
    }
};
exports.InlineString = {
    read: function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "is", "c, nc, oc");
        var rElems = xmlDoc.queryAllChilds(elem, "r");
        var tElem = xmlDoc.queryOneChild(elem, "t", false);
        return {
            rs: xmlDoc.readMulti(RichTextRun_1.RichTextRun.read, rElems),
            t: tElem ? Text_1.Text.read(xmlDoc, tElem) : null,
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("is");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(RichTextRun_1.RichTextRun.write, inst.rs));
        if (inst.t) {
            elem.appendChild(Text_1.Text.write(xmlDoc, inst.t));
        }
        return elem;
    }
};
exports.LegacyDrawing = {
    read: function (xmlDoc, elem) {
        var _a;
        xmlDoc.validator.expectNode(elem, "legacyDrawing", "chartsheet, dialogsheet, worksheet");
        return {
            rid: (_a = xmlDoc.attrString(elem, "r:id")) !== null && _a !== void 0 ? _a : "",
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("legacyDrawing")
            .attrString("r:id", inst.rid)
            .element;
        return elem;
    }
};
exports.OddFooter = {
    read: function (xmlDoc, elem) {
        return StringElement_1.StringElement.read(xmlDoc, elem, "oddFooter", "headerFooter");
    },
    write: function (xmlDoc, inst) {
        return StringElement_1.StringElement.write(xmlDoc, inst, "oddFooter");
    }
};
exports.OddHeader = {
    read: function (xmlDoc, elem) {
        return StringElement_1.StringElement.read(xmlDoc, elem, "oddHeader", "headerFooter");
    },
    write: function (xmlDoc, inst) {
        return StringElement_1.StringElement.write(xmlDoc, inst, "oddHeader");
    }
};
exports.PageMargins = {
    read: function (xmlDoc, elem) {
        var _a, _b, _c, _d, _e, _f;
        xmlDoc.validator.expectNode(elem, "pageMargins", "chartsheet, customSheetView, customSheetView, dialogsheet, worksheet");
        return {
            bottom: (_a = xmlDoc.attrFloat(elem, "bottom")) !== null && _a !== void 0 ? _a : 0,
            footer: (_b = xmlDoc.attrFloat(elem, "footer")) !== null && _b !== void 0 ? _b : 0,
            header: (_c = xmlDoc.attrFloat(elem, "header")) !== null && _c !== void 0 ? _c : 0,
            left: (_d = xmlDoc.attrFloat(elem, "left")) !== null && _d !== void 0 ? _d : 0,
            right: (_e = xmlDoc.attrFloat(elem, "right")) !== null && _e !== void 0 ? _e : 0,
            top: (_f = xmlDoc.attrFloat(elem, "top")) !== null && _f !== void 0 ? _f : 0,
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("pageMargins")
            .attrFloat("left", inst.left)
            .attrFloat("right", inst.right)
            .attrFloat("top", inst.top)
            .attrFloat("bottom", inst.bottom)
            .attrFloat("header", inst.header)
            .attrFloat("footer", inst.footer)
            .element;
        return elem;
    }
};
exports.PageSetup = {
    // TODO incomplete
    read: function (xmlDoc, elem) {
        var _a;
        xmlDoc.validator.expectNode(elem, "pageSetup", "customSheetView, dialogsheet, worksheet");
        return {
            orientation: xmlDoc.attrString(elem, "orientation"),
            rid: (_a = xmlDoc.attrString(elem, "r:id")) !== null && _a !== void 0 ? _a : "",
            scale: xmlDoc.attrInt(elem, "scale"),
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("pageSetup")
            .attrInt("scale", inst.scale, true)
            .attrString("orientation", inst.orientation, true)
            .attrString("r:id", inst.rid, true)
            .element;
        return elem;
    }
};
exports.Row = {
    read: function (xmlDoc, elem) {
        var _a, _b;
        xmlDoc.validator.expectNode(elem, "row", "sheetData");
        var cElems = xmlDoc.queryAllChilds(elem, "c");
        return {
            cs: xmlDoc.readMulti(exports.Cell.read, cElems),
            collapsed: xmlDoc.attrBool(elem, "collapsed"),
            customFormat: xmlDoc.attrBool(elem, "customFormat"),
            customHeight: xmlDoc.attrBool(elem, "customHeight"),
            hidden: xmlDoc.attrBool(elem, "hidden"),
            ht: xmlDoc.attrFloat(elem, "ht"),
            outlineLevel: xmlDoc.attrInt(elem, "outlineLevel"),
            ph: xmlDoc.attrBool(elem, "ph"),
            r: (_a = xmlDoc.attrInt(elem, "r")) !== null && _a !== void 0 ? _a : 0,
            s: xmlDoc.attrInt(elem, "s"),
            spans: xmlDoc.attrString(elem, "spans"),
            thickBot: xmlDoc.attrBool(elem, "thickBot"),
            thickTop: xmlDoc.attrBool(elem, "thickTop"),
            dyDescent: (_b = xmlDoc.attrFloat(elem, "x14ac:dyDescent")) !== null && _b !== void 0 ? _b : 0,
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("row")
            .attrInt("r", inst.r, true)
            .attrString("spans", inst.spans, true)
            .attrInt("s", inst.s, true)
            .attrBool("customFormat", inst.customFormat, true, "1", "0")
            .attrBool("customHeight", inst.customHeight, true, "1", "0")
            .attrFloat("ht", inst.ht, true)
            .attrBool("thickBot", inst.thickBot, true, "1", "0")
            .attrBool("thickTop", inst.thickTop, true, "1", "0")
            .attrBool("collapsed", inst.collapsed, true, "1", "0")
            .attrBool("hidden", inst.hidden, true, "1", "0")
            .attrInt("outlineLevel", inst.outlineLevel, true)
            .attrBool("ph", inst.ph, true, "1", "0")
            .attrFloat("x14ac:dyDescent", inst.dyDescent, true)
            .element;
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(exports.Cell.write, inst.cs));
        return elem;
    }
};
exports.Selection = {
    read: function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "selection", "customSheetView, sheetView");
        return {
            activeCell: xmlDoc.attrString(elem, "activeCell"),
            activeCellId: xmlDoc.attrInt(elem, "activeCellId"),
            sqref: xmlDoc.attrString(elem, "sqref")
        };
    },
    write: function (xmlDoc, inst) {
        return xmlDoc.domBldr.create("selection")
            .attrString("activeCell", inst.activeCell, true)
            .attrInt("activeCellId", inst.activeCellId, true)
            .attrString("sqref", inst.sqref, true)
            .element;
    }
};
exports.SheetData = {
    read: function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "sheetData", "worksheet");
        var rowElems = xmlDoc.queryAllChilds(elem, "row");
        return {
            rows: xmlDoc.readMulti(exports.Row.read, rowElems),
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("sheetData");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(exports.Row.write, inst.rows));
        return elem;
    }
};
exports.SheetDimension = {
    read: function (xmlDoc, elem) {
        var _a;
        xmlDoc.validator.expectNode(elem, "dimension", "worksheet");
        return {
            ref: (_a = xmlDoc.attrString(elem, "ref")) !== null && _a !== void 0 ? _a : ""
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("dimension")
            .attrString("ref", inst.ref)
            .element;
        return elem;
    }
};
exports.SheetFormatProperties = {
    read: function (xmlDoc, elem) {
        var _a, _b;
        xmlDoc.validator.expectNode(elem, "sheetFormatPr", "dialogsheet, worksheet");
        return {
            defaultColWidth: xmlDoc.attrFloat(elem, "defaultColWidth"),
            defaultRowHeight: (_a = xmlDoc.attrFloat(elem, "defaultRowHeight")) !== null && _a !== void 0 ? _a : 0,
            dyDescent: (_b = xmlDoc.attrFloat(elem, "x14ac:dyDescent")) !== null && _b !== void 0 ? _b : 0,
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("sheetFormatPr")
            .attrFloat("defaultColWidth", inst.defaultColWidth, true)
            .attrFloat("defaultRowHeight", inst.defaultRowHeight)
            .attrFloat("x14ac:dyDescent", inst.dyDescent, true)
            .element;
        return elem;
    }
};
exports.SheetView = {
    read: function (xmlDoc, elem) {
        var _a;
        xmlDoc.validator.expectNode(elem, "sheetView", "sheetViews");
        var selectionElems = xmlDoc.queryAllChilds(elem, "selection");
        return {
            selections: xmlDoc.readMulti(exports.Selection.read, selectionElems),
            tabSelected: xmlDoc.attrBool(elem, "tabSelected"),
            view: xmlDoc.attrString(elem, "view"),
            topLeftCell: xmlDoc.attrString(elem, "topLeftCell"),
            workbookViewId: (_a = xmlDoc.attrInt(elem, "workbookViewId")) !== null && _a !== void 0 ? _a : 0,
            zoomScale: xmlDoc.attrInt(elem, "zoomScale"),
            zoomScaleNormal: xmlDoc.attrInt(elem, "zoomScaleNormal"),
            zoomScalePageLayoutView: xmlDoc.attrInt(elem, "zoomScalePageLayoutView"),
            zoomScaleSheetLayoutView: xmlDoc.attrInt(elem, "zoomScaleSheetLayoutView"),
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("sheetView")
            .attrBool("tabSelected", inst.tabSelected, true, "1", "0")
            .attrString("view", inst.view, true)
            .attrInt("zoomScale", inst.zoomScale, true)
            .attrInt("zoomScaleNormal", inst.zoomScaleNormal, true)
            .attrString("topLeftCell", inst.topLeftCell, true)
            .attrInt("zoomScaleSheetLayoutView", inst.zoomScaleSheetLayoutView, true)
            .attrInt("zoomScalePageLayoutView", inst.zoomScalePageLayoutView, true)
            .attrInt("workbookViewId", inst.workbookViewId)
            .element;
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(exports.Selection.write, inst.selections));
        return elem;
    }
};
exports.SheetViews = {
    read: function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "sheetViews", "dialogsheet, worksheet");
        var sheetViewElems = xmlDoc.queryAllChilds(elem, "sheetView");
        return {
            sheetViews: xmlDoc.readMulti(exports.SheetView.read, sheetViewElems),
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("sheetViews");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(exports.SheetView.write, inst.sheetViews));
        return elem;
    }
};
