import StringElement = require("../base-types/StringElement");

class OddFooter {
    private static type: OpenXmlIo.ReadWrite<OpenXml.OddFooter> = OddFooter; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.OddFooter {
        return StringElement.read(xmlDoc, elem, "oddFooter", "headerFooter");
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.OddFooter): ElementLike {
        return StringElement.write(xmlDoc, inst, "oddFooter");
    }

}

export = OddFooter;