import Text = require("./Text");
import RichTextRun = require("./RichTextRun");

class InlineString {
    private static type: OpenXmlIo.ReadWrite<OpenXml.InlineString> = InlineString; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.InlineString {
        xmlDoc.validator.expectNode(elem, "is", "c, nc, oc");
        var rElems = xmlDoc.queryAllChilds(elem, "r");
        var tElem = xmlDoc.queryOneChild(elem, "t");
        return {
            rs: xmlDoc.readMulti(RichTextRun.read, rElems),
            t: tElem ? Text.read(xmlDoc, tElem) : null,
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.InlineString): ElementLike {
        var elem = xmlDoc.dom.createElement("is");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(RichTextRun.write, inst.rs));
        if (inst.t) { elem.appendChild(Text.write(xmlDoc, inst.t)); }
        return elem;
    }

}

export = InlineString;