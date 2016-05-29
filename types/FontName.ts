import StringAttribute = require("../base-types/StringAttribute");

/** <name> (Font Name) "x:name"
 * parent: font (§18.8.22)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.fontname.aspx
 */
class FontName {
    private static type: OpenXmlIo.ReadWrite<OpenXml.FontName> = FontName; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.FontName {
        return StringAttribute.read(xmlDoc, elem, "name");
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.FontName): HTMLElement {
        return StringAttribute.write(xmlDoc, inst, "name");
    }


    public static copy(inst: OpenXml.FontName): OpenXml.FontName {
        return StringAttribute.copy(inst);
    }

}

export = FontName;