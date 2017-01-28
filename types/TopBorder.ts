import BorderProperty = require("../base-types/BorderProperty");

class TopBorder {
    private static type: OpenXmlIo.ReadWrite<OpenXml.BorderProperty> = TopBorder; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.BorderProperty {
        return BorderProperty.read(xmlDoc, elem, "top", "border");
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.BorderProperty): HTMLElement {
        return BorderProperty.write(xmlDoc, inst, "top");
    }

}

export = TopBorder;