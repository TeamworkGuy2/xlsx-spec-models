import BorderProperty = require("../base-types/BorderProperty");

/** <bottom> (Bottom Border) "x:bottom"
 * parents: border (§18.8.4)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.bottomborder.aspx
 */
class BottomBorder {
    private static type: OpenXmlIo.ReadWrite<OpenXml.BorderProperty> = BottomBorder; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.BorderProperty {
        return BorderProperty.read(xmlDoc, elem, "bottom", "border");
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.BorderProperty): HTMLElement {
        return BorderProperty.write(xmlDoc, inst, "bottom");
    }

}

export = BottomBorder;