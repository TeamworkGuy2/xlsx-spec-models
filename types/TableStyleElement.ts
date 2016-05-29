import Alignment = require("./Alignment");
import Protection = require("./Protection");

/** <tableStyleElement> (Table Style) "x:tableStyleElement"
 * parents: tableStyle (§18.8.40)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.tablestyleelement.aspx
 */
class TableStyleElement {
    private static type: OpenXmlIo.ReadWrite<OpenXml.TableStyleElement> = TableStyleElement; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.TableStyleElement {
        if (elem.tagName !== "tableStyleElement") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "tableStyleElement", "tableStyle"); }
        var attrs = elem.attributes;
        return {
            dxfId: xmlDoc.domHelper.attrInt(attrs, "dxfId"),
            size: xmlDoc.domHelper.attrInt(attrs, "size"),
            type: xmlDoc.domHelper.attrString(attrs, "type"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.TableStyleElement): HTMLElement {
        var elem = xmlDoc.domBldr.create("tableStyleElement")
            .attrInt("dxfId", inst.dxfId, true)
            .attrInt("size", inst.size, true)
            .attrString("type", inst.type)
            .element;
        return elem;
    }

}

export = TableStyleElement;