import StringElement = require("../base-types/StringElement");

class FirstHeader {
    private static type: OpenXmlIo.ReadWrite<OpenXml.FirstHeader> = FirstHeader; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.FirstHeader {
        return StringElement.read(xmlDoc, elem, "firstHeader", "headerFooter");
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.FirstHeader): HTMLElement {
        return StringElement.write(xmlDoc, inst, "firstHeader");
    }

}

export = FirstHeader;