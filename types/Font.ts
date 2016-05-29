import BooleanAttribute = require("../base-types/BooleanAttribute");
import Bold = require("./Bold");
import Color = require("./Color");
import FontCharSet = require("./FontCharSet");
import FontFamily = require("./FontFamily");
import FontName = require("./FontName");
import FontScheme = require("./FontScheme");
import FontSize = require("./FontSize");
import Underline = require("./Underline");
import VerticalTextAlignment = require("./VerticalTextAlignment");

/** <font> (Font) "x:font"
 * parents: dxf (§18.8.14); fonts (§18.8.23); ndxf (§18.11.1.4); odxf (§18.11.1.6)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.font.aspx
 */
class Font {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Font> = Font; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.Font {
        if (elem.tagName !== "font") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "font", "dxf, fonts, ndxf, odxf"); }
        var bElem = xmlDoc.domHelper.queryOneChild(elem, "b");
        var charsetElem = xmlDoc.domHelper.queryOneChild(elem, "charset");
        var colorElem = xmlDoc.domHelper.queryOneChild(elem, "color");
        var condenseElem = xmlDoc.domHelper.queryOneChild(elem, "condense");
        var extendElem = xmlDoc.domHelper.queryOneChild(elem, "extend");
        var familyElem = xmlDoc.domHelper.queryOneChild(elem, "family");
        var iElem = xmlDoc.domHelper.queryOneChild(elem, "i");
        var nameElem = xmlDoc.domHelper.queryOneChild(elem, "name");
        var outlineElem = xmlDoc.domHelper.queryOneChild(elem, "outline");
        var schemeElem = xmlDoc.domHelper.queryOneChild(elem, "scheme");
        var shadowElem = xmlDoc.domHelper.queryOneChild(elem, "shadow");
        var strikeElem = xmlDoc.domHelper.queryOneChild(elem, "strike");
        var szElem = xmlDoc.domHelper.queryOneChild(elem, "sz");
        var uElem = xmlDoc.domHelper.queryOneChild(elem, "u");
        var vertAlignElem = xmlDoc.domHelper.queryOneChild(elem, "vertAlign");

        var attrs = elem.attributes;
        return {
            b: bElem ? Bold.read(xmlDoc, bElem, "b", "font, rPr") : null,
            charset: charsetElem ? FontCharSet.read(xmlDoc, charsetElem) : null,
            color: colorElem ? Color.read(xmlDoc, colorElem, "color") : null,
            condense: condenseElem ? BooleanAttribute.read(xmlDoc, condenseElem, "condense", "font, rPr"): null,
            extend: extendElem ? BooleanAttribute.read(xmlDoc, extendElem, "extend", "font, rPr") : null,
            family: familyElem ? FontFamily.read(xmlDoc, familyElem) : null,
            i: iElem ? BooleanAttribute.read(xmlDoc, iElem, "i", "font, rPr") : null,
            name: nameElem ? FontName.read(xmlDoc, nameElem) : null,
            outline: outlineElem ? BooleanAttribute.read(xmlDoc, outlineElem, "outline", "font, rPr") : null,
            scheme: schemeElem ? FontScheme.read(xmlDoc, schemeElem) : null,
            shadow: shadowElem ? BooleanAttribute.read(xmlDoc, shadowElem, "shadow", "font, rPr") : null,
            strike: strikeElem ? BooleanAttribute.read(xmlDoc, strikeElem, "strike", "font, rPr") : null,
            sz: szElem ? FontSize.read(xmlDoc, szElem) : null,
            u: uElem ? Underline.read(xmlDoc, uElem) : null,
            vertAlign: vertAlignElem ? VerticalTextAlignment.read(xmlDoc, vertAlignElem) : null,
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.Font): HTMLElement {
        var elem = xmlDoc.dom.createElement("font");
        if (inst.b && inst.b.val) { elem.appendChild(Bold.write(xmlDoc, inst.b, "b")); }
        if (inst.sz) { elem.appendChild(FontSize.write(xmlDoc, inst.sz)); }
        if (inst.charset) { elem.appendChild(FontCharSet.write(xmlDoc, inst.charset)); }
        if (inst.color) { elem.appendChild(Color.write(xmlDoc, inst.color, "color")); }
        if (inst.condense) { elem.appendChild(BooleanAttribute.write(xmlDoc, inst.condense, "condense")); }
        if (inst.extend) { elem.appendChild(BooleanAttribute.write(xmlDoc, inst.extend, "extend")); }
        if (inst.name) { elem.appendChild(FontName.write(xmlDoc, inst.name)); }
        if (inst.family) { elem.appendChild(FontFamily.write(xmlDoc, inst.family)); }
        if (inst.i) { elem.appendChild(BooleanAttribute.write(xmlDoc, inst.i, "i")); }
        if (inst.outline) { elem.appendChild(BooleanAttribute.write(xmlDoc, inst.outline, "outline")); }
        if (inst.scheme) { elem.appendChild(FontScheme.write(xmlDoc, inst.scheme)); }
        if (inst.shadow) { elem.appendChild(BooleanAttribute.write(xmlDoc, inst.shadow, "shadow")); }
        if (inst.strike) { elem.appendChild(BooleanAttribute.write(xmlDoc, inst.strike, "strike")); }
        if (inst.u) { elem.appendChild(Underline.write(xmlDoc, inst.u)); }
        if (inst.vertAlign) { elem.appendChild(VerticalTextAlignment.write(xmlDoc, inst.vertAlign)); }
        return elem;
    }

}

export = Font;