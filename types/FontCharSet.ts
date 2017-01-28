import IntAttribute = require("../base-types/IntAttribute");

class FontCharSet {
    private static type: OpenXmlIo.ReadWrite<OpenXml.FontCharSet> = FontCharSet; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.FontCharSet {
        return IntAttribute.read(xmlDoc, elem, "charset");
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.FontCharSet): HTMLElement {
        return IntAttribute.write(xmlDoc, inst, "charset");
    }


    public static copy(inst: OpenXml.FontCharSet): OpenXml.FontCharSet {
        return IntAttribute.copy(inst);
    }

}

export = FontCharSet;