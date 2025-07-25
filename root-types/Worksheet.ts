import { RichTextRun } from "../types/RichTextRun";
import { StringElement } from "../types/StringElement";
import { Text } from "../types/Text";

export const Worksheet: OpenXmlIo.ReadWrite<OpenXml.Worksheet> = {
    read(xmlDoc, elem) {
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
            cols: xmlDoc.readMulti(Columns.read, colsElems),
            dimension: dimensionElem ? SheetDimension.read(xmlDoc, dimensionElem) : null,
            drawing: drawingElem ? Drawing.read(xmlDoc, drawingElem) : null,
            headerFooter: headerFooterElem ? HeaderFooter.read(xmlDoc, headerFooterElem) : null,
            legacyDrawing: legacyDrawingElem ? LegacyDrawing.read(xmlDoc, legacyDrawingElem) : null,
            pageMargins: pageMarginElem ? PageMargins.read(xmlDoc, pageMarginElem) : null,
            pageSetup: pageSetupElem ? PageSetup.read(xmlDoc, pageSetupElem) : null,
            sheetData: SheetData.read(xmlDoc, sheetDataElem),
            sheetFormatPr: sheetFormatPrElem ? SheetFormatProperties.read(xmlDoc, sheetFormatPrElem) : null,
            sheetViews: sheetViewsElem ? SheetViews.read(xmlDoc, sheetViewsElem) : null,
        };
    },

    write(xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("worksheet");

        if (inst.dimension) { elem.appendChild(SheetDimension.write(xmlDoc, inst.dimension)); }
        if (inst.sheetViews) { elem.appendChild(SheetViews.write(xmlDoc, inst.sheetViews)); }
        if (inst.sheetFormatPr) { elem.appendChild(SheetFormatProperties.write(xmlDoc, inst.sheetFormatPr)); }
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Columns.write, inst.cols));
        elem.appendChild(SheetData.write(xmlDoc, inst.sheetData));
        if (inst.pageMargins) { elem.appendChild(PageMargins.write(xmlDoc, inst.pageMargins)); }
        if (inst.pageSetup) { elem.appendChild(PageSetup.write(xmlDoc, inst.pageSetup)); }
        if (inst.headerFooter) { elem.appendChild(HeaderFooter.write(xmlDoc, inst.headerFooter)); }
        if (inst.drawing) { elem.appendChild(Drawing.write(xmlDoc, inst.drawing)); }
        if (inst.legacyDrawing) { elem.appendChild(LegacyDrawing.write(xmlDoc, inst.legacyDrawing)); }

        return elem;
    }
};

export const Cell: OpenXmlIo.ReadWrite<OpenXml.Cell> = {
    read(xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "c", "row");
        var fElem = xmlDoc.queryOneChild(elem, "f", false);
        var isElem = xmlDoc.queryOneChild(elem, "is", false);
        var vElem = xmlDoc.queryOneChild(elem, "v", false);

        return {
            f: fElem ? CellFormula.read(xmlDoc, fElem) : null,
            is: isElem ? InlineString.read(xmlDoc, isElem) : null,
            v: vElem ? CellValue.read(xmlDoc, vElem) : null,
            cm: xmlDoc.attrInt(elem, "cm"),
            ph: xmlDoc.attrBool(elem, "ph"),
            r: xmlDoc.attrString(elem, "r") ?? "",
            s: xmlDoc.attrInt(elem, "s"),
            t: <OpenXml.ST_CellType | null>xmlDoc.attrString(elem, "t"),
            vm: xmlDoc.attrInt(elem, "vm"),
        };
    },

    write(xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("c")
            .attrInt("cm", inst.cm, true)
            .attrBool("ph", inst.ph, true)
            .attrString("r", inst.r, true)
            .attrInt("s", inst.s, true)
            .attrString("t", inst.t, true)
            .attrInt("vm", inst.vm, true)
            .element;
        if (inst.f) { elem.appendChild(CellFormula.write(xmlDoc, inst.f)); }
        if (inst.is) { elem.appendChild(InlineString.write(xmlDoc, inst.is)); }
        if (inst.v) { elem.appendChild(CellValue.write(xmlDoc, inst.v)); }

        return elem;
    }
};

export const CellFormula: OpenXmlIo.ReadWrite<OpenXml.CellFormula> = {
    read(xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "f", "c, nc, oc");
        return {
            content: <string>elem.textContent, // only null on document or Doctype
            ref: xmlDoc.attrString(elem, "ref"),
            si: xmlDoc.attrInt(elem, "si"),
            t: <OpenXml.ST_CellFormulaType | null>xmlDoc.attrString(elem, "t"),
        };
    },

    write(xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("f")
            .attrString("t", inst.t, true)
            .attrString("ref", inst.ref, true)
            .attrInt("si", inst.si, true)
            .element;
        elem.textContent = inst.content;
        return elem;
    }
};

export const CellValue: OpenXmlIo.ReadWrite<OpenXml.CellValue> = {
    read(xmlDoc, elem) {
        return StringElement.read(xmlDoc, elem, "v", "c, cell, nc, oc, tp");
    },

    write(xmlDoc, inst) {
        return StringElement.write(xmlDoc, inst, "v");
    }
};

export const Column: OpenXmlIo.ReadWrite<OpenXml.Column> = {
    read(xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "col", "cols");
        return {
            bestFit: xmlDoc.attrBool(elem, "bestFit"),
            collapsed: xmlDoc.attrBool(elem, "collapsed"),
            customWidth: xmlDoc.attrBool(elem, "customWidth"),
            hidden: xmlDoc.attrBool(elem, "hidden"),
            max: xmlDoc.attrInt(elem, "max") ?? 0,
            min: xmlDoc.attrInt(elem, "min") ?? 0,
            outlineLevel: xmlDoc.attrInt(elem, "outlineLevel"),
            phonetic: xmlDoc.attrBool(elem, "phonetic"),
            style: xmlDoc.attrInt(elem, "style"),
            width: xmlDoc.attrFloat(elem, "width"),
        };
    },

    write(xmlDoc, inst) {
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

export const Columns: OpenXmlIo.ReadWrite<OpenXml.Columns> = {
    read(xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "cols", "worksheet");
        var colElems = xmlDoc.queryAllChilds(elem, "col");
        return {
            cols: xmlDoc.readMulti(Column.read, colElems),
        };
    },

    write(xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("cols");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Column.write, inst.cols));
        return elem;
    }
};

export const Drawing: OpenXmlIo.ReadWrite<OpenXml.Drawing> = {
    read(xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "drawing", "chartsheet, dialogsheet, worksheet");
        return {
            rid: xmlDoc.attrString(elem, "r:id") ?? "",
        };
    },

    write(xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("drawing")
            .attr("r:id", inst.rid)
            .element;
        return elem;
    }
};

export const EvenFooter: OpenXmlIo.ReadWrite<OpenXml.EvenFooter> = {
    read(xmlDoc, elem) {
        return StringElement.read(xmlDoc, elem, "evenfooter", "headerFooter");
    },

    write(xmlDoc, inst) {
        return StringElement.write(xmlDoc, inst, "evenFooter");
    }
};

export const EvenHeader: OpenXmlIo.ReadWrite<OpenXml.EvenHeader> = {
    read(xmlDoc, elem) {
        return StringElement.read(xmlDoc, elem, "evenHeader", "headerFooter");
    },

    write(xmlDoc, inst) {
        return StringElement.write(xmlDoc, inst, "evenHeader");
    }
};

export const FirstFooter: OpenXmlIo.ReadWrite<OpenXml.FirstFooter> = {
    read(xmlDoc, elem) {
        return StringElement.read(xmlDoc, elem, "firstFooter", "headerFooter");
    },

    write(xmlDoc, inst) {
        return StringElement.write(xmlDoc, inst, "firstFooter");
    }
};

export const FirstHeader: OpenXmlIo.ReadWrite<OpenXml.FirstHeader> = {
    read(xmlDoc, elem) {
        return StringElement.read(xmlDoc, elem, "firstHeader", "headerFooter");
    },

    write(xmlDoc, inst) {
        return StringElement.write(xmlDoc, inst, "firstHeader");
    }
};

export const HeaderFooter: OpenXmlIo.ReadWrite<OpenXml.HeaderFooter> = {
    read(xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "headerFooter", "chartsheet, customSheetView, customSheetView, dialogsheet, worksheet");
        var evenHeaderElem = xmlDoc.queryOneChild(elem, "evenHeader", false);
        var evenFooterElem = xmlDoc.queryOneChild(elem, "evenFooter", false);
        var firstHeaderElem = xmlDoc.queryOneChild(elem, "firstHeader", false);
        var firstFooterElem = xmlDoc.queryOneChild(elem, "firstFooter", false);
        var oddHeaderElem = xmlDoc.queryOneChild(elem, "oddHeader", false);
        var oddFooterElem = xmlDoc.queryOneChild(elem, "oddFooter", false);

        return {
            evenHeader: evenHeaderElem ? EvenHeader.read(xmlDoc, evenHeaderElem) : null,
            evenFooter: evenFooterElem ? EvenFooter.read(xmlDoc, evenFooterElem) : null,
            firstHeader: firstHeaderElem ? FirstHeader.read(xmlDoc, firstHeaderElem) : null,
            firstFooter: firstFooterElem ? FirstFooter.read(xmlDoc, firstFooterElem) : null,
            oddHeader: oddHeaderElem ? OddHeader.read(xmlDoc, oddHeaderElem) : null,
            oddFooter: oddFooterElem ? OddFooter.read(xmlDoc, oddFooterElem) : null,
        };
    },

    write(xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("headerFooter");
        if (inst.evenHeader) { elem.appendChild(EvenHeader.write(xmlDoc, inst.evenHeader)); }
        if (inst.evenFooter) { elem.appendChild(EvenFooter.write(xmlDoc, inst.evenFooter)); }
        if (inst.firstHeader) { elem.appendChild(FirstHeader.write(xmlDoc, inst.firstHeader)); }
        if (inst.firstFooter) { elem.appendChild(FirstFooter.write(xmlDoc, inst.firstFooter)); }
        if (inst.oddHeader) { elem.appendChild(OddHeader.write(xmlDoc, inst.oddHeader)); }
        if (inst.oddFooter) { elem.appendChild(OddFooter.write(xmlDoc, inst.oddFooter)); }
        return elem;
    }
};

export const InlineString: OpenXmlIo.ReadWrite<OpenXml.InlineString> = {
    read(xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "is", "c, nc, oc");
        var rElems = xmlDoc.queryAllChilds(elem, "r");
        var tElem = xmlDoc.queryOneChild(elem, "t", false);

        return {
            rs: xmlDoc.readMulti(RichTextRun.read, rElems),
            t: tElem ? Text.read(xmlDoc, tElem) : null,
        };
    },

    write(xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("is");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(RichTextRun.write, inst.rs));
        if (inst.t) { elem.appendChild(Text.write(xmlDoc, inst.t)); }
        return elem;
    }
};

export const LegacyDrawing: OpenXmlIo.ReadWrite<OpenXml.LegacyDrawing> = {
    read(xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "legacyDrawing", "chartsheet, dialogsheet, worksheet");
        return {
            rid: xmlDoc.attrString(elem, "r:id") ?? "",
        };
    },

    write(xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("legacyDrawing")
            .attrString("r:id", inst.rid)
            .element;
        return elem;
    }
};

export const OddFooter: OpenXmlIo.ReadWrite<OpenXml.OddFooter> = {
    read(xmlDoc, elem) {
        return StringElement.read(xmlDoc, elem, "oddFooter", "headerFooter");
    },

    write(xmlDoc, inst) {
        return StringElement.write(xmlDoc, inst, "oddFooter");
    }
};

export const OddHeader: OpenXmlIo.ReadWrite<OpenXml.OddHeader> = {
    read(xmlDoc, elem) {
        return StringElement.read(xmlDoc, elem, "oddHeader", "headerFooter");
    },

    write(xmlDoc, inst) {
        return StringElement.write(xmlDoc, inst, "oddHeader");
    }
};

export const PageMargins: OpenXmlIo.ReadWrite<OpenXml.PageMargins> = {
    read(xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "pageMargins", "chartsheet, customSheetView, customSheetView, dialogsheet, worksheet");
        return {
            bottom: xmlDoc.attrFloat(elem, "bottom") ?? 0,
            footer: xmlDoc.attrFloat(elem, "footer") ?? 0,
            header: xmlDoc.attrFloat(elem, "header") ?? 0,
            left: xmlDoc.attrFloat(elem, "left") ?? 0,
            right: xmlDoc.attrFloat(elem, "right") ?? 0,
            top: xmlDoc.attrFloat(elem, "top") ?? 0,
        };
    },

    write(xmlDoc, inst) {
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

export const PageSetup: OpenXmlIo.ReadWrite<OpenXml.PageSetup> = {
    // TODO incomplete
    read(xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "pageSetup", "customSheetView, dialogsheet, worksheet");
        return {
            orientation: <OpenXml.ST_Orientation | null>xmlDoc.attrString(elem, "orientation"),
            rid: xmlDoc.attrString(elem, "r:id") ?? "",
            scale: xmlDoc.attrInt(elem, "scale"),
        };
    },

    write(xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("pageSetup")
            .attrInt("scale", inst.scale, true)
            .attrString("orientation", inst.orientation, true)
            .attrString("r:id", inst.rid, true)
            .element;
        return elem;
    }
};

export const Row: OpenXmlIo.ReadWrite<OpenXml.Row> = {
    read(xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "row", "sheetData");
        var cElems = xmlDoc.queryAllChilds(elem, "c");
        return {
            cs: xmlDoc.readMulti(Cell.read, cElems),
            collapsed: xmlDoc.attrBool(elem, "collapsed"),
            customFormat: xmlDoc.attrBool(elem, "customFormat"),
            customHeight: xmlDoc.attrBool(elem, "customHeight"),
            hidden: xmlDoc.attrBool(elem, "hidden"),
            ht: xmlDoc.attrFloat(elem, "ht"),
            outlineLevel: xmlDoc.attrInt(elem, "outlineLevel"),
            ph: xmlDoc.attrBool(elem, "ph"),
            r: xmlDoc.attrInt(elem, "r") ?? 0,
            s: xmlDoc.attrInt(elem, "s"),
            spans: xmlDoc.attrString(elem, "spans"),
            thickBot: xmlDoc.attrBool(elem, "thickBot"),
            thickTop: xmlDoc.attrBool(elem, "thickTop"),
            dyDescent: xmlDoc.attrFloat(elem, "x14ac:dyDescent") ?? 0,
        };
    },

    write(xmlDoc, inst) {
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
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Cell.write, inst.cs));

        return elem;
    }
};

export const Selection: OpenXmlIo.ReadWrite<OpenXml.Selection> = {
    read(xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "selection", "customSheetView, sheetView");
        return {
            activeCell: xmlDoc.attrString(elem, "activeCell"),
            activeCellId: xmlDoc.attrInt(elem, "activeCellId"),
            sqref: xmlDoc.attrString(elem, "sqref")
        };
    },

    write(xmlDoc, inst) {
        return xmlDoc.domBldr.create("selection")
            .attrString("activeCell", inst.activeCell, true)
            .attrInt("activeCellId", inst.activeCellId, true)
            .attrString("sqref", inst.sqref, true)
            .element;
    }
};

export const SheetData: OpenXmlIo.ReadWrite<OpenXml.SheetData> = {
    read(xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "sheetData", "worksheet");
        var rowElems = xmlDoc.queryAllChilds(elem, "row");
        return {
            rows: xmlDoc.readMulti(Row.read, rowElems),
        };
    },

    write(xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("sheetData");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Row.write, inst.rows));
        return elem;
    }
};

export const SheetDimension: OpenXmlIo.ReadWrite<OpenXml.SheetDimension> = {
    read(xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "dimension", "worksheet");
        return {
            ref: xmlDoc.attrString(elem, "ref") ?? ""
        };
    },

    write(xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("dimension")
            .attrString("ref", inst.ref)
            .element;
        return elem;
    }
};

export const SheetFormatProperties: OpenXmlIo.ReadWrite<OpenXml.SheetFormatProperties> = {
    read(xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "sheetFormatPr", "dialogsheet, worksheet");
        return {
            defaultColWidth: xmlDoc.attrFloat(elem, "defaultColWidth"),
            defaultRowHeight: xmlDoc.attrFloat(elem, "defaultRowHeight") ?? 0,
            dyDescent: xmlDoc.attrFloat(elem, "x14ac:dyDescent") ?? 0,
        };
    },

    write(xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("sheetFormatPr")
            .attrFloat("defaultColWidth", inst.defaultColWidth, true)
            .attrFloat("defaultRowHeight", inst.defaultRowHeight)
            .attrFloat("x14ac:dyDescent", inst.dyDescent, true)
            .element;
        return elem;
    }
};

export const SheetView: OpenXmlIo.ReadWrite<OpenXml.SheetView> = {
    read(xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "sheetView", "sheetViews");
        var selectionElems = xmlDoc.queryAllChilds(elem, "selection");

        return {
            selections: xmlDoc.readMulti(Selection.read, selectionElems),
            tabSelected: xmlDoc.attrBool(elem, "tabSelected"),
            view: <OpenXml.ST_SheetViewType | null>xmlDoc.attrString(elem, "view"),
            topLeftCell: xmlDoc.attrString(elem, "topLeftCell"),
            workbookViewId: xmlDoc.attrInt(elem, "workbookViewId") ?? 0,
            zoomScale: xmlDoc.attrInt(elem, "zoomScale"),
            zoomScaleNormal: xmlDoc.attrInt(elem, "zoomScaleNormal"),
            zoomScalePageLayoutView: xmlDoc.attrInt(elem, "zoomScalePageLayoutView"),
            zoomScaleSheetLayoutView: xmlDoc.attrInt(elem, "zoomScaleSheetLayoutView"),
        };
    },

    write(xmlDoc, inst) {
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
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Selection.write, inst.selections));
        return elem;
    }
};

export const SheetViews: OpenXmlIo.ReadWrite<OpenXml.SheetViews> = {
    read(xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "sheetViews", "dialogsheet, worksheet");
        var sheetViewElems = xmlDoc.queryAllChilds(elem, "sheetView");
        return {
            sheetViews: xmlDoc.readMulti(SheetView.read, sheetViewElems),
        };
    },

    write(xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("sheetViews");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(SheetView.write, inst.sheetViews));
        return elem;
    }
};