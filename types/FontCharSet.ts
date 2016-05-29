import IntAttribute = require("../base-types/IntAttribute");

/** <charset> (Charset) "x:charset"
 * parent:
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.fontcharset.aspx
 */
class FontCharSet {
    private static type: OpenXmlIo.ReadWrite<OpenXml.FontCharSet> = FontCharSet; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.FontCharSet {
        return IntAttribute.read(xmlDoc, elem, "charset");
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.FontCharSet): HTMLElement {
        return IntAttribute.write(xmlDoc, inst, "charset");
    }


    public static copy(inst: OpenXml.FontCharSet): OpenXml.FontCharSet {
        return IntAttribute.copy(inst);
    }

}

export = FontCharSet;