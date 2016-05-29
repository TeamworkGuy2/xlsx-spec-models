import FloatAttribute = require("../base-types/FloatAttribute");

/** <sz> (Font Size) "x:sz"
 * parent: font (§18.8.22); rPr (§18.4.7)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.fontsize.aspx
 */
class FontSize {
    private static type: OpenXmlIo.ReadWrite<OpenXml.FontSize> = FontSize; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.FontSize {
        return FloatAttribute.read(xmlDoc, elem, "sz", "font, rPr");
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.FontSize): HTMLElement {
        return FloatAttribute.write(xmlDoc, inst, "sz");
    }


    public static copy(inst: OpenXml.FontSize): OpenXml.FontSize {
        return FloatAttribute.copy(inst);
    }

}

export = FontSize;