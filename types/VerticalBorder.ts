import BorderProperty = require("../base-types/BorderProperty");

class VerticalBorder {
    private static type: OpenXmlIo.ReadWrite<OpenXml.BorderProperty> = VerticalBorder; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.BorderProperty {
        return BorderProperty.read(xmlDoc, elem, "vertical", "border");
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.BorderProperty): HTMLElement {
        return BorderProperty.write(xmlDoc, inst, "vertical");
    }

}

export = VerticalBorder;