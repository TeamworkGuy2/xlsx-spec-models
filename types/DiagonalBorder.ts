import BorderProperty = require("../base-types/BorderProperty");

class DiagonalBorder {
    private static type: OpenXmlIo.ReadWrite<OpenXml.BorderProperty> = DiagonalBorder; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.BorderProperty {
        return BorderProperty.read(xmlDoc, elem, "diagonal", "border");
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.BorderProperty): ElementLike {
        return BorderProperty.write(xmlDoc, inst, "diagonal");
    }

}

export = DiagonalBorder;