import RichTextRun = require("./RichTextRun");
import Text = require("./Text");

class SharedStringItem {
    private static type: OpenXmlIo.ReadWrite<OpenXml.SharedStringItem> = SharedStringItem; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.SharedStringItem {
        xmlDoc.validator.expectNode(elem, "si", "sst");

        var rtrChilds = xmlDoc.queryAllChilds(elem, "r");
        var textChild = xmlDoc.queryOneChild(elem, "t");

        return {
            rs: xmlDoc.readMulti(RichTextRun.read, rtrChilds),
            t: textChild ? Text.read(xmlDoc, textChild) : null,
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.SharedStringItem): ElementLike {
        var elem = xmlDoc.dom.createElement("si");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(RichTextRun.write, inst.rs));
        if (inst.t) { elem.appendChild(Text.write(xmlDoc, inst.t)); }

        return elem;
    }


    public static copy(inst: OpenXml.SharedStringItem): OpenXml.SharedStringItem {
        return {
            rs: inst.rs != null ? inst.rs.map(RichTextRun.copy) : [],
            t: inst.t != null ? Text.copy(inst.t) : null,
        };
    }

}

export = SharedStringItem;