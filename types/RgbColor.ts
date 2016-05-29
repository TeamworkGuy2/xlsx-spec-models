/** <rgbColor> (RGB Color) "x:rgbColor"
 * parent: indexedColors (§18.8.27)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.rgbcolor.aspx
 */
class RgbColor {
    private static type: OpenXmlIo.ReadWrite<OpenXml.RgbColor> = RgbColor; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.RgbColor {
        if (elem.tagName !== "rgbColor") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "rgbColor", "indexedColors"); }
        var rgbStr = xmlDoc.domHelper.attrString(elem.attributes, "rgb");
        return {
            rgb: rgbStr ? parseInt(rgbStr, 16) : null,
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.RgbColor): HTMLElement {
        var rgbStr = inst.rgb && typeof inst.rgb === "number" ? (<number>inst.rgb).toString(16).toUpperCase() : <string>inst.rgb;
        var elem = xmlDoc.domBldr.create("rgbColor")
            .attrString("rgb", rgbStr, true)
            .element;
        return elem;
    }

}

export = RgbColor;