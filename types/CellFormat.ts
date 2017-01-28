import Alignment = require("./Alignment");
import Protection = require("./Protection");

class CellFormat {
    private static type: OpenXmlIo.ReadWrite<OpenXml.CellFormat> = CellFormat; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.CellFormat {
        xmlDoc.validator.expectNode(elem, "xf", "cellStyleXfs, cellXfs");
        var attrs = elem.attributes;
        var alignmentElem = xmlDoc.queryOneChild(elem, "alignment");
        var protectionElem = xmlDoc.queryOneChild(elem, "protection");
        return {
            alignment: alignmentElem ? Alignment.read(xmlDoc, alignmentElem) : null,
            protection: protectionElem ? Protection.read(xmlDoc, protectionElem) : null,
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
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.CellFormat): HTMLElement {
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

}

export = CellFormat;