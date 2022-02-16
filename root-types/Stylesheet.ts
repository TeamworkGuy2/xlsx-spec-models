import BooleanAttribute = require("../types/BooleanAttribute");
import BorderProperty = require("../types/BorderProperty");
import IntAttribute = require("../types/IntAttribute");
import StringAttribute = require("../types/StringAttribute");
import Bold = require("../types/Bold");
import Color = require("../types/Color");
import FontFamily = require("../types/FontFamily");
import FontSize = require("../types/FontSize");

module Stylesheet {

    export var Stylesheet: OpenXmlIo.ReadWrite<OpenXml.Stylesheet> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "styleSheet", "root element of SpreadsheetML Stylesheet part");
            var bordersElem = xmlDoc.queryOneChild(elem, "borders", false);
            var cellStylesElem = xmlDoc.queryOneChild(elem, "cellStyles", false);
            var cellStyleXfsElem = xmlDoc.queryOneChild(elem, "cellStyleXfs", false);
            var cellXfsElems = xmlDoc.queryOneChild(elem, "cellXfs", false);
            var colorsElem = xmlDoc.queryOneChild(elem, "colors", false);
            var dxfsElem = xmlDoc.queryOneChild(elem, "dxfs", false);
            var fillsElem = xmlDoc.queryOneChild(elem, "fills", false);
            var fontsElem = xmlDoc.queryOneChild(elem, "fonts", false);
            var numFmtsElem = xmlDoc.queryOneChild(elem, "numFmts", false);
            var tableStylesElem = xmlDoc.queryOneChild(elem, "tableStyles", false);
            var extLstElem = xmlDoc.queryOneChild(elem, "extLst", false);

            return {
                borders: bordersElem ? Borders.read(xmlDoc, bordersElem) : null,
                cellStyles: cellStylesElem ? CellStyles.read(xmlDoc, cellStylesElem) : null,
                cellStyleXfs: cellStyleXfsElem ? CellStyleFormats.read(xmlDoc, cellStyleXfsElem) : null,
                cellXfs: cellXfsElems ? CellFormats.read(xmlDoc, cellXfsElems) : null,
                colors: colorsElem ? Colors.read(xmlDoc, colorsElem) : null,
                dxfs: dxfsElem ? DifferentialFormats.read(xmlDoc, dxfsElem) : null,
                fills: fillsElem ? Fills.read(xmlDoc, fillsElem) : null,
                fonts: fontsElem ? Fonts.read(xmlDoc, fontsElem) : null,
                numFmts: numFmtsElem ? NumberingFormats.read(xmlDoc, numFmtsElem) : null,
                tableStyles: tableStylesElem ? TableStyles.read(xmlDoc, tableStylesElem) : null,
                extLst: extLstElem,
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("styleSheet");

            if (inst.numFmts) { elem.appendChild(NumberingFormats.write(xmlDoc, inst.numFmts)); }
            if (inst.fonts) { elem.appendChild(Fonts.write(xmlDoc, inst.fonts)); }
            if (inst.fills) { elem.appendChild(Fills.write(xmlDoc, inst.fills)); }
            if (inst.borders) { elem.appendChild(Borders.write(xmlDoc, inst.borders)); }
            if (inst.cellStyleXfs) { elem.appendChild(CellStyleFormats.write(xmlDoc, inst.cellStyleXfs)); }
            if (inst.cellXfs) { elem.appendChild(CellFormats.write(xmlDoc, inst.cellXfs)); }
            if (inst.cellStyles) { elem.appendChild(CellStyles.write(xmlDoc, inst.cellStyles)); }
            if (inst.dxfs) { elem.appendChild(DifferentialFormats.write(xmlDoc, inst.dxfs)); }
            if (inst.tableStyles) { elem.appendChild(TableStyles.write(xmlDoc, inst.tableStyles)); }
            if (inst.colors) { elem.appendChild(Colors.write(xmlDoc, inst.colors)); }
            if (inst.extLst) { elem.appendChild(inst.extLst); }

            return elem;
        }
    };


    export var Alignment: OpenXmlIo.ReadWrite<OpenXml.Alignment> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "alignment", "dxf, ndxf, odxf, xf");
            return {
                horizontal: <OpenXml.ST_HorizontalAlignment | null>xmlDoc.attrString(elem, "horizontal"),
                indent: xmlDoc.attrInt(elem, "indent"),
                justifyLastLine: xmlDoc.attrBool(elem, "justifyLastLine"),
                readingOrder: xmlDoc.attrInt(elem, "readingOrder"),
                relativeIndent: xmlDoc.attrInt(elem, "relativeIndent"),
                shrinkToFit: xmlDoc.attrBool(elem, "shrinkToFit"),
                textRotation: xmlDoc.attrFloat(elem, "textRotation"),
                vertical: <OpenXml.ST_VerticalAlignment | null>xmlDoc.attrString(elem, "vertical"),
                wrapText: xmlDoc.attrBool(elem, "wrapText"),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("alignment")
                .attrString("horizontal", inst.horizontal, true)
                .attrInt("indent", inst.indent, true)
                .attrBool("justifyLastLine", inst.justifyLastLine, true, "1", "0")
                .attrInt("readingOrder", inst.readingOrder, true)
                .attrInt("relativeIndent", inst.relativeIndent, true)
                .attrBool("shrinkToFit", inst.shrinkToFit, true, "1", "0")
                .attrFloat("textRotation", inst.textRotation, true)
                .attrString("vertical", inst.vertical, true)
                .attrBool("wrapText", inst.wrapText, true, "1", "0")
                .element;
            return elem;
        }
    };


    export var Border: OpenXmlIo.ReadWrite<OpenXml.Border> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "border", "borders, dxf, ndxf, odxf");
            var bottomElem = xmlDoc.queryOneChild(elem, "bottom", false);
            var diagonalElem = xmlDoc.queryOneChild(elem, "diagonal", false);
            var endElem = xmlDoc.queryOneChild(elem, "end", false);
            var horizontalElem = xmlDoc.queryOneChild(elem, "horizontal", false);
            var startElem = xmlDoc.queryOneChild(elem, "start", false);
            var topElem = xmlDoc.queryOneChild(elem, "top", false);
            var verticlaElem = xmlDoc.queryOneChild(elem, "vertical", false);

            // these aren't part of the spec, but MS Office 2013 requires them
            var leftElem = xmlDoc.queryOneChild(elem, "left", false);
            var rightElem = xmlDoc.queryOneChild(elem, "right", false);

            return {
                left: leftElem ? BorderProperty.read(xmlDoc, leftElem, "left", "border") : null,
                right: rightElem ? BorderProperty.read(xmlDoc, rightElem, "right", "border") : null,

                bottom: bottomElem ? BottomBorder.read(xmlDoc, bottomElem) : null,
                diagonal: diagonalElem ? DiagonalBorder.read(xmlDoc, diagonalElem) : null,
                end: endElem ? EndBorder.read(xmlDoc, endElem) : null,
                horizontal: horizontalElem ? HorizontalBorder.read(xmlDoc, horizontalElem) : null,
                start: startElem ? StartBorder.read(xmlDoc, startElem) : null,
                top: topElem ? TopBorder.read(xmlDoc, topElem) : null,
                vertical: verticlaElem ? VerticalBorder.read(xmlDoc, verticlaElem) : null,
                diagonalDown: xmlDoc.attrBool(elem, "diagonalDown"),
                diagonalUp: xmlDoc.attrBool(elem, "diagonalUp"),
                outline: xmlDoc.attrBool(elem, "outline"),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("border")
                .attrBool("diagonalDown", inst.diagonalDown, true, "1", "0")
                .attrBool("diagonalUp", inst.diagonalUp, true, "1", "0")
                .attrBool("outline", inst.outline, true, "1", "0")
                .element;

            if (inst.left) { elem.appendChild(BorderProperty.write(xmlDoc, inst.left, "left")); }
            if (inst.right) { elem.appendChild(BorderProperty.write(xmlDoc, inst.right, "right")); }

            if (inst.top) { elem.appendChild(TopBorder.write(xmlDoc, inst.top)); }
            if (inst.bottom) { elem.appendChild(BottomBorder.write(xmlDoc, inst.bottom)); }
            if (inst.diagonal) { elem.appendChild(DiagonalBorder.write(xmlDoc, inst.diagonal)); }
            if (inst.end) { elem.appendChild(EndBorder.write(xmlDoc, inst.end)); }
            if (inst.horizontal) { elem.appendChild(HorizontalBorder.write(xmlDoc, inst.horizontal)); }
            if (inst.start) { elem.appendChild(StartBorder.write(xmlDoc, inst.start)); }
            if (inst.vertical) { elem.appendChild(VerticalBorder.write(xmlDoc, inst.vertical)); }

            return elem;
        }
    };


    export var Borders: OpenXmlIo.ReadWrite<OpenXml.Borders> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "borders", "styleSheet");
            var borderElems = xmlDoc.queryAllChilds(elem, "border");

            return {
                borders: xmlDoc.readMulti(Border.read, borderElems),
                count: xmlDoc.attrInt(elem, "count") ?? borderElems.length,
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("borders")
                .attrInt("count", inst.count, true)
                .element;
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Border.write, inst.borders));
            return elem;
        }
    };


    export var BottomBorder: OpenXmlIo.ReadWrite<OpenXml.BorderProperty> = {
        read(xmlDoc, elem) {
            return BorderProperty.read(xmlDoc, elem, "bottom", "border");
        },

        write(xmlDoc, inst) {
            return BorderProperty.write(xmlDoc, inst, "bottom");
        }
    };


    export var DiagonalBorder: OpenXmlIo.ReadWrite<OpenXml.BorderProperty> = {
        read(xmlDoc, elem) {
            return BorderProperty.read(xmlDoc, elem, "diagonal", "border");
        },

        write(xmlDoc, inst) {
            return BorderProperty.write(xmlDoc, inst, "diagonal");
        }
    };


    export var EndBorder: OpenXmlIo.ReadWrite<OpenXml.BorderProperty> = {
        read(xmlDoc, elem) {
            return BorderProperty.read(xmlDoc, elem, "end", "border");
        },

        write(xmlDoc, inst) {
            return BorderProperty.write(xmlDoc, inst, "end");
        }
    };


    export var HorizontalBorder: OpenXmlIo.ReadWrite<OpenXml.BorderProperty> = {
        read(xmlDoc, elem) {
            return BorderProperty.read(xmlDoc, elem, "horizontal", "border");
        },

        write(xmlDoc, inst) {
            return BorderProperty.write(xmlDoc, inst, "horizontal");
        }
    };


    export var StartBorder: OpenXmlIo.ReadWrite<OpenXml.BorderProperty> = {
        read(xmlDoc, elem) {
            return BorderProperty.read(xmlDoc, elem, "start", "border");
        },

        write(xmlDoc, inst) {
            return BorderProperty.write(xmlDoc, inst, "start");
        }
    };


    export var TopBorder: OpenXmlIo.ReadWrite<OpenXml.BorderProperty> = {
        read(xmlDoc, elem) {
            return BorderProperty.read(xmlDoc, elem, "top", "border");
        },

        write(xmlDoc, inst) {
            return BorderProperty.write(xmlDoc, inst, "top");
        }
    };


    export var VerticalBorder: OpenXmlIo.ReadWrite<OpenXml.BorderProperty> = {
        read(xmlDoc, elem) {
            return BorderProperty.read(xmlDoc, elem, "vertical", "border");
        },

        write(xmlDoc, inst) {
            return BorderProperty.write(xmlDoc, inst, "vertical");
        }
    };


    export var CellFormat: OpenXmlIo.ReadWrite<OpenXml.CellFormat> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "xf", "cellStyleXfs, cellXfs");
            var alignmentElem = xmlDoc.queryOneChild(elem, "alignment", false);
            var protectionElem = xmlDoc.queryOneChild(elem, "protection", false);

            return {
                alignment: alignmentElem ? Alignment.read(xmlDoc, alignmentElem) : null,
                protection: protectionElem ? Protection.read(xmlDoc, protectionElem) : null,
                applyAlignment: xmlDoc.attrBool(elem, "applyAlignment"),
                applyBorder: xmlDoc.attrBool(elem, "applyBorder"),
                applyFill: xmlDoc.attrBool(elem, "applyFill"),
                applyFont: xmlDoc.attrBool(elem, "applyFont"),
                applyNumberFormat: xmlDoc.attrBool(elem, "applyNumberFormat"),
                applyProtection: xmlDoc.attrBool(elem, "applyProtection"),
                borderId: xmlDoc.attrInt(elem, "borderId"),
                fillId: xmlDoc.attrInt(elem, "fillId"),
                fontId: xmlDoc.attrInt(elem, "fontId"),
                numFmtId: xmlDoc.attrInt(elem, "numFmtId"),
                pivotButton: xmlDoc.attrBool(elem, "pivotButton"),
                quotePrefix: xmlDoc.attrBool(elem, "quotePrefix"),
                xfId: xmlDoc.attrInt(elem, "xfId"),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("xf")
                .attrInt("numFmtId", inst.numFmtId, true)
                .attrInt("fontId", inst.fontId, true)
                .attrInt("fillId", inst.fillId, true)
                .attrInt("borderId", inst.borderId, true)
                .attrInt("xfId", inst.xfId, true)
                .attrBool("applyAlignment", inst.applyAlignment, true, "1", "0")
                .attrBool("applyBorder", inst.applyBorder, true, "1", "0")
                .attrBool("applyFill", inst.applyFill, true, "1", "0")
                .attrBool("applyFont", inst.applyFont, true, "1", "0")
                .attrBool("applyNumberFormat", inst.applyNumberFormat, true, "1", "0")
                .attrBool("applyProtection", inst.applyProtection, true, "1", "0")
                .attrBool("pivotButton", inst.pivotButton, true, "1", "0")
                .attrBool("quotePrefix", inst.quotePrefix, true, "1", "0")
                .element;
            if (inst.alignment) { elem.appendChild(Alignment.write(xmlDoc, inst.alignment)); }
            if (inst.protection) { elem.appendChild(Protection.write(xmlDoc, inst.protection)); }
            return elem;
        }
    };


    export var CellFormats: OpenXmlIo.ReadWrite<OpenXml.CellFormats> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "cellXfs", "styleSheet");
            var cellFormatElems = xmlDoc.queryAllChilds(elem, "xf");

            return {
                xfs: xmlDoc.readMulti(CellFormat.read, cellFormatElems),
                count: xmlDoc.attrInt(elem, "count") ?? cellFormatElems.length,
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("cellXfs")
                .attrInt("count", inst.count, true)
                .element;
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(CellFormat.write, inst.xfs));
            return elem;
        }
    };


    export var CellStyle: OpenXmlIo.ReadWrite<OpenXml.CellStyle> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "cellStyle", "cellStyles");
            return {
                builtinId: xmlDoc.attrInt(elem, "builtinId"),
                customBuiltin: xmlDoc.attrBool(elem, "customBuiltin"),
                hidden: xmlDoc.attrBool(elem, "hidden"),
                iLevel: xmlDoc.attrInt(elem, "iLevel"),
                name: xmlDoc.attrString(elem, "name"),
                xfId: xmlDoc.attrInt(elem, "xfId") ?? 0,
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("cellStyle")
                .attrString("name", inst.name, true)
                .attrInt("xfId", inst.xfId)
                .attrInt("builtinId", inst.builtinId, true)
                .attrBool("customBuiltin", inst.customBuiltin, true, "1", "0")
                .attrBool("hidden", inst.hidden, true, "1", "0")
                .attrInt("iLevel", inst.iLevel, true)
                .element;
            return elem;
        }
    };


    export var CellStyleFormats: OpenXmlIo.ReadWrite<OpenXml.CellStyleFormats> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "cellStyleXfs", "styleSheet");
            var cellFormatElems = xmlDoc.queryAllChilds(elem, "xf");
            return {
                xfs: xmlDoc.readMulti(CellFormat.read, cellFormatElems),
                count: xmlDoc.attrInt(elem, "count") ?? cellFormatElems.length,
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("cellStyleXfs")
                .attrInt("count", inst.count, true)
                .element;
            var cellFormatElems = xmlDoc.writeMulti(CellFormat.write, inst.xfs);
            xmlDoc.addChilds(elem, cellFormatElems);
            return elem;
        }
    };


    export var CellStyles: OpenXmlIo.ReadWrite<OpenXml.CellStyles> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "cellStyles", "styleSheet");
            var cellStyleElems = xmlDoc.queryAllChilds(elem, "cellStyle");
            return {
                cellStyles: xmlDoc.readMulti(CellStyle.read, cellStyleElems),
                count: xmlDoc.attrInt(elem, "count") ?? cellStyleElems.length,
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("cellStyles")
                .attrInt("count", inst.count, true)
                .element;
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(CellStyle.write, inst.cellStyles));
            return elem;
        }
    };


    export var Colors: OpenXmlIo.ReadWrite<OpenXml.Colors> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "colors", "styleSheet");
            var indexedColorElem = xmlDoc.queryOneChild(elem, "indexedColors", false);
            var mruColorElem = xmlDoc.queryOneChild(elem, "mruColors", false);

            return {
                indexedColors: indexedColorElem ? IndexedColors.read(xmlDoc, indexedColorElem) : null,
                mruColors: mruColorElem ? MruColors.read(xmlDoc, mruColorElem) : null,
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("cellXfs");
            if (inst.indexedColors) { elem.appendChild(IndexedColors.write(xmlDoc, inst.indexedColors)); }
            if (inst.mruColors) { elem.appendChild(MruColors.write(xmlDoc, inst.mruColors)); }
            return elem;
        }
    };


    export var DifferentialFormat: OpenXmlIo.ReadWrite<OpenXml.DifferentialFormat> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "dxf", "dxfs, rfmt");
            var alignmentElem = xmlDoc.queryOneChild(elem, "alignment", false);
            var borderElem = xmlDoc.queryOneChild(elem, "border", false);
            var fillElem = xmlDoc.queryOneChild(elem, "fill", false);
            var fontElem = xmlDoc.queryOneChild(elem, "font", false);
            var numFmtElem = xmlDoc.queryOneChild(elem, "numFmt", false);
            var protectionElem = xmlDoc.queryOneChild(elem, "protection", false);

            return {
                alignment: alignmentElem ? Alignment.read(xmlDoc, alignmentElem) : null,
                border: borderElem ? Border.read(xmlDoc, borderElem) : null,
                fill: fillElem ? Fill.read(xmlDoc, fillElem) : null,
                font: fontElem ? Font.read(xmlDoc, fontElem) : null,
                numFmt: numFmtElem ? NumberingFormat.read(xmlDoc, numFmtElem) : null,
                protection: protectionElem ? Protection.read(xmlDoc, protectionElem) : null,
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("dxf");
            if (inst.alignment) { elem.appendChild(Alignment.write(xmlDoc, inst.alignment)); }
            if (inst.border) { elem.appendChild(Border.write(xmlDoc, inst.border)); }
            if (inst.fill) { elem.appendChild(Fill.write(xmlDoc, inst.fill)); }
            if (inst.font) { elem.appendChild(Font.write(xmlDoc, inst.font)); }
            if (inst.numFmt) { elem.appendChild(NumberingFormat.write(xmlDoc, inst.numFmt)); }
            if (inst.protection) { elem.appendChild(Protection.write(xmlDoc, inst.protection)); }
            return elem;
        }
    };


    export var DifferentialFormats: OpenXmlIo.ReadWrite<OpenXml.DifferentialFormats> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "dxfs", "styleSheet");
            var dxfElems = xmlDoc.queryAllChilds(elem, "dxf");
            return {
                dxfs: xmlDoc.readMulti(DifferentialFormat.read, dxfElems),
                count: xmlDoc.attrInt(elem, "count") ?? dxfElems.length,
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("dxfs")
                .attrInt("count", inst.count, true)
                .element;
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(DifferentialFormat.write, inst.dxfs));
            return elem;
        }
    };


    export var Fill: OpenXmlIo.ReadWrite<OpenXml.Fill> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "fill", "dxf, fills, ndxf, odxf");
            var gradientFillElem = xmlDoc.queryOneChild(elem, "gradientFill", false);
            var patternFillElem = xmlDoc.queryOneChild(elem, "patternFill", false);

            return {
                gradientFill: gradientFillElem ? GradientFill.read(xmlDoc, gradientFillElem) : null,
                patternFill: patternFillElem ? PatternFill.read(xmlDoc, patternFillElem) : null,
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("fill");
            if (inst.gradientFill) { elem.appendChild(GradientFill.write(xmlDoc, inst.gradientFill)); }
            if (inst.patternFill) { elem.appendChild(PatternFill.write(xmlDoc, inst.patternFill)); }

            return elem;
        }
    };


    export var Fills: OpenXmlIo.ReadWrite<OpenXml.Fills> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "fills", "styleSheet");
            var fillElems = xmlDoc.queryAllChilds(elem, "fill");
            return {
                fills: xmlDoc.readMulti(Fill.read, fillElems),
                count: xmlDoc.attrInt(elem, "count") ?? fillElems.length,
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("fills")
                .attrInt("count", inst.count, true)
                .element;
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Fill.write, inst.fills));
            return elem;
        }
    };


    export var Font: OpenXmlIo.ReadWrite<OpenXml.Font> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "font", "dxf, fonts, ndxf, odxf");
            var bElem = xmlDoc.queryOneChild(elem, "b", false);
            var charsetElem = xmlDoc.queryOneChild(elem, "charset", false);
            var colorElem = xmlDoc.queryOneChild(elem, "color", false);
            var condenseElem = xmlDoc.queryOneChild(elem, "condense", false);
            var extendElem = xmlDoc.queryOneChild(elem, "extend", false);
            var familyElem = xmlDoc.queryOneChild(elem, "family", false);
            var iElem = xmlDoc.queryOneChild(elem, "i", false);
            var nameElem = xmlDoc.queryOneChild(elem, "name", false);
            var outlineElem = xmlDoc.queryOneChild(elem, "outline", false);
            var schemeElem = xmlDoc.queryOneChild(elem, "scheme", false);
            var shadowElem = xmlDoc.queryOneChild(elem, "shadow", false);
            var strikeElem = xmlDoc.queryOneChild(elem, "strike", false);
            var szElem = xmlDoc.queryOneChild(elem, "sz", false);
            var uElem = xmlDoc.queryOneChild(elem, "u", false);
            var vertAlignElem = xmlDoc.queryOneChild(elem, "vertAlign", false);

            return {
                b: bElem ? Bold.read(xmlDoc, bElem, "b", "font, rPr") : null,
                charset: charsetElem ? FontCharSet.read(xmlDoc, charsetElem) : null,
                color: colorElem ? Color.read(xmlDoc, colorElem, "color") : null,
                condense: condenseElem ? BooleanAttribute.read(xmlDoc, condenseElem, "condense", "font, rPr") : null,
                extend: extendElem ? BooleanAttribute.read(xmlDoc, extendElem, "extend", "font, rPr") : null,
                family: familyElem ? FontFamily.read(xmlDoc, familyElem) : null,
                i: iElem ? BooleanAttribute.read(xmlDoc, iElem, "i", "font, rPr") : null,
                name: nameElem ? FontName.read(xmlDoc, nameElem) : null,
                outline: outlineElem ? BooleanAttribute.read(xmlDoc, outlineElem, "outline", "font, rPr") : null,
                scheme: schemeElem ? FontScheme.read(xmlDoc, schemeElem) : null,
                shadow: shadowElem ? BooleanAttribute.read(xmlDoc, shadowElem, "shadow", "font, rPr") : null,
                strike: strikeElem ? BooleanAttribute.read(xmlDoc, strikeElem, "strike", "font, rPr") : null,
                sz: szElem ? FontSize.read(xmlDoc, szElem) : null,
                u: uElem ? Underline.read(xmlDoc, uElem) : null,
                vertAlign: vertAlignElem ? VerticalTextAlignment.read(xmlDoc, vertAlignElem) : null,
            };
        },

        write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Font): ElementLike {
            var elem = xmlDoc.dom.createElement("font");
            if (inst.b && inst.b.val) { elem.appendChild(Bold.write(xmlDoc, inst.b, "b")); }
            if (inst.sz) { elem.appendChild(FontSize.write(xmlDoc, inst.sz)); }
            if (inst.charset) { elem.appendChild(FontCharSet.write(xmlDoc, inst.charset)); }
            if (inst.color) { elem.appendChild(Color.write(xmlDoc, inst.color, "color")); }
            if (inst.condense) { elem.appendChild(BooleanAttribute.write(xmlDoc, inst.condense, "condense")); }
            if (inst.extend) { elem.appendChild(BooleanAttribute.write(xmlDoc, inst.extend, "extend")); }
            if (inst.name) { elem.appendChild(FontName.write(xmlDoc, inst.name)); }
            if (inst.family) { elem.appendChild(FontFamily.write(xmlDoc, inst.family)); }
            if (inst.i) { elem.appendChild(BooleanAttribute.write(xmlDoc, inst.i, "i")); }
            if (inst.outline) { elem.appendChild(BooleanAttribute.write(xmlDoc, inst.outline, "outline")); }
            if (inst.scheme) { elem.appendChild(FontScheme.write(xmlDoc, inst.scheme)); }
            if (inst.shadow) { elem.appendChild(BooleanAttribute.write(xmlDoc, inst.shadow, "shadow")); }
            if (inst.strike) { elem.appendChild(BooleanAttribute.write(xmlDoc, inst.strike, "strike")); }
            if (inst.u) { elem.appendChild(Underline.write(xmlDoc, inst.u)); }
            if (inst.vertAlign) { elem.appendChild(VerticalTextAlignment.write(xmlDoc, inst.vertAlign)); }
            return elem;
        }
    };


    export var FontCharSet: OpenXmlIo.ReadWriteCopy<OpenXml.FontCharSet> = {
        read(xmlDoc, elem) {
            return IntAttribute.read(xmlDoc, elem, "charset");
        },

        write(xmlDoc, inst) {
            return IntAttribute.write(xmlDoc, inst, "charset");
        },

        copy(inst) {
            return IntAttribute.copy(inst);
        }
    };


    export var FontName: OpenXmlIo.ReadWriteCopy<OpenXml.FontName> = {
        read(xmlDoc, elem) {
            return StringAttribute.read(xmlDoc, elem, "name");
        },

        write(xmlDoc, inst) {
            return StringAttribute.write(xmlDoc, inst, "name");
        },

        copy(inst) {
            return StringAttribute.copy(inst);
        }
    };


    export var Fonts: OpenXmlIo.ReadWrite<OpenXml.Fonts> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "fonts", "styleSheet");
            var fontElems = xmlDoc.queryAllChilds(elem, "font");
            return {
                fonts: xmlDoc.readMulti(Font.read, fontElems),
                count: xmlDoc.attrInt(elem, "count") ?? fontElems.length,
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("fonts")
                .attrInt("count", inst.count, true)
                .element;
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Font.write, inst.fonts));
            return elem;
        }
    };


    export var FontScheme: OpenXmlIo.ReadWrite<OpenXml.FontScheme> = {
        read(xmlDoc, elem) {
            return <OpenXml.FontScheme>StringAttribute.read(xmlDoc, elem, "scheme", "font, rPr");
        },

        write(xmlDoc, inst) {
            return StringAttribute.write(xmlDoc, inst, "scheme");
        }
    };


    export var GradientFill: OpenXmlIo.ReadWrite<OpenXml.GradientFill> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "gradientFill", "fill");
            var stopElems = xmlDoc.queryAllChilds(elem, "stop");

            return {
                stops: xmlDoc.readMulti(GradientStop.read, stopElems),
                bottom: xmlDoc.attrFloat(elem, "bottom"),
                degree: xmlDoc.attrFloat(elem, "degree"),
                left: xmlDoc.attrFloat(elem, "left"),
                right: xmlDoc.attrFloat(elem, "right"),
                top: xmlDoc.attrFloat(elem, "top"),
                type: <OpenXml.ST_GradientType>xmlDoc.attrString(elem, "type"),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("gradientFill")
                .attrFloat("bottom", inst.bottom, true)
                .attrFloat("degree", inst.degree, true)
                .attrFloat("left", inst.left, true)
                .attrFloat("right", inst.right, true)
                .attrFloat("top", inst.bottom, true)
                .attrString("type", inst.type, true)
                .element;
            if (inst.stops) { xmlDoc.addChilds(elem, xmlDoc.writeMulti(GradientStop.write, inst.stops)); }
            return elem;
        }
    };


    export var GradientStop: OpenXmlIo.ReadWrite<OpenXml.GradientStop> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "stop", "gradientFill");
            var colorElem = xmlDoc.queryOneChild(elem, "color");

            return {
                color: Color.read(xmlDoc, colorElem, "color"),
                position: xmlDoc.attrFloat(elem, "position") ?? 0,
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("stop")
                .attrFloat("position", inst.position)
                .element;
            if (inst.color) { elem.appendChild(Color.write(xmlDoc, inst.color, "color")); }
            return elem;
        }
    };


    export var IndexedColors: OpenXmlIo.ReadWrite<OpenXml.IndexedColors> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "indexedColors", "colors");
            var rgbColorElems = xmlDoc.queryAllChilds(elem, "rgbColor");
            return {
                rgbColors: xmlDoc.readMulti(RgbColor.read, rgbColorElems),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("indexedColors");
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(RgbColor.write, inst.rgbColors));
            return elem;
        }
    };


    export var MruColors: OpenXmlIo.ReadWrite<OpenXml.MruColors> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "mruColors", "styleSheet");
            var colorElems = xmlDoc.queryAllChilds(elem, "colors");

            return {
                colors: xmlDoc.readMulti(Color.read, colorElems, "color"),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("mruColors");
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Color.write, inst.colors, "color"));
            return elem;
        }
    };


    export var NumberingFormat: OpenXmlIo.ReadWrite<OpenXml.NumberingFormat> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "numFmt", "dxf, ndxf, numFmts, odxf");
            return {
                formatCode: xmlDoc.attrString(elem, "formatCode") ?? "",
                numFmtId: xmlDoc.attrInt(elem, "numFmtId") ?? 0,
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("numFmt")
                .attrInt("numFmtId", inst.numFmtId)
                .attrString("formatCode", inst.formatCode)
                .element;
            return elem;
        }
    };


    export var NumberingFormats: OpenXmlIo.ReadWrite<OpenXml.NumberingFormats> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "numFmts", "styleSheet");
            var numFmtElems = xmlDoc.queryAllChilds(elem, "numFmt");

            return {
                numFmts: xmlDoc.readMulti(NumberingFormat.read, numFmtElems),
                count: xmlDoc.attrInt(elem, "count") ?? numFmtElems.length,
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("numFmts")
                .attrInt("count", inst.count, true)
                .element;
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(NumberingFormat.write, inst.numFmts));
            return elem;
        }
    };


    export var PatternFill: OpenXmlIo.ReadWrite<OpenXml.PatternFill> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "patternFill", "dxfs, rfmt");
            var bgColorElem = xmlDoc.queryOneChild(elem, "bgColor", false);
            var fgColorElem = xmlDoc.queryOneChild(elem, "fgColor", false);

            return {
                fgColor: fgColorElem ? Color.read(xmlDoc, fgColorElem, "fgColor") : null,
                bgColor: bgColorElem ? Color.read(xmlDoc, bgColorElem, "bgColor") : null,
                patternType: <OpenXml.ST_PatternType | null>xmlDoc.attrString(elem, "patternType"),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("patternFill")
                .attrString("patternType", inst.patternType, true)
                .element;
            if (inst.bgColor) { elem.appendChild(Color.write(xmlDoc, inst.bgColor, "bgColor")); }
            if (inst.fgColor) { elem.appendChild(Color.write(xmlDoc, inst.fgColor, "fgColor")); }
            return elem;
        }
    };


    export var Protection: OpenXmlIo.ReadWrite<OpenXml.Protection> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "protection", "dxf, ndxf, odxf, xf");
            return {
                hidden: xmlDoc.attrBool(elem, "hidden"),
                locked: xmlDoc.attrBool(elem, "locked"),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("protection")
                .attrBool("hidden", inst.hidden, true, "1", "0")
                .attrBool("locked", inst.locked, true, "1", "0")
                .element;
            return elem;
        }
    };


    export var RgbColor: OpenXmlIo.ReadWrite<OpenXml.RgbColor> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "rgbColor", "indexedColors");
            var rgbStr = xmlDoc.attrString(elem, "rgb");

            return {
                rgb: rgbStr ? parseInt(rgbStr, 16) : null,
            };
        },

        write(xmlDoc, inst) {
            var rgbStr = typeof inst.rgb === "number" ? inst.rgb.toString(16).toUpperCase() : inst.rgb;
            var elem = xmlDoc.domBldr.create("rgbColor")
                .attrString("rgb", rgbStr, true)
                .element;
            return elem;
        }
    };


    export var TableStyle: OpenXmlIo.ReadWrite<OpenXml.TableStyle> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "tableStyle", "tableStyles");
            var tableStyleElementElems = xmlDoc.queryAllChilds(elem, "tableStyleElement");

            return {
                tableStyleElements: xmlDoc.readMulti(TableStyleElement.read, tableStyleElementElems, "tableStyleElement"),
                count: xmlDoc.attrInt(elem, "count") ?? tableStyleElementElems.length,
                name: xmlDoc.attrString(elem, "name") ?? "",
                pivot: xmlDoc.attrBool(elem, "pivot"),
                table: xmlDoc.attrBool(elem, "table"),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("tableStyle")
                .attrInt("count", inst.count, true)
                .attrString("name", inst.name)
                .attrBool("pivot", inst.pivot, true)
                .attrBool("table", inst.table, true)
                .element;
            if (inst.tableStyleElements) { xmlDoc.addChilds(elem, xmlDoc.writeMulti(TableStyleElement.write, inst.tableStyleElements)); }
            return elem;
        }
    };


    export var TableStyleElement: OpenXmlIo.ReadWrite<OpenXml.TableStyleElement> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "tableStyleElement", "tableStyle");
            return {
                dxfId: xmlDoc.attrInt(elem, "dxfId"),
                size: xmlDoc.attrInt(elem, "size"),
                type: <OpenXml.ST_TableStyleType>xmlDoc.attrString(elem, "type"),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("tableStyleElement")
                .attrInt("dxfId", inst.dxfId, true)
                .attrInt("size", inst.size, true)
                .attrString("type", inst.type)
                .element;
            return elem;
        }
    };


    export var TableStyles: OpenXmlIo.ReadWrite<OpenXml.TableStyles> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "tableStyles", "styleSheet");
            var tableStyleElems = xmlDoc.queryAllChilds(elem, "tableStyle");

            return {
                tableStyles: xmlDoc.readMulti(TableStyle.read, tableStyleElems),
                count: xmlDoc.attrInt(elem, "count") ?? tableStyleElems.length,
                defaultPivotStyle: xmlDoc.attrString(elem, "defaultPivotStyle"),
                defaultTableStyle: xmlDoc.attrString(elem, "defaultTableStyle"),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("tableStyles")
                .attrInt("count", inst.count, true)
                .attrString("defaultPivotStyle", inst.defaultPivotStyle, true)
                .attrString("defaultTableStyle", inst.defaultTableStyle, true)
                .element;
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(TableStyle.write, inst.tableStyles));
            return elem;
        }
    };


    export var Underline: OpenXmlIo.ReadWriteCopy<OpenXml.Underline> = {
        read(xmlDoc, elem) {
            return <{ val: OpenXml.ST_UnderlineValues }>StringAttribute.read(xmlDoc, elem, "u", "font, rPr");
        },

        write(xmlDoc, inst) {
            return StringAttribute.write(xmlDoc, inst, "u");
        },

        copy(inst) {
            return <{ val: OpenXml.ST_UnderlineValues }>StringAttribute.copy(inst);
        }
    };


    export var VerticalTextAlignment: OpenXmlIo.ReadWriteCopy<OpenXml.VerticalTextAlignment> = {
        read(xmlDoc, elem) {
            return <{ val: OpenXml.ST_VerticalAlignRun }>StringAttribute.read(xmlDoc, elem, "vertAlign", "font, rPr");
        },

        write(xmlDoc, inst) {
            return StringAttribute.write(xmlDoc, inst, "vertAlign");
        },

        copy(inst) {
            return <{ val: OpenXml.ST_VerticalAlignRun }>StringAttribute.copy(inst);
        }
    };

}

export = Stylesheet;