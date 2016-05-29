import StringAttribute = require("../base-types/StringAttribute");

/** <vertAlign> (Vertical Alignment) "x:vertAlign"
 * parent: font (§18.8.22); rPr (§18.4.7)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.verticaltextalignment.aspx
 */
class VerticalTextAlignment {
    private static type: OpenXmlIo.ReadWrite<OpenXml.VerticalTextAlignment> = VerticalTextAlignment; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.VerticalTextAlignment {
        return StringAttribute.read(xmlDoc, elem, "vertAlign", "font, rPr");
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.VerticalTextAlignment): HTMLElement {
        return StringAttribute.write(xmlDoc, inst, "vertAlign");
    }


    public static copy(inst: OpenXml.VerticalTextAlignment): OpenXml.VerticalTextAlignment {
        return StringAttribute.copy(inst);
    }

}

export = VerticalTextAlignment;