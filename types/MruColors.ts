import Color = require("./Color");

class MruColors {
    private static type: OpenXmlIo.ReadWrite<OpenXml.MruColors> = MruColors; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.MruColors {
        xmlDoc.validator.expectNode(elem, "mruColors", "styleSheet");
        var colorElems = xmlDoc.queryAllChilds(elem, "colors");
        return {
            colors: xmlDoc.readMulti(Color.read, colorElems, "color"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.MruColors): HTMLElement {
        var elem = xmlDoc.dom.createElement("mruColors");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Color.write, inst.colors, "color"));
        return elem;
    }

}

export = MruColors;