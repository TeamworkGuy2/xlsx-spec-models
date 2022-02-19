"use strict";
var BooleanAttribute = require("../types/BooleanAttribute");
var BorderProperty = require("../types/BorderProperty");
var IntAttribute = require("../types/IntAttribute");
var StringAttribute = require("../types/StringAttribute");
var Bold = require("../types/Bold");
var Color = require("../types/Color");
var FontFamily = require("../types/FontFamily");
var FontSize = require("../types/FontSize");
var Stylesheet;
(function (Stylesheet_1) {
    Stylesheet_1.Stylesheet = {
        read: function (xmlDoc, elem) {
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
                borders: bordersElem ? Stylesheet_1.Borders.read(xmlDoc, bordersElem) : null,
                cellStyles: cellStylesElem ? Stylesheet_1.CellStyles.read(xmlDoc, cellStylesElem) : null,
                cellStyleXfs: cellStyleXfsElem ? Stylesheet_1.CellStyleFormats.read(xmlDoc, cellStyleXfsElem) : null,
                cellXfs: cellXfsElems ? Stylesheet_1.CellFormats.read(xmlDoc, cellXfsElems) : null,
                colors: colorsElem ? Stylesheet_1.Colors.read(xmlDoc, colorsElem) : null,
                dxfs: dxfsElem ? Stylesheet_1.DifferentialFormats.read(xmlDoc, dxfsElem) : null,
                fills: fillsElem ? Stylesheet_1.Fills.read(xmlDoc, fillsElem) : null,
                fonts: fontsElem ? Stylesheet_1.Fonts.read(xmlDoc, fontsElem) : null,
                numFmts: numFmtsElem ? Stylesheet_1.NumberingFormats.read(xmlDoc, numFmtsElem) : null,
                tableStyles: tableStylesElem ? Stylesheet_1.TableStyles.read(xmlDoc, tableStylesElem) : null,
                extLst: extLstElem,
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("styleSheet");
            if (inst.numFmts) {
                elem.appendChild(Stylesheet_1.NumberingFormats.write(xmlDoc, inst.numFmts));
            }
            if (inst.fonts) {
                elem.appendChild(Stylesheet_1.Fonts.write(xmlDoc, inst.fonts));
            }
            if (inst.fills) {
                elem.appendChild(Stylesheet_1.Fills.write(xmlDoc, inst.fills));
            }
            if (inst.borders) {
                elem.appendChild(Stylesheet_1.Borders.write(xmlDoc, inst.borders));
            }
            if (inst.cellStyleXfs) {
                elem.appendChild(Stylesheet_1.CellStyleFormats.write(xmlDoc, inst.cellStyleXfs));
            }
            if (inst.cellXfs) {
                elem.appendChild(Stylesheet_1.CellFormats.write(xmlDoc, inst.cellXfs));
            }
            if (inst.cellStyles) {
                elem.appendChild(Stylesheet_1.CellStyles.write(xmlDoc, inst.cellStyles));
            }
            if (inst.dxfs) {
                elem.appendChild(Stylesheet_1.DifferentialFormats.write(xmlDoc, inst.dxfs));
            }
            if (inst.tableStyles) {
                elem.appendChild(Stylesheet_1.TableStyles.write(xmlDoc, inst.tableStyles));
            }
            if (inst.colors) {
                elem.appendChild(Stylesheet_1.Colors.write(xmlDoc, inst.colors));
            }
            if (inst.extLst) {
                elem.appendChild(inst.extLst);
            }
            return elem;
        }
    };
    Stylesheet_1.Alignment = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "alignment", "dxf, ndxf, odxf, xf");
            return {
                horizontal: xmlDoc.attrString(elem, "horizontal"),
                indent: xmlDoc.attrInt(elem, "indent"),
                justifyLastLine: xmlDoc.attrBool(elem, "justifyLastLine"),
                readingOrder: xmlDoc.attrInt(elem, "readingOrder"),
                relativeIndent: xmlDoc.attrInt(elem, "relativeIndent"),
                shrinkToFit: xmlDoc.attrBool(elem, "shrinkToFit"),
                textRotation: xmlDoc.attrFloat(elem, "textRotation"),
                vertical: xmlDoc.attrString(elem, "vertical"),
                wrapText: xmlDoc.attrBool(elem, "wrapText"),
            };
        },
        write: function (xmlDoc, inst) {
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
    Stylesheet_1.Border = {
        read: function (xmlDoc, elem) {
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
                bottom: bottomElem ? Stylesheet_1.BottomBorder.read(xmlDoc, bottomElem) : null,
                diagonal: diagonalElem ? Stylesheet_1.DiagonalBorder.read(xmlDoc, diagonalElem) : null,
                end: endElem ? Stylesheet_1.EndBorder.read(xmlDoc, endElem) : null,
                horizontal: horizontalElem ? Stylesheet_1.HorizontalBorder.read(xmlDoc, horizontalElem) : null,
                start: startElem ? Stylesheet_1.StartBorder.read(xmlDoc, startElem) : null,
                top: topElem ? Stylesheet_1.TopBorder.read(xmlDoc, topElem) : null,
                vertical: verticlaElem ? Stylesheet_1.VerticalBorder.read(xmlDoc, verticlaElem) : null,
                diagonalDown: xmlDoc.attrBool(elem, "diagonalDown"),
                diagonalUp: xmlDoc.attrBool(elem, "diagonalUp"),
                outline: xmlDoc.attrBool(elem, "outline"),
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("border")
                .attrBool("diagonalDown", inst.diagonalDown, true, "1", "0")
                .attrBool("diagonalUp", inst.diagonalUp, true, "1", "0")
                .attrBool("outline", inst.outline, true, "1", "0")
                .element;
            if (inst.left) {
                elem.appendChild(BorderProperty.write(xmlDoc, inst.left, "left"));
            }
            if (inst.right) {
                elem.appendChild(BorderProperty.write(xmlDoc, inst.right, "right"));
            }
            if (inst.top) {
                elem.appendChild(Stylesheet_1.TopBorder.write(xmlDoc, inst.top));
            }
            if (inst.bottom) {
                elem.appendChild(Stylesheet_1.BottomBorder.write(xmlDoc, inst.bottom));
            }
            if (inst.diagonal) {
                elem.appendChild(Stylesheet_1.DiagonalBorder.write(xmlDoc, inst.diagonal));
            }
            if (inst.end) {
                elem.appendChild(Stylesheet_1.EndBorder.write(xmlDoc, inst.end));
            }
            if (inst.horizontal) {
                elem.appendChild(Stylesheet_1.HorizontalBorder.write(xmlDoc, inst.horizontal));
            }
            if (inst.start) {
                elem.appendChild(Stylesheet_1.StartBorder.write(xmlDoc, inst.start));
            }
            if (inst.vertical) {
                elem.appendChild(Stylesheet_1.VerticalBorder.write(xmlDoc, inst.vertical));
            }
            return elem;
        }
    };
    Stylesheet_1.Borders = {
        read: function (xmlDoc, elem) {
            var _a;
            xmlDoc.validator.expectNode(elem, "borders", "styleSheet");
            var borderElems = xmlDoc.queryAllChilds(elem, "border");
            return {
                borders: xmlDoc.readMulti(Stylesheet_1.Border.read, borderElems),
                count: (_a = xmlDoc.attrInt(elem, "count")) !== null && _a !== void 0 ? _a : borderElems.length,
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("borders")
                .attrInt("count", inst.count, true)
                .element;
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Stylesheet_1.Border.write, inst.borders));
            return elem;
        }
    };
    Stylesheet_1.BottomBorder = {
        read: function (xmlDoc, elem) {
            return BorderProperty.read(xmlDoc, elem, "bottom", "border");
        },
        write: function (xmlDoc, inst) {
            return BorderProperty.write(xmlDoc, inst, "bottom");
        }
    };
    Stylesheet_1.DiagonalBorder = {
        read: function (xmlDoc, elem) {
            return BorderProperty.read(xmlDoc, elem, "diagonal", "border");
        },
        write: function (xmlDoc, inst) {
            return BorderProperty.write(xmlDoc, inst, "diagonal");
        }
    };
    Stylesheet_1.EndBorder = {
        read: function (xmlDoc, elem) {
            return BorderProperty.read(xmlDoc, elem, "end", "border");
        },
        write: function (xmlDoc, inst) {
            return BorderProperty.write(xmlDoc, inst, "end");
        }
    };
    Stylesheet_1.HorizontalBorder = {
        read: function (xmlDoc, elem) {
            return BorderProperty.read(xmlDoc, elem, "horizontal", "border");
        },
        write: function (xmlDoc, inst) {
            return BorderProperty.write(xmlDoc, inst, "horizontal");
        }
    };
    Stylesheet_1.StartBorder = {
        read: function (xmlDoc, elem) {
            return BorderProperty.read(xmlDoc, elem, "start", "border");
        },
        write: function (xmlDoc, inst) {
            return BorderProperty.write(xmlDoc, inst, "start");
        }
    };
    Stylesheet_1.TopBorder = {
        read: function (xmlDoc, elem) {
            return BorderProperty.read(xmlDoc, elem, "top", "border");
        },
        write: function (xmlDoc, inst) {
            return BorderProperty.write(xmlDoc, inst, "top");
        }
    };
    Stylesheet_1.VerticalBorder = {
        read: function (xmlDoc, elem) {
            return BorderProperty.read(xmlDoc, elem, "vertical", "border");
        },
        write: function (xmlDoc, inst) {
            return BorderProperty.write(xmlDoc, inst, "vertical");
        }
    };
    Stylesheet_1.CellFormat = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "xf", "cellStyleXfs, cellXfs");
            var alignmentElem = xmlDoc.queryOneChild(elem, "alignment", false);
            var protectionElem = xmlDoc.queryOneChild(elem, "protection", false);
            return {
                alignment: alignmentElem ? Stylesheet_1.Alignment.read(xmlDoc, alignmentElem) : null,
                protection: protectionElem ? Stylesheet_1.Protection.read(xmlDoc, protectionElem) : null,
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
        write: function (xmlDoc, inst) {
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
            if (inst.alignment) {
                elem.appendChild(Stylesheet_1.Alignment.write(xmlDoc, inst.alignment));
            }
            if (inst.protection) {
                elem.appendChild(Stylesheet_1.Protection.write(xmlDoc, inst.protection));
            }
            return elem;
        }
    };
    Stylesheet_1.CellFormats = {
        read: function (xmlDoc, elem) {
            var _a;
            xmlDoc.validator.expectNode(elem, "cellXfs", "styleSheet");
            var cellFormatElems = xmlDoc.queryAllChilds(elem, "xf");
            return {
                xfs: xmlDoc.readMulti(Stylesheet_1.CellFormat.read, cellFormatElems),
                count: (_a = xmlDoc.attrInt(elem, "count")) !== null && _a !== void 0 ? _a : cellFormatElems.length,
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("cellXfs")
                .attrInt("count", inst.count, true)
                .element;
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Stylesheet_1.CellFormat.write, inst.xfs));
            return elem;
        }
    };
    Stylesheet_1.CellStyle = {
        read: function (xmlDoc, elem) {
            var _a;
            xmlDoc.validator.expectNode(elem, "cellStyle", "cellStyles");
            return {
                builtinId: xmlDoc.attrInt(elem, "builtinId"),
                customBuiltin: xmlDoc.attrBool(elem, "customBuiltin"),
                hidden: xmlDoc.attrBool(elem, "hidden"),
                iLevel: xmlDoc.attrInt(elem, "iLevel"),
                name: xmlDoc.attrString(elem, "name"),
                xfId: (_a = xmlDoc.attrInt(elem, "xfId")) !== null && _a !== void 0 ? _a : 0,
            };
        },
        write: function (xmlDoc, inst) {
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
    Stylesheet_1.CellStyleFormats = {
        read: function (xmlDoc, elem) {
            var _a;
            xmlDoc.validator.expectNode(elem, "cellStyleXfs", "styleSheet");
            var cellFormatElems = xmlDoc.queryAllChilds(elem, "xf");
            return {
                xfs: xmlDoc.readMulti(Stylesheet_1.CellFormat.read, cellFormatElems),
                count: (_a = xmlDoc.attrInt(elem, "count")) !== null && _a !== void 0 ? _a : cellFormatElems.length,
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("cellStyleXfs")
                .attrInt("count", inst.count, true)
                .element;
            var cellFormatElems = xmlDoc.writeMulti(Stylesheet_1.CellFormat.write, inst.xfs);
            xmlDoc.addChilds(elem, cellFormatElems);
            return elem;
        }
    };
    Stylesheet_1.CellStyles = {
        read: function (xmlDoc, elem) {
            var _a;
            xmlDoc.validator.expectNode(elem, "cellStyles", "styleSheet");
            var cellStyleElems = xmlDoc.queryAllChilds(elem, "cellStyle");
            return {
                cellStyles: xmlDoc.readMulti(Stylesheet_1.CellStyle.read, cellStyleElems),
                count: (_a = xmlDoc.attrInt(elem, "count")) !== null && _a !== void 0 ? _a : cellStyleElems.length,
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("cellStyles")
                .attrInt("count", inst.count, true)
                .element;
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Stylesheet_1.CellStyle.write, inst.cellStyles));
            return elem;
        }
    };
    Stylesheet_1.Colors = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "colors", "styleSheet");
            var indexedColorElem = xmlDoc.queryOneChild(elem, "indexedColors", false);
            var mruColorElem = xmlDoc.queryOneChild(elem, "mruColors", false);
            return {
                indexedColors: indexedColorElem ? Stylesheet_1.IndexedColors.read(xmlDoc, indexedColorElem) : null,
                mruColors: mruColorElem ? Stylesheet_1.MruColors.read(xmlDoc, mruColorElem) : null,
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("cellXfs");
            if (inst.indexedColors) {
                elem.appendChild(Stylesheet_1.IndexedColors.write(xmlDoc, inst.indexedColors));
            }
            if (inst.mruColors) {
                elem.appendChild(Stylesheet_1.MruColors.write(xmlDoc, inst.mruColors));
            }
            return elem;
        }
    };
    Stylesheet_1.DifferentialFormat = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "dxf", "dxfs, rfmt");
            var alignmentElem = xmlDoc.queryOneChild(elem, "alignment", false);
            var borderElem = xmlDoc.queryOneChild(elem, "border", false);
            var fillElem = xmlDoc.queryOneChild(elem, "fill", false);
            var fontElem = xmlDoc.queryOneChild(elem, "font", false);
            var numFmtElem = xmlDoc.queryOneChild(elem, "numFmt", false);
            var protectionElem = xmlDoc.queryOneChild(elem, "protection", false);
            return {
                alignment: alignmentElem ? Stylesheet_1.Alignment.read(xmlDoc, alignmentElem) : null,
                border: borderElem ? Stylesheet_1.Border.read(xmlDoc, borderElem) : null,
                fill: fillElem ? Stylesheet_1.Fill.read(xmlDoc, fillElem) : null,
                font: fontElem ? Stylesheet_1.Font.read(xmlDoc, fontElem) : null,
                numFmt: numFmtElem ? Stylesheet_1.NumberingFormat.read(xmlDoc, numFmtElem) : null,
                protection: protectionElem ? Stylesheet_1.Protection.read(xmlDoc, protectionElem) : null,
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("dxf");
            if (inst.alignment) {
                elem.appendChild(Stylesheet_1.Alignment.write(xmlDoc, inst.alignment));
            }
            if (inst.border) {
                elem.appendChild(Stylesheet_1.Border.write(xmlDoc, inst.border));
            }
            if (inst.fill) {
                elem.appendChild(Stylesheet_1.Fill.write(xmlDoc, inst.fill));
            }
            if (inst.font) {
                elem.appendChild(Stylesheet_1.Font.write(xmlDoc, inst.font));
            }
            if (inst.numFmt) {
                elem.appendChild(Stylesheet_1.NumberingFormat.write(xmlDoc, inst.numFmt));
            }
            if (inst.protection) {
                elem.appendChild(Stylesheet_1.Protection.write(xmlDoc, inst.protection));
            }
            return elem;
        }
    };
    Stylesheet_1.DifferentialFormats = {
        read: function (xmlDoc, elem) {
            var _a;
            xmlDoc.validator.expectNode(elem, "dxfs", "styleSheet");
            var dxfElems = xmlDoc.queryAllChilds(elem, "dxf");
            return {
                dxfs: xmlDoc.readMulti(Stylesheet_1.DifferentialFormat.read, dxfElems),
                count: (_a = xmlDoc.attrInt(elem, "count")) !== null && _a !== void 0 ? _a : dxfElems.length,
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("dxfs")
                .attrInt("count", inst.count, true)
                .element;
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Stylesheet_1.DifferentialFormat.write, inst.dxfs));
            return elem;
        }
    };
    Stylesheet_1.Fill = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "fill", "dxf, fills, ndxf, odxf");
            var gradientFillElem = xmlDoc.queryOneChild(elem, "gradientFill", false);
            var patternFillElem = xmlDoc.queryOneChild(elem, "patternFill", false);
            return {
                gradientFill: gradientFillElem ? Stylesheet_1.GradientFill.read(xmlDoc, gradientFillElem) : null,
                patternFill: patternFillElem ? Stylesheet_1.PatternFill.read(xmlDoc, patternFillElem) : null,
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("fill");
            if (inst.gradientFill) {
                elem.appendChild(Stylesheet_1.GradientFill.write(xmlDoc, inst.gradientFill));
            }
            if (inst.patternFill) {
                elem.appendChild(Stylesheet_1.PatternFill.write(xmlDoc, inst.patternFill));
            }
            return elem;
        }
    };
    Stylesheet_1.Fills = {
        read: function (xmlDoc, elem) {
            var _a;
            xmlDoc.validator.expectNode(elem, "fills", "styleSheet");
            var fillElems = xmlDoc.queryAllChilds(elem, "fill");
            return {
                fills: xmlDoc.readMulti(Stylesheet_1.Fill.read, fillElems),
                count: (_a = xmlDoc.attrInt(elem, "count")) !== null && _a !== void 0 ? _a : fillElems.length,
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("fills")
                .attrInt("count", inst.count, true)
                .element;
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Stylesheet_1.Fill.write, inst.fills));
            return elem;
        }
    };
    Stylesheet_1.Font = {
        read: function (xmlDoc, elem) {
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
                charset: charsetElem ? Stylesheet_1.FontCharSet.read(xmlDoc, charsetElem) : null,
                color: colorElem ? Color.read(xmlDoc, colorElem, "color") : null,
                condense: condenseElem ? BooleanAttribute.read(xmlDoc, condenseElem, "condense", "font, rPr") : null,
                extend: extendElem ? BooleanAttribute.read(xmlDoc, extendElem, "extend", "font, rPr") : null,
                family: familyElem ? FontFamily.read(xmlDoc, familyElem) : null,
                i: iElem ? BooleanAttribute.read(xmlDoc, iElem, "i", "font, rPr") : null,
                name: nameElem ? Stylesheet_1.FontName.read(xmlDoc, nameElem) : null,
                outline: outlineElem ? BooleanAttribute.read(xmlDoc, outlineElem, "outline", "font, rPr") : null,
                scheme: schemeElem ? Stylesheet_1.FontScheme.read(xmlDoc, schemeElem) : null,
                shadow: shadowElem ? BooleanAttribute.read(xmlDoc, shadowElem, "shadow", "font, rPr") : null,
                strike: strikeElem ? BooleanAttribute.read(xmlDoc, strikeElem, "strike", "font, rPr") : null,
                sz: szElem ? FontSize.read(xmlDoc, szElem) : null,
                u: uElem ? Stylesheet_1.Underline.read(xmlDoc, uElem) : null,
                vertAlign: vertAlignElem ? Stylesheet_1.VerticalTextAlignment.read(xmlDoc, vertAlignElem) : null,
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("font");
            if (inst.b && inst.b.val) {
                elem.appendChild(Bold.write(xmlDoc, inst.b, "b"));
            }
            if (inst.sz) {
                elem.appendChild(FontSize.write(xmlDoc, inst.sz));
            }
            if (inst.charset) {
                elem.appendChild(Stylesheet_1.FontCharSet.write(xmlDoc, inst.charset));
            }
            if (inst.color) {
                elem.appendChild(Color.write(xmlDoc, inst.color, "color"));
            }
            if (inst.condense) {
                elem.appendChild(BooleanAttribute.write(xmlDoc, inst.condense, "condense"));
            }
            if (inst.extend) {
                elem.appendChild(BooleanAttribute.write(xmlDoc, inst.extend, "extend"));
            }
            if (inst.name) {
                elem.appendChild(Stylesheet_1.FontName.write(xmlDoc, inst.name));
            }
            if (inst.family) {
                elem.appendChild(FontFamily.write(xmlDoc, inst.family));
            }
            if (inst.i) {
                elem.appendChild(BooleanAttribute.write(xmlDoc, inst.i, "i"));
            }
            if (inst.outline) {
                elem.appendChild(BooleanAttribute.write(xmlDoc, inst.outline, "outline"));
            }
            if (inst.scheme) {
                elem.appendChild(Stylesheet_1.FontScheme.write(xmlDoc, inst.scheme));
            }
            if (inst.shadow) {
                elem.appendChild(BooleanAttribute.write(xmlDoc, inst.shadow, "shadow"));
            }
            if (inst.strike) {
                elem.appendChild(BooleanAttribute.write(xmlDoc, inst.strike, "strike"));
            }
            if (inst.u) {
                elem.appendChild(Stylesheet_1.Underline.write(xmlDoc, inst.u));
            }
            if (inst.vertAlign) {
                elem.appendChild(Stylesheet_1.VerticalTextAlignment.write(xmlDoc, inst.vertAlign));
            }
            return elem;
        }
    };
    Stylesheet_1.FontCharSet = {
        read: function (xmlDoc, elem) {
            return IntAttribute.read(xmlDoc, elem, "charset");
        },
        write: function (xmlDoc, inst) {
            return IntAttribute.write(xmlDoc, inst, "charset");
        },
        copy: function (inst) {
            return IntAttribute.copy(inst);
        }
    };
    Stylesheet_1.FontName = {
        read: function (xmlDoc, elem) {
            return StringAttribute.read(xmlDoc, elem, "name");
        },
        write: function (xmlDoc, inst) {
            return StringAttribute.write(xmlDoc, inst, "name");
        },
        copy: function (inst) {
            return StringAttribute.copy(inst);
        }
    };
    Stylesheet_1.Fonts = {
        read: function (xmlDoc, elem) {
            var _a;
            xmlDoc.validator.expectNode(elem, "fonts", "styleSheet");
            var fontElems = xmlDoc.queryAllChilds(elem, "font");
            return {
                fonts: xmlDoc.readMulti(Stylesheet_1.Font.read, fontElems),
                count: (_a = xmlDoc.attrInt(elem, "count")) !== null && _a !== void 0 ? _a : fontElems.length,
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("fonts")
                .attrInt("count", inst.count, true)
                .element;
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Stylesheet_1.Font.write, inst.fonts));
            return elem;
        }
    };
    Stylesheet_1.FontScheme = {
        read: function (xmlDoc, elem) {
            return StringAttribute.read(xmlDoc, elem, "scheme", "font, rPr");
        },
        write: function (xmlDoc, inst) {
            return StringAttribute.write(xmlDoc, inst, "scheme");
        }
    };
    Stylesheet_1.GradientFill = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "gradientFill", "fill");
            var stopElems = xmlDoc.queryAllChilds(elem, "stop");
            return {
                stops: xmlDoc.readMulti(Stylesheet_1.GradientStop.read, stopElems),
                bottom: xmlDoc.attrFloat(elem, "bottom"),
                degree: xmlDoc.attrFloat(elem, "degree"),
                left: xmlDoc.attrFloat(elem, "left"),
                right: xmlDoc.attrFloat(elem, "right"),
                top: xmlDoc.attrFloat(elem, "top"),
                type: xmlDoc.attrString(elem, "type"),
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("gradientFill")
                .attrFloat("bottom", inst.bottom, true)
                .attrFloat("degree", inst.degree, true)
                .attrFloat("left", inst.left, true)
                .attrFloat("right", inst.right, true)
                .attrFloat("top", inst.bottom, true)
                .attrString("type", inst.type, true)
                .element;
            if (inst.stops) {
                xmlDoc.addChilds(elem, xmlDoc.writeMulti(Stylesheet_1.GradientStop.write, inst.stops));
            }
            return elem;
        }
    };
    Stylesheet_1.GradientStop = {
        read: function (xmlDoc, elem) {
            var _a;
            xmlDoc.validator.expectNode(elem, "stop", "gradientFill");
            var colorElem = xmlDoc.queryOneChild(elem, "color");
            return {
                color: Color.read(xmlDoc, colorElem, "color"),
                position: (_a = xmlDoc.attrFloat(elem, "position")) !== null && _a !== void 0 ? _a : 0,
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("stop")
                .attrFloat("position", inst.position)
                .element;
            if (inst.color) {
                elem.appendChild(Color.write(xmlDoc, inst.color, "color"));
            }
            return elem;
        }
    };
    Stylesheet_1.IndexedColors = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "indexedColors", "colors");
            var rgbColorElems = xmlDoc.queryAllChilds(elem, "rgbColor");
            return {
                rgbColors: xmlDoc.readMulti(Stylesheet_1.RgbColor.read, rgbColorElems),
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("indexedColors");
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Stylesheet_1.RgbColor.write, inst.rgbColors));
            return elem;
        }
    };
    Stylesheet_1.MruColors = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "mruColors", "styleSheet");
            var colorElems = xmlDoc.queryAllChilds(elem, "colors");
            return {
                colors: xmlDoc.readMulti(Color.read, colorElems, "color"),
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("mruColors");
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Color.write, inst.colors, "color"));
            return elem;
        }
    };
    Stylesheet_1.NumberingFormat = {
        read: function (xmlDoc, elem) {
            var _a, _b;
            xmlDoc.validator.expectNode(elem, "numFmt", "dxf, ndxf, numFmts, odxf");
            return {
                formatCode: (_a = xmlDoc.attrString(elem, "formatCode")) !== null && _a !== void 0 ? _a : "",
                numFmtId: (_b = xmlDoc.attrInt(elem, "numFmtId")) !== null && _b !== void 0 ? _b : 0,
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("numFmt")
                .attrInt("numFmtId", inst.numFmtId)
                .attrString("formatCode", inst.formatCode)
                .element;
            return elem;
        }
    };
    Stylesheet_1.NumberingFormats = {
        read: function (xmlDoc, elem) {
            var _a;
            xmlDoc.validator.expectNode(elem, "numFmts", "styleSheet");
            var numFmtElems = xmlDoc.queryAllChilds(elem, "numFmt");
            return {
                numFmts: xmlDoc.readMulti(Stylesheet_1.NumberingFormat.read, numFmtElems),
                count: (_a = xmlDoc.attrInt(elem, "count")) !== null && _a !== void 0 ? _a : numFmtElems.length,
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("numFmts")
                .attrInt("count", inst.count, true)
                .element;
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Stylesheet_1.NumberingFormat.write, inst.numFmts));
            return elem;
        }
    };
    Stylesheet_1.PatternFill = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "patternFill", "dxfs, rfmt");
            var bgColorElem = xmlDoc.queryOneChild(elem, "bgColor", false);
            var fgColorElem = xmlDoc.queryOneChild(elem, "fgColor", false);
            return {
                fgColor: fgColorElem ? Color.read(xmlDoc, fgColorElem, "fgColor") : null,
                bgColor: bgColorElem ? Color.read(xmlDoc, bgColorElem, "bgColor") : null,
                patternType: xmlDoc.attrString(elem, "patternType"),
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("patternFill")
                .attrString("patternType", inst.patternType, true)
                .element;
            if (inst.bgColor) {
                elem.appendChild(Color.write(xmlDoc, inst.bgColor, "bgColor"));
            }
            if (inst.fgColor) {
                elem.appendChild(Color.write(xmlDoc, inst.fgColor, "fgColor"));
            }
            return elem;
        }
    };
    Stylesheet_1.Protection = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "protection", "dxf, ndxf, odxf, xf");
            return {
                hidden: xmlDoc.attrBool(elem, "hidden"),
                locked: xmlDoc.attrBool(elem, "locked"),
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("protection")
                .attrBool("hidden", inst.hidden, true, "1", "0")
                .attrBool("locked", inst.locked, true, "1", "0")
                .element;
            return elem;
        }
    };
    Stylesheet_1.RgbColor = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "rgbColor", "indexedColors");
            var rgbStr = xmlDoc.attrString(elem, "rgb");
            return {
                rgb: rgbStr ? parseInt(rgbStr, 16) : null,
            };
        },
        write: function (xmlDoc, inst) {
            var rgbStr = typeof inst.rgb === "number" ? inst.rgb.toString(16).toUpperCase() : inst.rgb;
            var elem = xmlDoc.domBldr.create("rgbColor")
                .attrString("rgb", rgbStr, true)
                .element;
            return elem;
        }
    };
    Stylesheet_1.TableStyle = {
        read: function (xmlDoc, elem) {
            var _a, _b;
            xmlDoc.validator.expectNode(elem, "tableStyle", "tableStyles");
            var tableStyleElementElems = xmlDoc.queryAllChilds(elem, "tableStyleElement");
            return {
                tableStyleElements: xmlDoc.readMulti(Stylesheet_1.TableStyleElement.read, tableStyleElementElems, "tableStyleElement"),
                count: (_a = xmlDoc.attrInt(elem, "count")) !== null && _a !== void 0 ? _a : tableStyleElementElems.length,
                name: (_b = xmlDoc.attrString(elem, "name")) !== null && _b !== void 0 ? _b : "",
                pivot: xmlDoc.attrBool(elem, "pivot"),
                table: xmlDoc.attrBool(elem, "table"),
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("tableStyle")
                .attrInt("count", inst.count, true)
                .attrString("name", inst.name)
                .attrBool("pivot", inst.pivot, true)
                .attrBool("table", inst.table, true)
                .element;
            if (inst.tableStyleElements) {
                xmlDoc.addChilds(elem, xmlDoc.writeMulti(Stylesheet_1.TableStyleElement.write, inst.tableStyleElements));
            }
            return elem;
        }
    };
    Stylesheet_1.TableStyleElement = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "tableStyleElement", "tableStyle");
            return {
                dxfId: xmlDoc.attrInt(elem, "dxfId"),
                size: xmlDoc.attrInt(elem, "size"),
                type: xmlDoc.attrString(elem, "type"),
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("tableStyleElement")
                .attrInt("dxfId", inst.dxfId, true)
                .attrInt("size", inst.size, true)
                .attrString("type", inst.type)
                .element;
            return elem;
        }
    };
    Stylesheet_1.TableStyles = {
        read: function (xmlDoc, elem) {
            var _a;
            xmlDoc.validator.expectNode(elem, "tableStyles", "styleSheet");
            var tableStyleElems = xmlDoc.queryAllChilds(elem, "tableStyle");
            return {
                tableStyles: xmlDoc.readMulti(Stylesheet_1.TableStyle.read, tableStyleElems),
                count: (_a = xmlDoc.attrInt(elem, "count")) !== null && _a !== void 0 ? _a : tableStyleElems.length,
                defaultPivotStyle: xmlDoc.attrString(elem, "defaultPivotStyle"),
                defaultTableStyle: xmlDoc.attrString(elem, "defaultTableStyle"),
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("tableStyles")
                .attrInt("count", inst.count, true)
                .attrString("defaultPivotStyle", inst.defaultPivotStyle, true)
                .attrString("defaultTableStyle", inst.defaultTableStyle, true)
                .element;
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Stylesheet_1.TableStyle.write, inst.tableStyles));
            return elem;
        }
    };
    Stylesheet_1.Underline = {
        read: function (xmlDoc, elem) {
            return StringAttribute.read(xmlDoc, elem, "u", "font, rPr");
        },
        write: function (xmlDoc, inst) {
            return StringAttribute.write(xmlDoc, inst, "u");
        },
        copy: function (inst) {
            return StringAttribute.copy(inst);
        }
    };
    Stylesheet_1.VerticalTextAlignment = {
        read: function (xmlDoc, elem) {
            return StringAttribute.read(xmlDoc, elem, "vertAlign", "font, rPr");
        },
        write: function (xmlDoc, inst) {
            return StringAttribute.write(xmlDoc, inst, "vertAlign");
        },
        copy: function (inst) {
            return StringAttribute.copy(inst);
        }
    };
})(Stylesheet || (Stylesheet = {}));
module.exports = Stylesheet;
