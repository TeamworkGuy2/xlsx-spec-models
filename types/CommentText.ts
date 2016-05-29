import RichTextRun = require("./RichTextRun");
import Text = require("./Text");

/** <text> (Comment Text) "x:text"
 * parent: comment (§18.7.3)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.commenttext.aspx
 */
class CommentText {
    private static type: OpenXmlIo.ReadWrite<OpenXml.CommentText> = CommentText; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.CommentText {
        if (elem.tagName !== "text") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "text", "comment"); }
        var rtrElems = xmlDoc.domHelper.queryAllChilds(elem, "r");
        var tElem = xmlDoc.domHelper.queryOneChild(elem, "t");
        return {
            rs: xmlDoc.readOpenXml.readMulti(xmlDoc, RichTextRun.read, rtrElems),
            t: tElem ? Text.read(xmlDoc, tElem) : null,
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.CommentText): HTMLElement {
        var elem = xmlDoc.dom.createElement("text");
        xmlDoc.domHelper.addChilds(elem, xmlDoc.writeOpenXml.writeMulti(xmlDoc, RichTextRun.write, inst.rs));
        if (inst.t) { elem.appendChild(Text.write(xmlDoc, inst.t)); }
        return elem;
    }

}

export = CommentText;