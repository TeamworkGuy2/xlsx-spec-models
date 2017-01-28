import TableStyle = require("./TableStyle");

class TableStyles {
    private static type: OpenXmlIo.ReadWrite<OpenXml.TableStyles> = TableStyles; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.TableStyles {
        xmlDoc.validator.expectNode(elem, "tableStyles", "styleSheet");
        var attrs = elem.attributes;
        var tableStyleElems = xmlDoc.queryAllChilds(elem, "tableStyle");
        return {
            tableStyles: xmlDoc.readMulti(TableStyle.read, tableStyleElems),
            count: xmlDoc.attrInt(attrs, "count"),
            defaultPivotStyle: xmlDoc.attrString(attrs, "defaultPivotStyle"),
            defaultTableStyle: xmlDoc.attrString(attrs, "defaultTableStyle"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.TableStyles): HTMLElement {
        var elem = xmlDoc.domBldr.create("tableStyles")
            .attrInt("count", inst.count, true)
            .attrString("defaultPivotStyle", inst.defaultPivotStyle, true)
            .attrString("defaultTableStyle", inst.defaultTableStyle, true)
            .element;
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(TableStyle.write, inst.tableStyles));
        return elem;
    }

}

export = TableStyles;