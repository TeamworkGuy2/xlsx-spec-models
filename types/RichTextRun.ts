import RichTextRunProperties = require("./RichTextRunProperties");
import Text = require("./Text");

/** <r> (Rich Text Run) "x:r"
 * parent: is (§18.3.1.53); si (§18.4.8); text (§18.7.7)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.run.aspx
 */
class RichTextRun {
    private static type: OpenXmlIo.ReadWrite<OpenXml.RichTextRun> = RichTextRun; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.RichTextRun {
        if (elem.tagName !== "r") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "r", "si"); }

        var rPrElem = xmlDoc.domHelper.queryOneChild(elem, "rPr");
        var textElem = xmlDoc.domHelper.queryOneChild(elem, "t");
        return {
            rPr: rPrElem != null ? RichTextRunProperties.read(xmlDoc, rPrElem) : null,
            t: textElem != null ? Text.read(xmlDoc, textElem) : null,
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.RichTextRun): HTMLElement {
        var elem = xmlDoc.dom.createElement("r");
        if (inst.rPr) { elem.appendChild(RichTextRunProperties.write(xmlDoc, inst.rPr)); }
        if (inst.t) { elem.appendChild(Text.write(xmlDoc, inst.t)); }

        return elem;
    }


    public static copy(inst: OpenXml.RichTextRun): OpenXml.RichTextRun {
        return {
            rPr: inst.rPr != null ? RichTextRunProperties.copy(inst.rPr) : null,
            t: inst.t != null ? Text.copy(inst.t) : null,
        };
    }

}

export = RichTextRun;