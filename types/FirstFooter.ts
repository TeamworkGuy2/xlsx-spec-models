import StringElement = require("../base-types/StringElement");

class FirstFooter {
    private static type: OpenXmlIo.ReadWrite<OpenXml.FirstFooter> = FirstFooter; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.FirstFooter {
        return StringElement.read(xmlDoc, elem, "firstFooter", "headerFooter");
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.FirstFooter): HTMLElement {
        return StringElement.write(xmlDoc, inst, "firstFooter");
    }

}

export = FirstFooter;