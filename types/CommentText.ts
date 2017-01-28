import RichTextRun = require("./RichTextRun");
import Text = require("./Text");

class CommentText {
    private static type: OpenXmlIo.ReadWrite<OpenXml.CommentText> = CommentText; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.CommentText {
        xmlDoc.validator.expectNode(elem, "text", "comment");
        var rtrElems = xmlDoc.queryAllChilds(elem, "r");
        var tElem = xmlDoc.queryOneChild(elem, "t");
        return {
            rs: xmlDoc.readMulti(RichTextRun.read, rtrElems),
            t: tElem ? Text.read(xmlDoc, tElem) : null,
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.CommentText): HTMLElement {
        var elem = xmlDoc.dom.createElement("text");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(RichTextRun.write, inst.rs));
        if (inst.t) { elem.appendChild(Text.write(xmlDoc, inst.t)); }
        return elem;
    }

}

export = CommentText;