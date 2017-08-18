import StringElement = require("../base-types/StringElement");

class EvenHeader {
    private static type: OpenXmlIo.ReadWrite<OpenXml.EvenHeader> = EvenHeader; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.EvenHeader {
        return StringElement.read(xmlDoc, elem, "evenHeader", "headerFooter");
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.EvenHeader): ElementLike {
        return StringElement.write(xmlDoc, inst, "evenHeader");
    }

}

export = EvenHeader;