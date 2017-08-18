import StringAttribute = require("../base-types/StringAttribute");

class FontName {
    private static type: OpenXmlIo.ReadWrite<OpenXml.FontName> = FontName; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.FontName {
        return StringAttribute.read(xmlDoc, elem, "name");
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.FontName): ElementLike {
        return StringAttribute.write(xmlDoc, inst, "name");
    }


    public static copy(inst: OpenXml.FontName): OpenXml.FontName {
        return StringAttribute.copy(inst);
    }

}

export = FontName;