import RgbColor = require("./RgbColor");

/** <indexedColors> (Color Indexes) "x:indexedColors"
 * parent: colors (§18.8.11)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.indexedcolors.aspx
 */
class IndexedColors {
    private static type: OpenXmlIo.ReadWrite<OpenXml.IndexedColors> = IndexedColors; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.IndexedColors {
        if (elem.tagName !== "indexedColors") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "indexedColors", "colors"); }
        var rgbColorElems = xmlDoc.domHelper.queryAllChilds(elem, "rgbColor");
        return {
            rgbColors: xmlDoc.readOpenXml.readMulti(xmlDoc, RgbColor.read, rgbColorElems),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.IndexedColors): HTMLElement {
        var elem = xmlDoc.dom.createElement("indexedColors");
        var rgbColorElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, RgbColor.write, inst.rgbColors);
        xmlDoc.domHelper.addChilds(elem, rgbColorElems);
        return elem;
    }

}

export = IndexedColors;