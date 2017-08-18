"use strict";
var SheetDimension = require("../types/SheetDimension");
var SheetViews = require("../types/SheetViews");
var SheetFormatProperties = require("../types/SheetFormatProperties");
var Columns = require("../types/Columns");
var SheetData = require("../types/SheetData");
var PageMargins = require("../types/PageMargins");
var PageSetup = require("../types/PageSetup");
var HeaderFooter = require("../types/HeaderFooter");
var Drawing = require("../types/Drawing");
var LegacyDrawing = require("../types/LegacyDrawing");
var Worksheet = (function () {
    function Worksheet() {
    }
    Worksheet.read = function (xmlDoc, elem) {
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
        var inst = {
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
        return inst;
    };
    Worksheet.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("worksheet");
        if (inst.dimension) {
            elem.appendChild(SheetDimension.write(xmlDoc, inst.dimension));
        }
        if (inst.sheetViews) {
            elem.appendChild(SheetViews.write(xmlDoc, inst.sheetViews));
        }
        if (inst.sheetFormatPr) {
            elem.appendChild(SheetFormatProperties.write(xmlDoc, inst.sheetFormatPr));
        }
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Columns.write, inst.cols));
        elem.appendChild(SheetData.write(xmlDoc, inst.sheetData));
        if (inst.pageMargins) {
            elem.appendChild(PageMargins.write(xmlDoc, inst.pageMargins));
        }
        if (inst.pageSetup) {
            elem.appendChild(PageSetup.write(xmlDoc, inst.pageSetup));
        }
        if (inst.headerFooter) {
            elem.appendChild(HeaderFooter.write(xmlDoc, inst.headerFooter));
        }
        if (inst.drawing) {
            elem.appendChild(Drawing.write(xmlDoc, inst.drawing));
        }
        if (inst.legacyDrawing) {
            elem.appendChild(LegacyDrawing.write(xmlDoc, inst.legacyDrawing));
        }
        return elem;
    };
    Worksheet.type = Worksheet; // TODO type-checker
    return Worksheet;
}());
module.exports = Worksheet;
