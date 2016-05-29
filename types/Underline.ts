import StringAttribute = require("../base-types/StringAttribute");

/** <u> (Underline) "x:u"
 * parent: font (§18.8.22); rPr (§18.4.7)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.underline.aspx
 */
class Underline {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Underline> = Underline; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.Underline {
        return StringAttribute.read(xmlDoc, elem, "u", "font, rPr");
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.Underline): HTMLElement {
        return StringAttribute.write(xmlDoc, inst, "u");
    }


    public static copy(inst: OpenXml.Underline): OpenXml.Underline {
        return StringAttribute.copy(inst);
    }

}

export = Underline;