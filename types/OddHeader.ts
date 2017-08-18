import StringElement = require("../base-types/StringElement");

class OddHeader {
    private static type: OpenXmlIo.ReadWrite<OpenXml.OddHeader> = OddHeader; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.OddHeader {
        return StringElement.read(xmlDoc, elem, "oddHeader", "headerFooter");
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.OddHeader): ElementLike {
        return StringElement.write(xmlDoc, inst, "oddHeader");
    }

}

export = OddHeader;