import Fill = require("./Fill");

/** <fills> (Number Formats) "x:fills"
 * parents: styleSheet (§18.8.39)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.fills.aspx
 */
class Fills {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Fills> = Fills; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.Fills {
        if (elem.tagName !== "fills") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "fills", "styleSheet"); }
        var fillElems = xmlDoc.domHelper.queryAllChilds(elem, "fill");
        var attrs = elem.attributes;
        return {
            fills: xmlDoc.readOpenXml.readMulti(xmlDoc, Fill.read, fillElems),
            count: xmlDoc.domHelper.attrInt(attrs, "count"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.Fills): HTMLElement {
        var elem = xmlDoc.domBldr.create("fills")
            .attrInt("count", inst.count, true)
            .element;
        var cellStyleElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, Fill.write, inst.fills);
        xmlDoc.domHelper.addChilds(elem, cellStyleElems);
        return elem;
    }

}

export = Fills;