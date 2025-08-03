import { IntElement } from "../types/IntElement";

export class ColumnOffset {
    private static type: OpenXmlIo.ReadWrite<OpenXml.ColumnOffset> = ColumnOffset; // TODO type-checker

    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: Element): OpenXml.ColumnOffset {
        return IntElement.read(xmlDoc, elem, "xdr:colOff", "from, to");
    }

    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.ColumnOffset): ElementLike {
        return IntElement.write(xmlDoc, inst, "xdr:colOff");
    }
}