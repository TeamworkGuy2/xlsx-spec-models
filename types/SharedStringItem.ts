import RichTextRun = require("./RichTextRun");
import Text = require("./Text");

/** <si> (String Item) "x:si"
 * parent: sst (§18.4.9)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.sharedstringitem.aspx
 */
class SharedStringItem {
    private static type: OpenXmlIo.ReadWrite<OpenXml.SharedStringItem> = SharedStringItem; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.SharedStringItem {
        if (elem.tagName !== "si") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "si", "sst"); }

        var rtrChilds = xmlDoc.domHelper.queryAllChilds(elem, "r");
        var textChild = xmlDoc.domHelper.queryOneChild(elem, "t");

        return {
            rs: xmlDoc.readOpenXml.readMulti(xmlDoc, RichTextRun.read, rtrChilds),
            t: textChild ? Text.read(xmlDoc, textChild) : null,
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.SharedStringItem): HTMLElement {
        var elem = xmlDoc.dom.createElement("si");
        xmlDoc.domHelper.addChilds(elem, xmlDoc.writeOpenXml.writeMulti(xmlDoc, RichTextRun.write, inst.rs));
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