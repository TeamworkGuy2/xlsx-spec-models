import SharedStringItem = require("./SharedStringItem");

class SharedStringTable {
    private static type: OpenXmlIo.ReadWrite<OpenXml.SharedStringTable> = SharedStringTable; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.SharedStringTable {
        xmlDoc.validator.expectNode(elem, "sst", "root element of SpreadsheetML Shared String Table part");
        var sharedStringElems = xmlDoc.queryAllChilds(elem, "si");
        return {
            sis: xmlDoc.readMulti(SharedStringItem.read, sharedStringElems),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.SharedStringTable): ElementLike {
        var elem = xmlDoc.dom.createElement("sst");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(SharedStringItem.write, inst.sis));
        return elem;
    }

}

export = SharedStringTable;