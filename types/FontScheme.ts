import StringAttribute = require("../base-types/StringAttribute");

/** <scheme> (Scheme) "x:scheme"
 * parent: font (§18.8.22); rPr (§18.4.7)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.fontscheme.aspx
 */
class FontScheme {
    private static type: OpenXmlIo.ReadWrite<OpenXml.FontScheme> = FontScheme; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.FontScheme {
        return StringAttribute.read(xmlDoc, elem, "scheme", "font, rPr");
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.FontScheme): HTMLElement {
        return StringAttribute.write(xmlDoc, inst, "scheme");
    }

}

export = FontScheme;