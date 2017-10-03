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
            var bordersElem = xmlDoc.queryOneChild(elem, "borders");
            var cellStylesElem = xmlDoc.queryOneChild(elem, "cellStyles");
            var cellStyleXfsElem = xmlDoc.queryOneChild(elem, "cellStyleXfs");
            var cellXfsElems = xmlDoc.queryOneChild(elem, "cellXfs");
            var colorsElem = xmlDoc.queryOneChild(elem, "colors");
            var dxfsElem = xmlDoc.queryOneChild(elem, "dxfs");
            var fillsElem = xmlDoc.queryOneChild(elem, "fills");
            var fontsElem = xmlDoc.queryOneChild(elem, "fonts");
            var numFmtsElem = xmlDoc.queryOneChild(elem, "numFmts");
            var tableStylesElem = xmlDoc.queryOneChild(elem, "tableStyles");
            var extLstElem = xmlDoc.queryOneChild(elem, "extLst");
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
            var attrs = elem.attributes;
            return {
                horizontal: xmlDoc.attrString(attrs, "horizontal"),
                indent: xmlDoc.attrInt(attrs, "indent"),
                justifyLastLine: xmlDoc.attrBool(attrs, "justifyLastLine"),
                readingOrder: xmlDoc.attrInt(attrs, "readingOrder"),
                relativeIndent: xmlDoc.attrInt(attrs, "relativeIndent"),
                shrinkToFit: xmlDoc.attrBool(attrs, "shrinkToFit"),
                textRotation: xmlDoc.attrFloat(attrs, "textRotation"),
                vertical: xmlDoc.attrString(attrs, "vertical"),
                wrapText: xmlDoc.attrBool(attrs, "wrapText"),
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
            var bottomElem = xmlDoc.queryOneChild(elem, "bottom");
            var diagonalElem = xmlDoc.queryOneChild(elem, "diagonal");
            var endElem = xmlDoc.queryOneChild(elem, "end");
            var horizontalElem = xmlDoc.queryOneChild(elem, "horizontal");
            var startElem = xmlDoc.queryOneChild(elem, "start");
            var topElem = xmlDoc.queryOneChild(elem, "top");
            var verticlaElem = xmlDoc.queryOneChild(elem, "vertical");
            // these aren't part of the spec, but MS Office 2013 requires them
            var leftElem = xmlDoc.queryOneChild(elem, "left");
            var rightElem = xmlDoc.queryOneChild(elem, "right");
            var attrs = elem.attributes;
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
                diagonalDown: xmlDoc.attrBool(attrs, "diagonalDown"),
                diagonalUp: xmlDoc.attrBool(attrs, "diagonalUp"),
                outline: xmlDoc.attrBool(attrs, "outline"),
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
            xmlDoc.validator.expectNode(elem, "borders", "styleSheet");
            var borderElems = xmlDoc.queryAllChilds(elem, "border");
            var attrs = elem.attributes;
            return {
                borders: xmlDoc.readMulti(Stylesheet_1.Border.read, borderElems),
                count: xmlDoc.attrInt(attrs, "count"),
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
            var attrs = elem.attributes;
            var alignmentElem = xmlDoc.queryOneChild(elem, "alignment");
            var protectionElem = xmlDoc.queryOneChild(elem, "protection");
            return {
                alignment: alignmentElem ? Stylesheet_1.Alignment.read(xmlDoc, alignmentElem) : null,
                protection: protectionElem ? Stylesheet_1.Protection.read(xmlDoc, protectionElem) : null,
                applyAlignment: xmlDoc.attrBool(attrs, "applyAlignment"),
                applyBorder: xmlDoc.attrBool(attrs, "applyBorder"),
                applyFill: xmlDoc.attrBool(attrs, "applyFill"),
                applyFont: xmlDoc.attrBool(attrs, "applyFont"),
                applyNumberFormat: xmlDoc.attrBool(attrs, "applyNumberFormat"),
                applyProtection: xmlDoc.attrBool(attrs, "applyProtection"),
                borderId: xmlDoc.attrInt(attrs, "borderId"),
                fillId: xmlDoc.attrInt(attrs, "fillId"),
                fontId: xmlDoc.attrInt(attrs, "fontId"),
                numFmtId: xmlDoc.attrInt(attrs, "numFmtId"),
                pivotButton: xmlDoc.attrBool(attrs, "pivotButton"),
                quotePrefix: xmlDoc.attrBool(attrs, "quotePrefix"),
                xfId: xmlDoc.attrInt(attrs, "xfId"),
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
            xmlDoc.validator.expectNode(elem, "cellXfs", "styleSheet");
            var cellFormatElems = xmlDoc.queryAllChilds(elem, "xf");
            var attrs = elem.attributes;
            return {
                xfs: xmlDoc.readMulti(Stylesheet_1.CellFormat.read, cellFormatElems),
                count: xmlDoc.attrInt(attrs, "count"),
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
            xmlDoc.validator.expectNode(elem, "cellStyle", "cellStyles");
            var attrs = elem.attributes;
            return {
                builtinId: xmlDoc.attrInt(attrs, "builtinId"),
                customBuiltin: xmlDoc.attrBool(attrs, "customBuiltin"),
                hidden: xmlDoc.attrBool(attrs, "hidden"),
                iLevel: xmlDoc.attrInt(attrs, "iLevel"),
                name: xmlDoc.attrString(attrs, "name"),
                xfId: xmlDoc.attrInt(attrs, "xfId"),
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
            xmlDoc.validator.expectNode(elem, "cellStyleXfs", "styleSheet");
            var cellFormatElems = xmlDoc.queryAllChilds(elem, "xf");
            var attrs = elem.attributes;
            return {
                xfs: xmlDoc.readMulti(Stylesheet_1.CellFormat.read, cellFormatElems),
                count: xmlDoc.attrInt(attrs, "count"),
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
            xmlDoc.validator.expectNode(elem, "cellStyles", "styleSheet");
            var cellStyleElems = xmlDoc.queryAllChilds(elem, "cellStyle");
            var attrs = elem.attributes;
            return {
                cellStyles: xmlDoc.readMulti(Stylesheet_1.CellStyle.read, cellStyleElems),
                count: xmlDoc.attrInt(attrs, "count"),
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
            var indexedColorElem = xmlDoc.queryOneChild(elem, "indexedColors");
            var mruColorElem = xmlDoc.queryOneChild(elem, "mruColors");
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
            var alignmentElem = xmlDoc.queryOneChild(elem, "alignment");
            var borderElem = xmlDoc.queryOneChild(elem, "border");
            var fillElem = xmlDoc.queryOneChild(elem, "fill");
            var fontElem = xmlDoc.queryOneChild(elem, "font");
            var numFmtElem = xmlDoc.queryOneChild(elem, "numFmt");
            var protectionElem = xmlDoc.queryOneChild(elem, "protection");
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
            xmlDoc.validator.expectNode(elem, "dxfs", "styleSheet");
            var dxfElems = xmlDoc.queryAllChilds(elem, "dxf");
            var attrs = elem.attributes;
            return {
                dxfs: xmlDoc.readMulti(Stylesheet_1.DifferentialFormat.read, dxfElems),
                count: xmlDoc.attrInt(attrs, "count"),
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
            var gradientFillElem = xmlDoc.queryOneChild(elem, "gradientFill");
            var patternFillElem = xmlDoc.queryOneChild(elem, "patternFill");
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
            xmlDoc.validator.expectNode(elem, "fills", "styleSheet");
            var fillElems = xmlDoc.queryAllChilds(elem, "fill");
            var attrs = elem.attributes;
            return {
                fills: xmlDoc.readMulti(Stylesheet_1.Fill.read, fillElems),
                count: xmlDoc.attrInt(attrs, "count"),
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
            var bElem = xmlDoc.queryOneChild(elem, "b");
            var charsetElem = xmlDoc.queryOneChild(elem, "charset");
            var colorElem = xmlDoc.queryOneChild(elem, "color");
            var condenseElem = xmlDoc.queryOneChild(elem, "condense");
            var extendElem = xmlDoc.queryOneChild(elem, "extend");
            var familyElem = xmlDoc.queryOneChild(elem, "family");
            var iElem = xmlDoc.queryOneChild(elem, "i");
            var nameElem = xmlDoc.queryOneChild(elem, "name");
            var outlineElem = xmlDoc.queryOneChild(elem, "outline");
            var schemeElem = xmlDoc.queryOneChild(elem, "scheme");
            var shadowElem = xmlDoc.queryOneChild(elem, "shadow");
            var strikeElem = xmlDoc.queryOneChild(elem, "strike");
            var szElem = xmlDoc.queryOneChild(elem, "sz");
            var uElem = xmlDoc.queryOneChild(elem, "u");
            var vertAlignElem = xmlDoc.queryOneChild(elem, "vertAlign");
            var attrs = elem.attributes;
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
            xmlDoc.validator.expectNode(elem, "fonts", "styleSheet");
            var fontElems = xmlDoc.queryAllChilds(elem, "font");
            var attrs = elem.attributes;
            return {
                fonts: xmlDoc.readMulti(Stylesheet_1.Font.read, fontElems),
                count: xmlDoc.attrInt(attrs, "count"),
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
            var attrs = elem.attributes;
            var stopElems = xmlDoc.queryAllChilds(elem, "stop");
            return {
                stops: xmlDoc.readMulti(Stylesheet_1.GradientStop.read, stopElems),
                bottom: xmlDoc.attrFloat(attrs, "bottom"),
                degree: xmlDoc.attrFloat(attrs, "degree"),
                left: xmlDoc.attrFloat(attrs, "left"),
                right: xmlDoc.attrFloat(attrs, "right"),
                top: xmlDoc.attrFloat(attrs, "top"),
                type: xmlDoc.attrString(attrs, "type"),
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
            xmlDoc.validator.expectNode(elem, "stop", "gradientFill");
            var colorElem = xmlDoc.queryOneChild(elem, "color");
            var attrs = elem.attributes;
            return {
                color: colorElem ? Color.read(xmlDoc, colorElem, "color") : null,
                position: xmlDoc.attrFloat(attrs, "position"),
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
            xmlDoc.validator.expectNode(elem, "numFmt", "dxf, ndxf, numFmts, odxf");
            var attrs = elem.attributes;
            return {
                formatCode: xmlDoc.attrString(attrs, "formatCode"),
                numFmtId: xmlDoc.attrInt(attrs, "numFmtId"),
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
            xmlDoc.validator.expectNode(elem, "numFmts", "styleSheet");
            var numFmtElems = xmlDoc.queryAllChilds(elem, "numFmt");
            var attrs = elem.attributes;
            return {
                numFmts: xmlDoc.readMulti(Stylesheet_1.NumberingFormat.read, numFmtElems),
                count: xmlDoc.attrInt(attrs, "count"),
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
            var attrs = elem.attributes;
            var bgColorElem = xmlDoc.queryOneChild(elem, "bgColor");
            var fgColorElem = xmlDoc.queryOneChild(elem, "fgColor");
            return {
                bgColor: bgColorElem ? Color.read(xmlDoc, bgColorElem, "bgColor") : null,
                fgColor: fgColorElem ? Color.read(xmlDoc, fgColorElem, "fgColor") : null,
                patternType: xmlDoc.attrString(attrs, "patternType"),
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
            var attrs = elem.attributes;
            return {
                hidden: xmlDoc.attrBool(attrs, "hidden"),
                locked: xmlDoc.attrBool(attrs, "locked"),
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
            var rgbStr = xmlDoc.attrString(elem.attributes, "rgb");
            return {
                rgb: rgbStr ? parseInt(rgbStr, 16) : null,
            };
        },
        write: function (xmlDoc, inst) {
            var rgbStr = inst.rgb && typeof inst.rgb === "number" ? inst.rgb.toString(16).toUpperCase() : inst.rgb;
            var elem = xmlDoc.domBldr.create("rgbColor")
                .attrString("rgb", rgbStr, true)
                .element;
            return elem;
        }
    };
    Stylesheet_1.TableStyle = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "tableStyle", "tableStyles");
            var attrs = elem.attributes;
            var tableStyleElementElems = xmlDoc.queryAllChilds(elem, "tableStyleElement");
            return {
                tableStyleElements: xmlDoc.readMulti(Stylesheet_1.TableStyleElement.read, tableStyleElementElems, "tableStyleElement"),
                count: xmlDoc.attrInt(attrs, "count"),
                name: xmlDoc.attrString(attrs, "name"),
                pivot: xmlDoc.attrBool(attrs, "pivot"),
                table: xmlDoc.attrBool(attrs, "table"),
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
            var attrs = elem.attributes;
            return {
                dxfId: xmlDoc.attrInt(attrs, "dxfId"),
                size: xmlDoc.attrInt(attrs, "size"),
                type: xmlDoc.attrString(attrs, "type"),
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
            xmlDoc.validator.expectNode(elem, "tableStyles", "styleSheet");
            var attrs = elem.attributes;
            var tableStyleElems = xmlDoc.queryAllChilds(elem, "tableStyle");
            return {
                tableStyles: xmlDoc.readMulti(Stylesheet_1.TableStyle.read, tableStyleElems),
                count: xmlDoc.attrInt(attrs, "count"),
                defaultPivotStyle: xmlDoc.attrString(attrs, "defaultPivotStyle"),
                defaultTableStyle: xmlDoc.attrString(attrs, "defaultTableStyle"),
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