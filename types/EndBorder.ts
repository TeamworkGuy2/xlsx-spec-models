import BorderProperty = require("../base-types/BorderProperty");

class EndBorder {
    private static type: OpenXmlIo.ReadWrite<OpenXml.BorderProperty> = EndBorder; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.BorderProperty {
        return BorderProperty.read(xmlDoc, elem, "end", "border");
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.BorderProperty): HTMLElement {
        return BorderProperty.write(xmlDoc, inst, "end");
    }

}

export = EndBorder;