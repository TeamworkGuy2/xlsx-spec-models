"use strict";
var RichTextRun = require("../types/RichTextRun");
var StringElement = require("../types/StringElement");
var Text = require("../types/Text");
var Worksheet;
(function (Worksheet_1) {
    Worksheet_1.Worksheet = {
        read: function (xmlDoc, elem) {
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
                cols: xmlDoc.readMulti(Worksheet_1.Columns.read, colsElems),
                dimension: dimensionElem ? Worksheet_1.SheetDimension.read(xmlDoc, dimensionElem) : null,
                drawing: drawingElem ? Worksheet_1.Drawing.read(xmlDoc, drawingElem) : null,
                headerFooter: headerFooterElem ? Worksheet_1.HeaderFooter.read(xmlDoc, headerFooterElem) : null,
                legacyDrawing: legacyDrawingElem ? Worksheet_1.LegacyDrawing.read(xmlDoc, legacyDrawingElem) : null,
                pageMargins: pageMarginElem ? Worksheet_1.PageMargins.read(xmlDoc, pageMarginElem) : null,
                pageSetup: pageSetupElem ? Worksheet_1.PageSetup.read(xmlDoc, pageSetupElem) : null,
                sheetData: Worksheet_1.SheetData.read(xmlDoc, sheetDataElem),
                sheetFormatPr: sheetFormatPrElem ? Worksheet_1.SheetFormatProperties.read(xmlDoc, sheetFormatPrElem) : null,
                sheetViews: sheetViewsElem ? Worksheet_1.SheetViews.read(xmlDoc, sheetViewsElem) : null,
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("worksheet");
            if (inst.dimension) {
                elem.appendChild(Worksheet_1.SheetDimension.write(xmlDoc, inst.dimension));
            }
            if (inst.sheetViews) {
                elem.appendChild(Worksheet_1.SheetViews.write(xmlDoc, inst.sheetViews));
            }
            if (inst.sheetFormatPr) {
                elem.appendChild(Worksheet_1.SheetFormatProperties.write(xmlDoc, inst.sheetFormatPr));
            }
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Worksheet_1.Columns.write, inst.cols));
            elem.appendChild(Worksheet_1.SheetData.write(xmlDoc, inst.sheetData));
            if (inst.pageMargins) {
                elem.appendChild(Worksheet_1.PageMargins.write(xmlDoc, inst.pageMargins));
            }
            if (inst.pageSetup) {
                elem.appendChild(Worksheet_1.PageSetup.write(xmlDoc, inst.pageSetup));
            }
            if (inst.headerFooter) {
                elem.appendChild(Worksheet_1.HeaderFooter.write(xmlDoc, inst.headerFooter));
            }
            if (inst.drawing) {
                elem.appendChild(Worksheet_1.Drawing.write(xmlDoc, inst.drawing));
            }
            if (inst.legacyDrawing) {
                elem.appendChild(Worksheet_1.LegacyDrawing.write(xmlDoc, inst.legacyDrawing));
            }
            return elem;
        }
    };
    Worksheet_1.Cell = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "c", "row");
            var attrs = elem.attributes;
            var fElem = xmlDoc.queryOneChild(elem, "f");
            var isElem = xmlDoc.queryOneChild(elem, "is");
            var vElem = xmlDoc.queryOneChild(elem, "v");
            return {
                f: fElem ? Worksheet_1.CellFormula.read(xmlDoc, fElem) : null,
                is: isElem ? Worksheet_1.InlineString.read(xmlDoc, isElem) : null,
                v: vElem ? Worksheet_1.CellValue.read(xmlDoc, vElem) : null,
                cm: xmlDoc.attrInt(attrs, "cm"),
                ph: xmlDoc.attrBool(attrs, "ph"),
                r: xmlDoc.attrString(attrs, "r"),
                s: xmlDoc.attrInt(attrs, "s"),
                t: xmlDoc.attrString(attrs, "t"),
                vm: xmlDoc.attrInt(attrs, "vm"),
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
                elem.appendChild(Worksheet_1.CellFormula.write(xmlDoc, inst.f));
            }
            if (inst.is) {
                elem.appendChild(Worksheet_1.InlineString.write(xmlDoc, inst.is));
            }
            if (inst.v) {
                elem.appendChild(Worksheet_1.CellValue.write(xmlDoc, inst.v));
            }
            return elem;
        }
    };
    Worksheet_1.CellFormula = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "f", "c, nc, oc");
            var attrs = elem.attributes;
            return {
                content: elem.textContent,
                ref: xmlDoc.attrString(attrs, "ref"),
                si: xmlDoc.attrInt(attrs, "si"),
                t: xmlDoc.attrString(attrs, "t"),
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
    Worksheet_1.CellValue = {
        read: function (xmlDoc, elem) {
            return StringElement.read(xmlDoc, elem, "v", "c, cell, nc, oc, tp");
        },
        write: function (xmlDoc, inst) {
            return StringElement.write(xmlDoc, inst, "v");
        }
    };
    Worksheet_1.Column = {
        read: function (xmlDoc, elem) {
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
    Worksheet_1.Columns = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "cols", "worksheet");
            var colElems = xmlDoc.queryAllChilds(elem, "col");
            return {
                cols: xmlDoc.readMulti(Worksheet_1.Column.read, colElems),
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("cols");
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Worksheet_1.Column.write, inst.cols));
            return elem;
        }
    };
    Worksheet_1.Drawing = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "drawing", "chartsheet, dialogsheet, worksheet");
            var attrs = elem.attributes;
            return {
                rid: xmlDoc.attrString(attrs, "r:id"),
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("drawing")
                .attr("r:id", inst.rid)
                .element;
            return elem;
        }
    };
    Worksheet_1.EvenFooter = {
        read: function (xmlDoc, elem) {
            return StringElement.read(xmlDoc, elem, "evenfooter", "headerFooter");
        },
        write: function (xmlDoc, inst) {
            return StringElement.write(xmlDoc, inst, "evenFooter");
        }
    };
    Worksheet_1.EvenHeader = {
        read: function (xmlDoc, elem) {
            return StringElement.read(xmlDoc, elem, "evenHeader", "headerFooter");
        },
        write: function (xmlDoc, inst) {
            return StringElement.write(xmlDoc, inst, "evenHeader");
        }
    };
    Worksheet_1.FirstFooter = {
        read: function (xmlDoc, elem) {
            return StringElement.read(xmlDoc, elem, "firstFooter", "headerFooter");
        },
        write: function (xmlDoc, inst) {
            return StringElement.write(xmlDoc, inst, "firstFooter");
        }
    };
    Worksheet_1.FirstHeader = {
        read: function (xmlDoc, elem) {
            return StringElement.read(xmlDoc, elem, "firstHeader", "headerFooter");
        },
        write: function (xmlDoc, inst) {
            return StringElement.write(xmlDoc, inst, "firstHeader");
        }
    };
    Worksheet_1.HeaderFooter = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "headerFooter", "chartsheet, customSheetView, customSheetView, dialogsheet, worksheet");
            var evenHeaderElem = xmlDoc.queryOneChild(elem, "evenHeader");
            var evenFooterElem = xmlDoc.queryOneChild(elem, "evenFooter");
            var firstHeaderElem = xmlDoc.queryOneChild(elem, "firstHeader");
            var firstFooterElem = xmlDoc.queryOneChild(elem, "firstFooter");
            var oddHeaderElem = xmlDoc.queryOneChild(elem, "oddHeader");
            var oddFooterElem = xmlDoc.queryOneChild(elem, "oddFooter");
            return {
                evenHeader: evenHeaderElem ? Worksheet_1.EvenHeader.read(xmlDoc, evenHeaderElem) : null,
                evenFooter: evenFooterElem ? Worksheet_1.EvenFooter.read(xmlDoc, evenFooterElem) : null,
                firstHeader: firstHeaderElem ? Worksheet_1.FirstHeader.read(xmlDoc, firstHeaderElem) : null,
                firstFooter: firstFooterElem ? Worksheet_1.FirstFooter.read(xmlDoc, firstFooterElem) : null,
                oddHeader: oddHeaderElem ? Worksheet_1.OddHeader.read(xmlDoc, oddHeaderElem) : null,
                oddFooter: oddFooterElem ? Worksheet_1.OddFooter.read(xmlDoc, oddFooterElem) : null,
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("headerFooter");
            if (inst.evenHeader) {
                elem.appendChild(Worksheet_1.EvenHeader.write(xmlDoc, inst.evenHeader));
            }
            if (inst.evenFooter) {
                elem.appendChild(Worksheet_1.EvenFooter.write(xmlDoc, inst.evenFooter));
            }
            if (inst.firstHeader) {
                elem.appendChild(Worksheet_1.FirstHeader.write(xmlDoc, inst.firstHeader));
            }
            if (inst.firstFooter) {
                elem.appendChild(Worksheet_1.FirstFooter.write(xmlDoc, inst.firstFooter));
            }
            if (inst.oddHeader) {
                elem.appendChild(Worksheet_1.OddHeader.write(xmlDoc, inst.oddHeader));
            }
            if (inst.oddFooter) {
                elem.appendChild(Worksheet_1.OddFooter.write(xmlDoc, inst.oddFooter));
            }
            return elem;
        }
    };
    Worksheet_1.InlineString = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "is", "c, nc, oc");
            var rElems = xmlDoc.queryAllChilds(elem, "r");
            var tElem = xmlDoc.queryOneChild(elem, "t");
            return {
                rs: xmlDoc.readMulti(RichTextRun.read, rElems),
                t: tElem ? Text.read(xmlDoc, tElem) : null,
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("is");
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(RichTextRun.write, inst.rs));
            if (inst.t) {
                elem.appendChild(Text.write(xmlDoc, inst.t));
            }
            return elem;
        }
    };
    Worksheet_1.LegacyDrawing = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "legacyDrawing", "chartsheet, dialogsheet, worksheet");
            var attrs = elem.attributes;
            return {
                rid: xmlDoc.attrString(attrs, "r:id"),
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("legacyDrawing")
                .attrString("r:id", inst.rid)
                .element;
            return elem;
        }
    };
    Worksheet_1.OddFooter = {
        read: function (xmlDoc, elem) {
            return StringElement.read(xmlDoc, elem, "oddFooter", "headerFooter");
        },
        write: function (xmlDoc, inst) {
            return StringElement.write(xmlDoc, inst, "oddFooter");
        }
    };
    Worksheet_1.OddHeader = {
        read: function (xmlDoc, elem) {
            return StringElement.read(xmlDoc, elem, "oddHeader", "headerFooter");
        },
        write: function (xmlDoc, inst) {
            return StringElement.write(xmlDoc, inst, "oddHeader");
        }
    };
    Worksheet_1.PageMargins = {
        read: function (xmlDoc, elem) {
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
    Worksheet_1.PageSetup = {
        // TODO incomplete
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "pageSetup", "customSheetView, dialogsheet, worksheet");
            var attrs = elem.attributes;
            return {
                orientation: xmlDoc.attrString(attrs, "orientation"),
                rid: xmlDoc.attrString(attrs, "r:id"),
                scale: xmlDoc.attrInt(attrs, "scale"),
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
    Worksheet_1.Row = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "row", "sheetData");
            var attrs = elem.attributes;
            var cElems = xmlDoc.queryAllChilds(elem, "c");
            return {
                cs: xmlDoc.readMulti(Worksheet_1.Cell.read, cElems),
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
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Worksheet_1.Cell.write, inst.cs));
            return elem;
        }
    };
    Worksheet_1.Selection = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "selection", "customSheetView, sheetView");
            var attrs = elem.attributes;
            return {
                activeCell: xmlDoc.attrString(attrs, "activeCell"),
                activeCellId: xmlDoc.attrInt(attrs, "activeCellId"),
                sqref: xmlDoc.attrString(attrs, "sqref")
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
    Worksheet_1.SheetData = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "sheetData", "worksheet");
            var rowElems = xmlDoc.queryAllChilds(elem, "row");
            return {
                rows: xmlDoc.readMulti(Worksheet_1.Row.read, rowElems),
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("sheetData");
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Worksheet_1.Row.write, inst.rows));
            return elem;
        }
    };
    Worksheet_1.SheetDimension = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "dimension", "worksheet");
            var attrs = elem.attributes;
            return {
                ref: xmlDoc.attrString(attrs, "ref")
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("dimension")
                .attrString("ref", inst.ref)
                .element;
            return elem;
        }
    };
    Worksheet_1.SheetFormatProperties = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "sheetFormatPr", "dialogsheet, worksheet");
            var attrs = elem.attributes;
            return {
                defaultColWidth: xmlDoc.attrFloat(attrs, "defaultColWidth"),
                defaultRowHeight: xmlDoc.attrFloat(attrs, "defaultRowHeight"),
                dyDescent: xmlDoc.attrFloat(attrs, "x14ac:dyDescent"),
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
    Worksheet_1.SheetView = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "sheetView", "sheetViews");
            var attrs = elem.attributes;
            var selectionElems = xmlDoc.queryAllChilds(elem, "selection");
            return {
                selections: xmlDoc.readMulti(Worksheet_1.Selection.read, selectionElems),
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
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Worksheet_1.Selection.write, inst.selections));
            return elem;
        }
    };
    Worksheet_1.SheetViews = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "sheetViews", "dialogsheet, worksheet");
            var sheetViewElems = xmlDoc.queryAllChilds(elem, "sheetView");
            return {
                sheetViews: xmlDoc.readMulti(Worksheet_1.SheetView.read, sheetViewElems),
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("sheetViews");
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Worksheet_1.SheetView.write, inst.sheetViews));
            return elem;
        }
    };
})(Worksheet || (Worksheet = {}));
module.exports = Worksheet;