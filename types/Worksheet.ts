import SheetDimension = require("../types/SheetDimension");
import SheetViews = require("../types/SheetViews");
import SheetFormatProperties = require("../types/SheetFormatProperties");
import Columns = require("../types/Columns");
import SheetData = require("../types/SheetData");
import PageMargins = require("../types/PageMargins");
import PageSetup = require("../types/PageSetup");
import HeaderFooter = require("../types/HeaderFooter");
import Drawing = require("../types/Drawing");
import LegacyDrawing = require("../types/LegacyDrawing");

/** <worksheet> (Worksheet) "x:worksheet"
 * parent: Root element of SpreadsheetML Worksheet part
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.worksheet.aspx
 */
class Worksheet {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Worksheet> = Worksheet; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.Worksheet {
        if (elem.tagName !== "worksheet") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "worksheet", "root element of SpreadsheetML Worksheet part"); }
        var colsElems = xmlDoc.domHelper.queryAllChilds(elem, "cols");
        var dimensionElem = xmlDoc.domHelper.queryOneChild(elem, "dimension");
        var drawingElem = xmlDoc.domHelper.queryOneChild(elem, "drawing");
        var headerFooterElem = xmlDoc.domHelper.queryOneChild(elem, "headerFooter");
        var legacyDrawingElem = xmlDoc.domHelper.queryOneChild(elem, "legacyDrawing");
        var pageMarginElem = xmlDoc.domHelper.queryOneChild(elem, "pageMargins");
        var pageSetupElem = xmlDoc.domHelper.queryOneChild(elem, "pageSetup");
        var sheetDataElem = xmlDoc.domHelper.queryOneChild(elem, "sheetData");
        var sheetFormatPrElem = xmlDoc.domHelper.queryOneChild(elem, "sheetFormatPr");
        var sheetViewsElem = xmlDoc.domHelper.queryOneChild(elem, "sheetViews");

        var inst = {
            cols: xmlDoc.readOpenXml.readMulti(xmlDoc, Columns.read, colsElems),
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
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.Worksheet): HTMLElement {
        var elem = xmlDoc.dom.createElement("worksheet");

        if (inst.dimension) { elem.appendChild(SheetDimension.write(xmlDoc, inst.dimension)); }
        if (inst.sheetViews) { elem.appendChild(SheetViews.write(xmlDoc, inst.sheetViews)); }
        if (inst.sheetFormatPr) { elem.appendChild(SheetFormatProperties.write(xmlDoc, inst.sheetFormatPr)); }
        xmlDoc.domHelper.addChilds(elem, xmlDoc.writeOpenXml.writeMulti(xmlDoc, Columns.write, inst.cols));
        elem.appendChild(SheetData.write(xmlDoc, inst.sheetData));
        if (inst.pageMargins) { elem.appendChild(PageMargins.write(xmlDoc, inst.pageMargins)); }
        if (inst.pageSetup) { elem.appendChild(PageSetup.write(xmlDoc, inst.pageSetup)); }
        if (inst.headerFooter) { elem.appendChild(HeaderFooter.write(xmlDoc, inst.headerFooter)); }
        if (inst.drawing) { elem.appendChild(Drawing.write(xmlDoc, inst.drawing)); }
        if (inst.legacyDrawing) { elem.appendChild(LegacyDrawing.write(xmlDoc, inst.legacyDrawing)); }

        return elem;
    }

}

export = Worksheet;