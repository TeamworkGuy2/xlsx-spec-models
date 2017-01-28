import StringAttribute = require("../base-types/StringAttribute");

class Underline {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Underline> = Underline; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Underline {
        return <{ val: OpenXml.ST_UnderlineValues }>StringAttribute.read(xmlDoc, elem, "u", "font, rPr");
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Underline): HTMLElement {
        return StringAttribute.write(xmlDoc, inst, "u");
    }


    public static copy(inst: OpenXml.Underline): OpenXml.Underline {
        return <{ val: OpenXml.ST_UnderlineValues }>StringAttribute.copy(inst);
    }

}

export = Underline;