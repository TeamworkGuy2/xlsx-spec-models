import Alignment = require("./Alignment");
import Protection = require("./Protection");

/** <xf> (Format) "x:xf"
 * parents: cellStyleXfs (§18.8.9); cellXfs (§18.8.10)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.cellformat.aspx
 */
class CellFormat {
    private static type: OpenXmlIo.ReadWrite<OpenXml.CellFormat> = CellFormat; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.CellFormat {
        if (elem.tagName !== "xf") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "xf", "cellStyleXfs, cellXfs"); }
        var alignmentElem = xmlDoc.domHelper.queryOneChild(elem, "alignment");
        var protectionElem = xmlDoc.domHelper.queryOneChild(elem, "protection");
        var attrs = elem.attributes;
        return {
            alignment: alignmentElem ? Alignment.read(xmlDoc, alignmentElem) : null,
            protection: protectionElem ? Protection.read(xmlDoc, protectionElem) : null,
            applyAlignment: xmlDoc.domHelper.attrBool(attrs, "applyAlignment"),
            applyBorder: xmlDoc.domHelper.attrBool(attrs, "applyBorder"),
            applyFill: xmlDoc.domHelper.attrBool(attrs, "applyFill"),
            applyFont: xmlDoc.domHelper.attrBool(attrs, "applyFont"),
            applyNumberFormat: xmlDoc.domHelper.attrBool(attrs, "applyNumberFormat"),
            applyProtection: xmlDoc.domHelper.attrBool(attrs, "applyProtection"),
            borderId: xmlDoc.domHelper.attrInt(attrs, "borderId"),
            fillId: xmlDoc.domHelper.attrInt(attrs, "fillId"),
            fontId: xmlDoc.domHelper.attrInt(attrs, "fontId"),
            numFmtId: xmlDoc.domHelper.attrInt(attrs, "numFmtId"),
            pivotButton: xmlDoc.domHelper.attrBool(attrs, "pivotButton"),
            quotePrefix: xmlDoc.domHelper.attrBool(attrs, "quotePrefix"),
            xfId: xmlDoc.domHelper.attrInt(attrs, "xfId"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.CellFormat): HTMLElement {
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