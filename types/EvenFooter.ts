import StringElement = require("../base-types/StringElement");

class EvenFooter {
    private static type: OpenXmlIo.ReadWrite<OpenXml.EvenFooter> = EvenFooter; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.EvenFooter {
        return StringElement.read(xmlDoc, elem, "evenfooter", "headerFooter");
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.EvenFooter): HTMLElement {
        return StringElement.write(xmlDoc, inst, "evenFooter");
    }

}

export = EvenFooter;