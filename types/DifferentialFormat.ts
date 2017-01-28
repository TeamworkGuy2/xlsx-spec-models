import Alignment = require("./Alignment");
import Border = require("./Border");
import Fill = require("./Fill");
import Font = require("./Font");
import NumberingFormat = require("./NumberingFormat");
import Protection = require("./Protection");

class DifferentialFormat {
    private static type: OpenXmlIo.ReadWrite<OpenXml.DifferentialFormat> = DifferentialFormat; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.DifferentialFormat {
        xmlDoc.validator.expectNode(elem, "dxf", "dxfs, rfmt");
        var alignmentElem = xmlDoc.queryOneChild(elem, "alignment");
        var borderElem = xmlDoc.queryOneChild(elem, "border");
        var fillElem = xmlDoc.queryOneChild(elem, "fill");
        var fontElem = xmlDoc.queryOneChild(elem, "font");
        var numFmtElem = xmlDoc.queryOneChild(elem, "numFmt");
        var protectionElem = xmlDoc.queryOneChild(elem, "protection");
        return {
            alignment: alignmentElem ? Alignment.read(xmlDoc, alignmentElem) : null,
            border: borderElem ? Border.read(xmlDoc, borderElem) : null,
            fill: fillElem ? Fill.read(xmlDoc, fillElem) : null,
            font: fontElem ? Font.read(xmlDoc, fontElem) : null,
            numFmt: numFmtElem ? NumberingFormat.read(xmlDoc, numFmtElem) : null,
            protection: protectionElem ? Protection.read(xmlDoc, protectionElem) : null,
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.DifferentialFormat): HTMLElement {
        var elem = xmlDoc.dom.createElement("dxf");
        if (inst.alignment) { elem.appendChild(Alignment.write(xmlDoc, inst.alignment)); }
        if (inst.border) { elem.appendChild(Border.write(xmlDoc, inst.border)); }
        if (inst.fill) { elem.appendChild(Fill.write(xmlDoc, inst.fill)); }
        if (inst.font) { elem.appendChild(Font.write(xmlDoc, inst.font)); }
        if (inst.numFmt) { elem.appendChild(NumberingFormat.write(xmlDoc, inst.numFmt)); }
        if (inst.protection) { elem.appendChild(Protection.write(xmlDoc, inst.protection)); }
        return elem;
    }

}

export = DifferentialFormat;