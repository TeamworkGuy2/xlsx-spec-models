"use strict";
var Borders = require("./Borders");
var CellStyles = require("./CellStyles");
var CellStyleFormats = require("./CellStyleFormats");
var CellFormats = require("./CellFormats");
var Colors = require("./Colors");
var DifferentialFormats = require("./DifferentialFormats");
var Fills = require("./Fills");
var Fonts = require("./Fonts");
var NumberingFormats = require("./NumberingFormats");
var TableStyles = require("./TableStyles");
var Stylesheet = (function () {
    function Stylesheet() {
    }
    Stylesheet.read = function (xmlDoc, elem) {
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
    };
    Stylesheet.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("styleSheet");
        if (inst.numFmts) {
            elem.appendChild(NumberingFormats.write(xmlDoc, inst.numFmts));
        }
        if (inst.fonts) {
            elem.appendChild(Fonts.write(xmlDoc, inst.fonts));
        }
        if (inst.fills) {
            elem.appendChild(Fills.write(xmlDoc, inst.fills));
        }
        if (inst.borders) {
            elem.appendChild(Borders.write(xmlDoc, inst.borders));
        }
        if (inst.cellStyleXfs) {
            elem.appendChild(CellStyleFormats.write(xmlDoc, inst.cellStyleXfs));
        }
        if (inst.cellXfs) {
            elem.appendChild(CellFormats.write(xmlDoc, inst.cellXfs));
        }
        if (inst.cellStyles) {
            elem.appendChild(CellStyles.write(xmlDoc, inst.cellStyles));
        }
        if (inst.dxfs) {
            elem.appendChild(DifferentialFormats.write(xmlDoc, inst.dxfs));
        }
        if (inst.tableStyles) {
            elem.appendChild(TableStyles.write(xmlDoc, inst.tableStyles));
        }
        if (inst.colors) {
            elem.appendChild(Colors.write(xmlDoc, inst.colors));
        }
        if (inst.extLst) {
            elem.appendChild(inst.extLst);
        }
        return elem;
    };
    Stylesheet.type = Stylesheet; // TODO type-checker
    return Stylesheet;
}());
module.exports = Stylesheet;
