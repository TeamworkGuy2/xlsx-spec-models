import TableStyle = require("./TableStyle");

/** <tableStyles> (Table Styles) "x:tableStyles"
 * parents: styleSheet (§18.8.39)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.tablestyles.aspx
 */
class TableStyles {
    private static type: OpenXmlIo.ReadWrite<OpenXml.TableStyles> = TableStyles; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.TableStyles {
        if (elem.tagName !== "tableStyles") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "tableStyles", "styleSheet"); }
        var tableStyleElems = xmlDoc.domHelper.queryAllChilds(elem, "tableStyle");
        var attrs = elem.attributes;
        return {
            tableStyles: xmlDoc.readOpenXml.readMulti(xmlDoc, TableStyle.read, tableStyleElems),
            count: xmlDoc.domHelper.attrInt(attrs, "count"),
            defaultPivotStyle: xmlDoc.domHelper.attrString(attrs, "defaultPivotStyle"),
            defaultTableStyle: xmlDoc.domHelper.attrString(attrs, "defaultTableStyle"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.TableStyles): HTMLElement {
        var elem = xmlDoc.domBldr.create("tableStyles")
            .attrInt("count", inst.count, true)
            .attrString("defaultPivotStyle", inst.defaultPivotStyle, true)
            .attrString("defaultTableStyle", inst.defaultTableStyle, true)
            .element;
        var tableStyleElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, TableStyle.write, inst.tableStyles);
        xmlDoc.domHelper.addChilds(elem, tableStyleElems);
        return elem;
    }

}

export = TableStyles;