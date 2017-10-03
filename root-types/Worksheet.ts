import RichTextRun = require("../types/RichTextRun");
import StringElement = require("../types/StringElement");
import Text = require("../types/Text");

module Worksheet {

    export var Worksheet: OpenXmlIo.ReadWrite<OpenXml.Worksheet> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "worksheet", "root element of SpreadsheetML Worksheet part");

            var colsElems = xmlDoc.queryAllChilds(elem, "cols");
            var dimensionElem = xmlDoc.queryOneChild(elem, "dimension");
            var drawingElem = xmlDoc.queryOneChild(elem, "drawing");
            var headerFooterElem = xmlDoc.queryOneChild(elem, "headerFooter");
            var legacyDrawingElem = xmlDoc.queryOneChild(elem, "legacyDrawing");
            var pageMarginElem = xmlDoc.queryOneChild(elem, "pageMargins");
            var pageSetupElem = xmlDoc.queryOneChild(elem, "pageSetup");
            var sheetDataElem = xmlDoc.queryOneChild(elem, "sheetData");
            var sheetFormatPrElem = xmlDoc.queryOneChild(elem, "sheetFormatPr");
            var sheetViewsElem = xmlDoc.queryOneChild(elem, "sheetViews");

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


    export var Cell: OpenXmlIo.ReadWrite<OpenXml.Cell> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "c", "row");
            var attrs = elem.attributes;
            var fElem = xmlDoc.queryOneChild(elem, "f");
            var isElem = xmlDoc.queryOneChild(elem, "is");
            var vElem = xmlDoc.queryOneChild(elem, "v");
            return {
                f: fElem ? CellFormula.read(xmlDoc, fElem) : null,
                is: isElem ? InlineString.read(xmlDoc, isElem) : null,
                v: vElem ? CellValue.read(xmlDoc, vElem) : null,
                cm: xmlDoc.attrInt(attrs, "cm"),
                ph: xmlDoc.attrBool(attrs, "ph"),
                r: xmlDoc.attrString(attrs, "r"),
                s: xmlDoc.attrInt(attrs, "s"),
                t: xmlDoc.attrString(attrs, "t"),
                vm: xmlDoc.attrInt(attrs, "vm"),
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


    export var CellFormula: OpenXmlIo.ReadWrite<OpenXml.CellFormula> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "f", "c, nc, oc");
            var attrs = elem.attributes;
            return {
                content: elem.textContent,
                ref: xmlDoc.attrString(attrs, "ref"),
                si: xmlDoc.attrInt(attrs, "si"),
                t: <OpenXml.ST_CellFormulaType>xmlDoc.attrString(attrs, "t"),
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


    export var CellValue: OpenXmlIo.ReadWrite<OpenXml.CellValue> = {
        read(xmlDoc, elem) {
            return StringElement.read(xmlDoc, elem, "v", "c, cell, nc, oc, tp");
        },

        write(xmlDoc, inst) {
            return StringElement.write(xmlDoc, inst, "v");
        }
    };


    export var Column: OpenXmlIo.ReadWrite<OpenXml.Column> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "col", "cols");
            var attrs = elem.attributes;
            return {
                bestFit: xmlDoc.attrBool(attrs, "bestFit"),
                collapsed: xmlDoc.attrBool(attrs, "collapsed"),
                customWidth: xmlDoc.attrBool(attrs, "customWidth"),
                hidden: xmlDoc.attrBool(attrs, "hidden"),
                max: xmlDoc.attrInt(attrs, "max"),
                min: xmlDoc.attrInt(attrs, "min"),
                outlineLevel: xmlDoc.attrInt(attrs, "outlineLevel"),
                phonetic: xmlDoc.attrBool(attrs, "phonetic"),
                style: xmlDoc.attrInt(attrs, "style"),
                width: xmlDoc.attrFloat(attrs, "width"),
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


    export var Columns: OpenXmlIo.ReadWrite<OpenXml.Columns> = {
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


    export var Drawing: OpenXmlIo.ReadWrite<OpenXml.Drawing> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "drawing", "chartsheet, dialogsheet, worksheet");
            var attrs = elem.attributes;
            return {
                rid: xmlDoc.attrString(attrs, "r:id"),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("drawing")
                .attr("r:id", inst.rid)
                .element;
            return elem;
        }
    };


    export var EvenFooter: OpenXmlIo.ReadWrite<OpenXml.EvenFooter> = {
        read(xmlDoc, elem) {
            return StringElement.read(xmlDoc, elem, "evenfooter", "headerFooter");
        },

        write(xmlDoc, inst) {
            return StringElement.write(xmlDoc, inst, "evenFooter");
        }
    };


    export var EvenHeader: OpenXmlIo.ReadWrite<OpenXml.EvenHeader> = {
        read(xmlDoc, elem) {
            return StringElement.read(xmlDoc, elem, "evenHeader", "headerFooter");
        },

        write(xmlDoc, inst) {
            return StringElement.write(xmlDoc, inst, "evenHeader");
        }
    };


    export var FirstFooter: OpenXmlIo.ReadWrite<OpenXml.FirstFooter> = {
        read(xmlDoc, elem) {
            return StringElement.read(xmlDoc, elem, "firstFooter", "headerFooter");
        },

        write(xmlDoc, inst) {
            return StringElement.write(xmlDoc, inst, "firstFooter");
        }
    };


    export var FirstHeader: OpenXmlIo.ReadWrite<OpenXml.FirstHeader> = {
        read(xmlDoc, elem) {
            return StringElement.read(xmlDoc, elem, "firstHeader", "headerFooter");
        },

        write(xmlDoc, inst) {
            return StringElement.write(xmlDoc, inst, "firstHeader");
        }
    };


    export var HeaderFooter: OpenXmlIo.ReadWrite<OpenXml.HeaderFooter> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "headerFooter", "chartsheet, customSheetView, customSheetView, dialogsheet, worksheet");
            var evenHeaderElem = xmlDoc.queryOneChild(elem, "evenHeader");
            var evenFooterElem = xmlDoc.queryOneChild(elem, "evenFooter");
            var firstHeaderElem = xmlDoc.queryOneChild(elem, "firstHeader");
            var firstFooterElem = xmlDoc.queryOneChild(elem, "firstFooter");
            var oddHeaderElem = xmlDoc.queryOneChild(elem, "oddHeader");
            var oddFooterElem = xmlDoc.queryOneChild(elem, "oddFooter");

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


    export var InlineString: OpenXmlIo.ReadWrite<OpenXml.InlineString> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "is", "c, nc, oc");
            var rElems = xmlDoc.queryAllChilds(elem, "r");
            var tElem = xmlDoc.queryOneChild(elem, "t");
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


    export var LegacyDrawing: OpenXmlIo.ReadWrite<OpenXml.LegacyDrawing> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "legacyDrawing", "chartsheet, dialogsheet, worksheet");
            var attrs = elem.attributes;
            return {
                rid: xmlDoc.attrString(attrs, "r:id"),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("legacyDrawing")
                .attrString("r:id", inst.rid)
                .element;
            return elem;
        }
    };


    export var OddFooter: OpenXmlIo.ReadWrite<OpenXml.OddFooter> = {
        read(xmlDoc, elem) {
            return StringElement.read(xmlDoc, elem, "oddFooter", "headerFooter");
        },

        write(xmlDoc, inst) {
            return StringElement.write(xmlDoc, inst, "oddFooter");
        }
    };


    export var OddHeader: OpenXmlIo.ReadWrite<OpenXml.OddHeader> = {
        read(xmlDoc, elem) {
            return StringElement.read(xmlDoc, elem, "oddHeader", "headerFooter");
        },

        write(xmlDoc, inst) {
            return StringElement.write(xmlDoc, inst, "oddHeader");
        }
    };


    export var PageMargins: OpenXmlIo.ReadWrite<OpenXml.PageMargins> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "pageMargins", "chartsheet, customSheetView, customSheetView, dialogsheet, worksheet");
            var attrs = elem.attributes;
            return {
                bottom: xmlDoc.attrFloat(attrs, "bottom"),
                footer: xmlDoc.attrFloat(attrs, "footer"),
                header: xmlDoc.attrFloat(attrs, "header"),
                left: xmlDoc.attrFloat(attrs, "left"),
                right: xmlDoc.attrFloat(attrs, "right"),
                top: xmlDoc.attrFloat(attrs, "top"),
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


    export var PageSetup: OpenXmlIo.ReadWrite<OpenXml.PageSetup> = {
        // TODO incomplete
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "pageSetup", "customSheetView, dialogsheet, worksheet");
            var attrs = elem.attributes;
            return {
                orientation: <OpenXml.ST_Orientation>xmlDoc.attrString(attrs, "orientation"),
                rid: xmlDoc.attrString(attrs, "r:id"),
                scale: xmlDoc.attrInt(attrs, "scale"),
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


    export var Row: OpenXmlIo.ReadWrite<OpenXml.Row> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "row", "sheetData");
            var attrs = elem.attributes;
            var cElems = xmlDoc.queryAllChilds(elem, "c");
            return {
                cs: xmlDoc.readMulti(Cell.read, cElems),
                collapsed: xmlDoc.attrBool(attrs, "collapsed"),
                customFormat: xmlDoc.attrBool(attrs, "customFormat"),
                customHeight: xmlDoc.attrBool(attrs, "customHeight"),
                hidden: xmlDoc.attrBool(attrs, "hidden"),
                ht: xmlDoc.attrFloat(attrs, "ht"),
                outlineLevel: xmlDoc.attrInt(attrs, "outlineLevel"),
                ph: xmlDoc.attrBool(attrs, "ph"),
                r: xmlDoc.attrInt(attrs, "r"),
                s: xmlDoc.attrInt(attrs, "s"),
                spans: xmlDoc.attrString(attrs, "spans"),
                thickBot: xmlDoc.attrBool(attrs, "thickBot"),
                thickTop: xmlDoc.attrBool(attrs, "thickTop"),
                dyDescent: xmlDoc.attrFloat(attrs, "x14ac:dyDescent"),
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


    export var Selection: OpenXmlIo.ReadWrite<OpenXml.Selection> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "selection", "customSheetView, sheetView");
            var attrs = elem.attributes;
            return {
                activeCell: xmlDoc.attrString(attrs, "activeCell"),
                activeCellId: xmlDoc.attrInt(attrs, "activeCellId"),
                sqref: xmlDoc.attrString(attrs, "sqref")
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


    export var SheetData: OpenXmlIo.ReadWrite<OpenXml.SheetData> = {
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


    export var SheetDimension: OpenXmlIo.ReadWrite<OpenXml.SheetDimension> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "dimension", "worksheet");
            var attrs = elem.attributes;
            return {
                ref: xmlDoc.attrString(attrs, "ref")
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("dimension")
                .attrString("ref", inst.ref)
                .element;
            return elem;
        }
    };


    export var SheetFormatProperties: OpenXmlIo.ReadWrite<OpenXml.SheetFormatProperties> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "sheetFormatPr", "dialogsheet, worksheet");
            var attrs = elem.attributes;
            return {
                defaultColWidth: xmlDoc.attrFloat(attrs, "defaultColWidth"),
                defaultRowHeight: xmlDoc.attrFloat(attrs, "defaultRowHeight"),
                dyDescent: xmlDoc.attrFloat(attrs, "x14ac:dyDescent"),
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


    export var SheetView: OpenXmlIo.ReadWrite<OpenXml.SheetView> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "sheetView", "sheetViews");
            var attrs = elem.attributes;
            var selectionElems = xmlDoc.queryAllChilds(elem, "selection");
            return {
                selections: xmlDoc.readMulti(Selection.read, selectionElems),
                tabSelected: xmlDoc.attrBool(attrs, "tabSelected"),
                view: xmlDoc.attrString(attrs, "view"),
                topLeftCell: xmlDoc.attrString(attrs, "topLeftCell"),
                workbookViewId: xmlDoc.attrInt(attrs, "workbookViewId"),
                zoomScale: xmlDoc.attrInt(attrs, "zoomScale"),
                zoomScaleNormal: xmlDoc.attrInt(attrs, "zoomScaleNormal"),
                zoomScalePageLayoutView: xmlDoc.attrInt(attrs, "zoomScalePageLayoutView"),
                zoomScaleSheetLayoutView: xmlDoc.attrInt(attrs, "zoomScaleSheetLayoutView"),
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


    export var SheetViews: OpenXmlIo.ReadWrite<OpenXml.SheetViews> = {
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

}

export = Worksheet;