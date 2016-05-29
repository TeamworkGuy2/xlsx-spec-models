/** <color> (Data Bar Color) "x:color"
 * parent: bottom (§18.8.6); colorScale (§18.3.1.16); dataBar (§18.3.1.28); diagonal (§18.8.13); end (§18.8.16); font (§18.8.22); horizontal (§18.8.25); mruColors (§18.8.28); rPr (§18.4.7); start (§18.8.37); stop (§18.8.38); top (§18.8.43); vertical (§18.8.44)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.color.aspx
 */
class Color {
    private static type: OpenXmlIo.ReadWriteNamed<OpenXml.Color> = Color; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement, expectedTagName: string): OpenXml.Color {
        if (elem.tagName !== expectedTagName) { throw xmlDoc.validator.unexpectedNode(elem.tagName, expectedTagName, "bottom, colorScale, dataBar, diagonal, end, font, horizontal, mruColors, rPr, start, stop, top, vertical"); }
        var attrs = elem.attributes;
        var rgbStr = xmlDoc.domHelper.attrString(attrs, "rgb");
        return {
            auto: xmlDoc.domHelper.attrBool(attrs, "auto"),
            indexed: xmlDoc.domHelper.attrInt(attrs, "indexed"),
            rgb: rgbStr ? parseInt(rgbStr, 16) : null,
            theme: xmlDoc.domHelper.attrInt(attrs, "theme"),
            tint: xmlDoc.domHelper.attrFloat(attrs, "tint"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.Color, expectedTagName: string): HTMLElement {
        var rgbStr = inst.rgb && typeof inst.rgb === "number" ? (<number>inst.rgb).toString(16).toUpperCase() : <string>inst.rgb;
        var elem = xmlDoc.domBldr.create(expectedTagName)
            .attrBool("auto", inst.auto, true, "1", "0")
            .attrInt("indexed", inst.indexed, true)
            .attrString("rgb", rgbStr, true)
            .attrInt("theme", inst.theme, true)
            .attrFloat("tint", inst.tint, true)
            .element;
        return elem;
    }


    public static copy(inst: OpenXml.Color): OpenXml.Color {
        return {
            auto: inst.auto,
            indexed: inst.indexed,
            rgb: inst.rgb,
            theme: inst.theme,
            tint: inst.tint,
        };
    }

}

export = Color;