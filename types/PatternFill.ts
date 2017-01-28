import Color = require("./Color");

class PatternFill {
    private static type: OpenXmlIo.ReadWrite<OpenXml.PatternFill> = PatternFill; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.PatternFill {
        xmlDoc.validator.expectNode(elem, "patternFill", "dxfs, rfmt");
        var attrs = elem.attributes;
        var bgColorElem = xmlDoc.queryOneChild(elem, "bgColor");
        var fgColorElem = xmlDoc.queryOneChild(elem, "fgColor");
        return {
            bgColor: bgColorElem ? Color.read(xmlDoc, bgColorElem, "bgColor") : null,
            fgColor: fgColorElem ? Color.read(xmlDoc, fgColorElem, "fgColor") : null,
            patternType: <OpenXml.ST_PatternType>xmlDoc.attrString(attrs, "patternType"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.PatternFill): HTMLElement {
        var elem = xmlDoc.domBldr.create("patternFill")
            .attrString("patternType", inst.patternType, true)
            .element;
        if (inst.bgColor) { elem.appendChild(Color.write(xmlDoc, inst.bgColor, "bgColor")); }
        if (inst.fgColor) { elem.appendChild(Color.write(xmlDoc, inst.fgColor, "fgColor")); }
        return elem;
    }

}

export = PatternFill;