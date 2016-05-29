import Color = require("./Color");

/** <patternFill> (Pattern) "x:patternFill"
 * parent: fill (§18.8.20)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.patternfill.aspx
 */
class PatternFill {
    private static type: OpenXmlIo.ReadWrite<OpenXml.PatternFill> = PatternFill; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.PatternFill {
        if (elem.tagName !== "patternFill") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "patternFill", "dxfs, rfmt"); }
        var bgColorElem = xmlDoc.domHelper.queryOneChild(elem, "bgColor");
        var fgColorElem = xmlDoc.domHelper.queryOneChild(elem, "fgColor");
        var attrs = elem.attributes;
        return {
            bgColor: bgColorElem ? Color.read(xmlDoc, bgColorElem, "bgColor") : null,
            fgColor: fgColorElem ? Color.read(xmlDoc, fgColorElem, "fgColor") : null,
            patternType: xmlDoc.domHelper.attrString(attrs, "patternType"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.PatternFill): HTMLElement {
        var elem = xmlDoc.domBldr.create("patternFill")
            .attrString("patternType", inst.patternType, true)
            .element;
        if (inst.bgColor) { elem.appendChild(Color.write(xmlDoc, inst.bgColor, "bgColor")); }
        if (inst.fgColor) { elem.appendChild(Color.write(xmlDoc, inst.fgColor, "fgColor")); }
        return elem;
    }

}

export = PatternFill;