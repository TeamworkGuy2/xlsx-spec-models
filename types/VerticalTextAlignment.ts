import StringAttribute = require("../base-types/StringAttribute");

class VerticalTextAlignment {
    private static type: OpenXmlIo.ReadWrite<OpenXml.VerticalTextAlignment> = VerticalTextAlignment; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.VerticalTextAlignment {
        return <{ val: OpenXml.ST_VerticalAlignRun }>StringAttribute.read(xmlDoc, elem, "vertAlign", "font, rPr");
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.VerticalTextAlignment): ElementLike {
        return StringAttribute.write(xmlDoc, inst, "vertAlign");
    }


    public static copy(inst: OpenXml.VerticalTextAlignment): OpenXml.VerticalTextAlignment {
        return <{ val: OpenXml.ST_VerticalAlignRun }>StringAttribute.copy(inst);
    }

}

export = VerticalTextAlignment;