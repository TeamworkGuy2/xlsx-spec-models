import BorderProperty = require("../base-types/BorderProperty");

/** <vertical> (Vertical Inner Border) "x:vertical"
 * parents: border (§18.8.4)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.verticalborder.aspx
 */
class VerticalBorder {
    private static type: OpenXmlIo.ReadWrite<OpenXml.BorderProperty> = VerticalBorder; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.BorderProperty {
        return BorderProperty.read(xmlDoc, elem, "vertical", "border");
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.BorderProperty): HTMLElement {
        return BorderProperty.write(xmlDoc, inst, "vertical");
    }

}

export = VerticalBorder;