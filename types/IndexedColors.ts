import RgbColor = require("./RgbColor");

class IndexedColors {
    private static type: OpenXmlIo.ReadWrite<OpenXml.IndexedColors> = IndexedColors; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.IndexedColors {
        xmlDoc.validator.expectNode(elem, "indexedColors", "colors");
        var rgbColorElems = xmlDoc.queryAllChilds(elem, "rgbColor");
        return {
            rgbColors: xmlDoc.readMulti(RgbColor.read, rgbColorElems),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.IndexedColors): HTMLElement {
        var elem = xmlDoc.dom.createElement("indexedColors");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(RgbColor.write, inst.rgbColors));
        return elem;
    }

}

export = IndexedColors;