import Text = require("./Text");
import RichTextRun = require("./RichTextRun");

/** <is> (Rich Text Inline) "x:t"
 * parent: c (§18.3.1.4); nc (§18.11.1.3); oc (§18.11.1.5)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.inlinestring.aspx
 */
class InlineString {
    private static type: OpenXmlIo.ReadWrite<OpenXml.InlineString> = InlineString; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.InlineString {
        if (elem.tagName !== "is") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "is", "c, nc, oc"); }
        var rElems = xmlDoc.domHelper.queryAllChilds(elem, "r");
        var tElem = xmlDoc.domHelper.queryOneChild(elem, "t");
        return {
            rs: xmlDoc.readOpenXml.readMulti(xmlDoc, RichTextRun.read, rElems),
            t: tElem ? Text.read(xmlDoc, tElem) : null,
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.InlineString): HTMLElement {
        var elem = xmlDoc.dom.createElement("is");
        xmlDoc.domHelper.addChilds(elem, xmlDoc.writeOpenXml.writeMulti(xmlDoc, RichTextRun.write, inst.rs));
        if (inst.t) { elem.appendChild(Text.write(xmlDoc, inst.t)); }
        return elem;
    }

}

export = InlineString;