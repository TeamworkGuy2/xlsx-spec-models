import Alignment = require("./Alignment");
import Protection = require("./Protection");

class TableStyleElement {
    private static type: OpenXmlIo.ReadWrite<OpenXml.TableStyleElement> = TableStyleElement; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.TableStyleElement {
        xmlDoc.validator.expectNode(elem, "tableStyleElement", "tableStyle");
        var attrs = elem.attributes;
        return {
            dxfId: xmlDoc.attrInt(attrs, "dxfId"),
            size: xmlDoc.attrInt(attrs, "size"),
            type: <OpenXml.ST_TableStyleType>xmlDoc.attrString(attrs, "type"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.TableStyleElement): HTMLElement {
        var elem = xmlDoc.domBldr.create("tableStyleElement")
            .attrInt("dxfId", inst.dxfId, true)
            .attrInt("size", inst.size, true)
            .attrString("type", inst.type)
            .element;
        return elem;
    }

}

export = TableStyleElement;