
class Color {
    private static type: OpenXmlIo.ReadWriteNamed<OpenXml.Color> = Color; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement, expectedTagName: string): OpenXml.Color {
        xmlDoc.validator.expectNode(elem, expectedTagName, "bottom, colorScale, dataBar, diagonal, end, font, horizontal, mruColors, rPr, start, stop, top, vertical");
        var attrs = elem.attributes;
        var rgbStr = xmlDoc.attrString(attrs, "rgb");
        return {
            auto: xmlDoc.attrBool(attrs, "auto"),
            indexed: xmlDoc.attrInt(attrs, "indexed"),
            rgb: rgbStr ? parseInt(rgbStr, 16) : null,
            theme: xmlDoc.attrInt(attrs, "theme"),
            tint: xmlDoc.attrFloat(attrs, "tint"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Color, expectedTagName: string): HTMLElement {
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