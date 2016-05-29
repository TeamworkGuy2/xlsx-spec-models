import IntAttribute = require("../base-types/IntAttribute");

/** <family> (Font Family) "x:family"
 * parent: font (§18.8.22); rPr (§18.4.7)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.fontfamily.aspx
 */
class FontFamily {
    private static type: OpenXmlIo.ReadWrite<OpenXml.FontFamily> = FontFamily; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.FontFamily {
        return IntAttribute.read(xmlDoc, elem, "family", "font, rPr");
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.FontFamily): HTMLElement {
        return IntAttribute.write(xmlDoc, inst, "family");
    }


    public static copy(inst: OpenXml.FontFamily): OpenXml.FontFamily {
        return IntAttribute.copy(inst);
    }

}

export = FontFamily;