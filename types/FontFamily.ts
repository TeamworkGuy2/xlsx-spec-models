import IntAttribute = require("../base-types/IntAttribute");

class FontFamily {
    private static type: OpenXmlIo.ReadWrite<OpenXml.FontFamily> = FontFamily; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.FontFamily {
        return IntAttribute.read(xmlDoc, elem, "family", "font, rPr");
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.FontFamily): ElementLike {
        return IntAttribute.write(xmlDoc, inst, "family");
    }


    public static copy(inst: OpenXml.FontFamily): OpenXml.FontFamily {
        return IntAttribute.copy(inst);
    }

}

export = FontFamily;