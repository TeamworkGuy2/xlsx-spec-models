import BorderProperty = require("../base-types/BorderProperty");

/** <horizontal> (Horizontal Inner Border) "x:horizontal"
 * parents: border (§18.8.4)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.horizontalborder.aspx
 */
class HorizontalBorder {
    private static type: OpenXmlIo.ReadWrite<OpenXml.BorderProperty> = HorizontalBorder; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.BorderProperty {
        return BorderProperty.read(xmlDoc, elem, "horizontal", "border");
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.BorderProperty): HTMLElement {
        return BorderProperty.write(xmlDoc, inst, "horizontal");
    }

}

export = HorizontalBorder;