import TableStyleElement = require("./TableStyleElement");

class TableStyle {
    private static type: OpenXmlIo.ReadWrite<OpenXml.TableStyle> = TableStyle; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.TableStyle {
        xmlDoc.validator.expectNode(elem, "tableStyle", "tableStyles");
        var attrs = elem.attributes;
        var tableStyleElementElems = xmlDoc.queryAllChilds(elem, "tableStyleElement");
        return {
            tableStyleElements: xmlDoc.readMulti(TableStyleElement.read, tableStyleElementElems, "tableStyleElement"),
            count: xmlDoc.attrInt(attrs, "count"),
            name: xmlDoc.attrString(attrs, "name"),
            pivot: xmlDoc.attrBool(attrs, "pivot"),
            table: xmlDoc.attrBool(attrs, "table"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.TableStyle): HTMLElement {
        var elem = xmlDoc.domBldr.create("tableStyle")
            .attrInt("count", inst.count, true)
            .attrString("name", inst.name)
            .attrBool("pivot", inst.pivot, true)
            .attrBool("table", inst.table, true)
            .element;
        if (inst.tableStyleElements) { xmlDoc.addChilds(elem, xmlDoc.writeMulti(TableStyleElement.write, inst.tableStyleElements)); }
        return elem;
    }

}

export = TableStyle;