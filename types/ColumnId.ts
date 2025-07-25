import { IntElement } from "../types/IntElement";

export class ColumnId {
    private static type: OpenXmlIo.ReadWrite<OpenXml.ColumnId> = ColumnId; // TODO type-checker

    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.ColumnId {
        return IntElement.read(xmlDoc, elem, "xdr:col", "from, to");
    }

    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.ColumnId): ElementLike {
        return IntElement.write(xmlDoc, inst, "xdr:col");
    }

}