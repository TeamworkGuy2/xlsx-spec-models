
class RgbColor {
    private static type: OpenXmlIo.ReadWrite<OpenXml.RgbColor> = RgbColor; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.RgbColor {
        xmlDoc.validator.expectNode(elem, "rgbColor", "indexedColors");
        var rgbStr = xmlDoc.attrString(elem.attributes, "rgb");
        return {
            rgb: rgbStr ? parseInt(rgbStr, 16) : null,
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.RgbColor): ElementLike {
        var rgbStr = inst.rgb && typeof inst.rgb === "number" ? (<number>inst.rgb).toString(16).toUpperCase() : <string>inst.rgb;
        var elem = xmlDoc.domBldr.create("rgbColor")
            .attrString("rgb", rgbStr, true)
            .element;
        return elem;
    }

}

export = RgbColor;