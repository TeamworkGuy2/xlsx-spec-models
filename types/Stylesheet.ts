import Borders = require("./Borders");
import CellStyles = require("./CellStyles");
import CellStyleFormats = require("./CellStyleFormats");
import CellFormats = require("./CellFormats");
import Colors = require("./Colors");
import DifferentialFormats = require("./DifferentialFormats");
import Fills = require("./Fills");
import Fonts = require("./Fonts");
import NumberingFormats = require("./NumberingFormats");
import TableStyles = require("./TableStyles");

/** <styleSheet> (Stylesheet) "x:styleSheet"
 * parent: Root element of SpreadsheetML Stylesheet part
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.stylesheet.aspx
 */
class Stylesheet {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Stylesheet> = Stylesheet; // TODO type-checker

    public borders: OpenXml.Borders;
    public cellStyles: OpenXml.CellStyles;
    public cellStyleXfs: OpenXml.CellStyleFormats;
    public cellXfs: OpenXml.CellFormats;
    public colors: OpenXml.Colors;
    public dxfs: OpenXml.DifferentialFormats;
    public fills: OpenXml.Fills;
    public fonts: OpenXml.Fonts;
    public numFmts: OpenXml.NumberingFormats;
    public tableStyles: OpenXml.TableStyles;
    public extLst: Element; // TODO


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.Stylesheet {
        if (elem.tagName !== "styleSheet") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "styleSheet", "root element of SpreadsheetML Stylesheet part"); }
        var bordersElem = xmlDoc.domHelper.queryOneChild(elem, "borders");
        var cellStylesElem = xmlDoc.domHelper.queryOneChild(elem, "cellStyles");
        var cellStyleXfsElem = xmlDoc.domHelper.queryOneChild(elem, "cellStyleXfs");
        var cellXfsElems = xmlDoc.domHelper.queryOneChild(elem, "cellXfs");
        var colorsElem = xmlDoc.domHelper.queryOneChild(elem, "colors");
        var dxfsElem = xmlDoc.domHelper.queryOneChild(elem, "dxfs");
        var fillsElem = xmlDoc.domHelper.queryOneChild(elem, "fills");
        var fontsElem = xmlDoc.domHelper.queryOneChild(elem, "fonts");
        var numFmtsElem = xmlDoc.domHelper.queryOneChild(elem, "numFmts");
        var tableStylesElem = xmlDoc.domHelper.queryOneChild(elem, "tableStyles");
        var extLstElem = xmlDoc.domHelper.queryOneChild(elem, "extLst");

        var inst = {
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
        return inst;
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.Stylesheet): HTMLElement {
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

}

export = Stylesheet;