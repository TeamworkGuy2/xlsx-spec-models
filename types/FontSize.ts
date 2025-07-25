import { FloatAttribute } from "../types/FloatAttribute";

export class FontSize {
    private static type: OpenXmlIo.ReadWrite<OpenXml.FontSize> = FontSize; // TODO type-checker

    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.FontSize {
        return FloatAttribute.read(xmlDoc, elem, "sz", "font, rPr");
    }

    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.FontSize): ElementLike {
        return FloatAttribute.write(xmlDoc, inst, "sz");
    }

    public static copy(inst: OpenXml.FontSize): OpenXml.FontSize {
        return FloatAttribute.copy(inst);
    }
}