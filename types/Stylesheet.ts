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

class Stylesheet {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Stylesheet> = Stylesheet; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Stylesheet {
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


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Stylesheet): HTMLElement {
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