import IntElement = require("../base-types/IntElement");

class RowOffset {
    private static type: OpenXmlIo.ReadWrite<OpenXml.RowOffset> = RowOffset; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.RowOffset {
        return IntElement.read(xmlDoc, elem, "xdr:rowOff", "from, to");
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.RowOffset): ElementLike {
        return IntElement.write(xmlDoc, inst, "xdr:rowOff");
    }

}

export = RowOffset;