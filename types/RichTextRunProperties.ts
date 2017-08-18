﻿import Bold = require("./Bold");
import Color = require("./Color");
import FontFamily = require("./FontFamily");
import RunFont = require("./RunFont");
import FontSize = require("./FontSize");

class RichTextRunProperties {
    private static type: OpenXmlIo.ReadWrite<OpenXml.RichTextRunProperties> = RichTextRunProperties; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.RichTextRunProperties {
        xmlDoc.validator.expectNode(elem, "rPr", "r");
        var boldElem = xmlDoc.queryOneChild(elem, "b");
        var colorElem = xmlDoc.queryOneChild(elem, "color");
        var familyElem = xmlDoc.queryOneChild(elem, "family");
        var rFontElem = xmlDoc.queryOneChild(elem, "rFont");
        var szElem = xmlDoc.queryOneChild(elem, "sz");

        return {
            b: boldElem ? Bold.read(xmlDoc, boldElem, "b", "rPr") : null,
            color: colorElem ? Color.read(xmlDoc, colorElem, "color") : null,
            family: familyElem ? FontFamily.read(xmlDoc, familyElem) : null,
            rFont: rFontElem ? RunFont.read(xmlDoc, rFontElem) : null,
            sz: szElem ? FontSize.read(xmlDoc, szElem) : null,
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.RichTextRunProperties): ElementLike {
        var rPrElem = xmlDoc.dom.createElement("rPr");
        if (inst.b && inst.b.val) { rPrElem.appendChild(Bold.write(xmlDoc, inst.b, "b")); }
        if (inst.sz) { rPrElem.appendChild(FontSize.write(xmlDoc, inst.sz)); }
        if (inst.color) { rPrElem.appendChild(Color.write(xmlDoc, inst.color, "color")); }
        if (inst.rFont) { rPrElem.appendChild(RunFont.write(xmlDoc, inst.rFont)); }
        if (inst.family) { rPrElem.appendChild(FontFamily.write(xmlDoc, inst.family)); }

        return rPrElem;
    }


    public static copy(inst: OpenXml.RichTextRunProperties): OpenXml.RichTextRunProperties {
        return {
            b: inst.b != null ? Bold.copy(inst.b) : null,
            family: inst.family != null ? FontFamily.copy(inst.family) : null,
            color: inst.color != null ? Color.copy(inst.color) : null,
            rFont: inst.rFont != null ? RunFont.copy(inst.rFont) : null,
            sz: inst.sz != null ? FontSize.copy(inst.sz) : null,
        };
    }

}

export = RichTextRunProperties;