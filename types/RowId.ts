import { IntElement } from "../types/IntElement";

export class RowId {
    private static type: OpenXmlIo.ReadWrite<OpenXml.RowId> = RowId; // TODO type-checker

    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: Element): OpenXml.RowId {
        return IntElement.read(xmlDoc, elem, "xdr:row", "from, to");
    }

    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.RowId): ElementLike {
        return IntElement.write(xmlDoc, inst, "xdr:row");
    }
}