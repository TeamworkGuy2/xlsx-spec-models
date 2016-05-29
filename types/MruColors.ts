import Color = require("./Color");

/** <mruColors> (MRU Colors) "x:mruColors"
 * parents: colors (§18.8.11)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.mrucolors.aspx
 */
class MruColors {
    private static type: OpenXmlIo.ReadWrite<OpenXml.MruColors> = MruColors; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.MruColors {
        if (elem.tagName !== "mruColors") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "mruColors", "styleSheet"); }
        var colorElems = xmlDoc.domHelper.queryAllChilds(elem, "colors");
        return {
            colors: xmlDoc.readOpenXml.readMulti(xmlDoc, Color.read, colorElems, "color"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.MruColors): HTMLElement {
        var elem = xmlDoc.dom.createElement("mruColors");
        var colorElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, Color.write, inst.colors, "color");
        xmlDoc.domHelper.addChilds(elem, colorElems);
        return elem;
    }

}

export = MruColors;