import BorderProperty = require("../base-types/BorderProperty");

class StartBorder {
    private static type: OpenXmlIo.ReadWrite<OpenXml.BorderProperty> = StartBorder; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.BorderProperty {
        return BorderProperty.read(xmlDoc, elem, "start", "border");
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.BorderProperty): HTMLElement {
        return BorderProperty.write(xmlDoc, inst, "start");
    }

}

export = StartBorder;