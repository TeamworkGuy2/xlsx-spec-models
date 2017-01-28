﻿import RichTextRunProperties = require("./RichTextRunProperties");
import Text = require("./Text");

class RichTextRun {
    private static type: OpenXmlIo.ReadWrite<OpenXml.RichTextRun> = RichTextRun; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.RichTextRun {
        xmlDoc.validator.expectNode(elem, "r", "si");

        var rPrElem = xmlDoc.queryOneChild(elem, "rPr");
        var textElem = xmlDoc.queryOneChild(elem, "t");
        return {
            rPr: rPrElem != null ? RichTextRunProperties.read(xmlDoc, rPrElem) : null,
            t: textElem != null ? Text.read(xmlDoc, textElem) : null,
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.RichTextRun): HTMLElement {
        var elem = xmlDoc.dom.createElement("r");
        if (inst.rPr) { elem.appendChild(RichTextRunProperties.write(xmlDoc, inst.rPr)); }
        if (inst.t) { elem.appendChild(Text.write(xmlDoc, inst.t)); }

        return elem;
    }


    public static copy(inst: OpenXml.RichTextRun): OpenXml.RichTextRun {
        return {
            rPr: inst.rPr != null ? RichTextRunProperties.copy(inst.rPr) : null,
            t: inst.t != null ? Text.copy(inst.t) : null,
        };
    }

}

export = RichTextRun;