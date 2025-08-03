import { RichTextRunProperties } from "./RichTextRunProperties";
import { Text } from "./Text";

export class RichTextRun {
    private static type: OpenXmlIo.ReadWrite<OpenXml.RichTextRun> = RichTextRun; // TODO type-checker

    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: Element): OpenXml.RichTextRun {
        xmlDoc.validator.expectNode(elem, "r", "si");
        var rPrElem = xmlDoc.queryOneChild(elem, "rPr", false);
        var textElem = xmlDoc.queryOneChild(elem, "t");

        return {
            rPr: rPrElem != null ? RichTextRunProperties.read(xmlDoc, rPrElem) : null,
            t: Text.read(xmlDoc, textElem),
        };
    }

    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.RichTextRun): ElementLike {
        var elem = xmlDoc.dom.createElement("r");
        if (inst.rPr) { elem.appendChild(RichTextRunProperties.write(xmlDoc, inst.rPr)); }
        elem.appendChild(Text.write(xmlDoc, inst.t));

        return elem;
    }

    public static copy(inst: OpenXml.RichTextRun): OpenXml.RichTextRun {
        return {
            rPr: inst.rPr != null ? RichTextRunProperties.copy(inst.rPr) : null,
            t: Text.copy(inst.t),
        };
    }

}