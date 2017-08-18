import BorderProperty = require("../base-types/BorderProperty");

class BottomBorder {
    private static type: OpenXmlIo.ReadWrite<OpenXml.BorderProperty> = BottomBorder; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.BorderProperty {
        return BorderProperty.read(xmlDoc, elem, "bottom", "border");
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.BorderProperty): ElementLike {
        return BorderProperty.write(xmlDoc, inst, "bottom");
    }

}

export = BottomBorder;