import StringElement = require("../base-types/StringElement");

class CellValue {
    private static type: OpenXmlIo.ReadWrite<OpenXml.CellValue> = CellValue; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.CellValue {
        return StringElement.read(xmlDoc, elem, "v", "c, cell, nc, oc, tp");
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.CellValue): ElementLike {
        return StringElement.write(xmlDoc, inst, "v");
    }

}

export = CellValue;