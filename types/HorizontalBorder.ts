import BorderProperty = require("../base-types/BorderProperty");

class HorizontalBorder {
    private static type: OpenXmlIo.ReadWrite<OpenXml.BorderProperty> = HorizontalBorder; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.BorderProperty {
        return BorderProperty.read(xmlDoc, elem, "horizontal", "border");
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.BorderProperty): HTMLElement {
        return BorderProperty.write(xmlDoc, inst, "horizontal");
    }

}

export = HorizontalBorder;