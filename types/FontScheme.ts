import StringAttribute = require("../base-types/StringAttribute");

class FontScheme {
    private static type: OpenXmlIo.ReadWrite<OpenXml.FontScheme> = FontScheme; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.FontScheme {
        return <OpenXml.FontScheme>StringAttribute.read(xmlDoc, elem, "scheme", "font, rPr");
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.FontScheme): ElementLike {
        return StringAttribute.write(xmlDoc, inst, "scheme");
    }

}

export = FontScheme;