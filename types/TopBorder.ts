import BorderProperty = require("../base-types/BorderProperty");

/** <top> (Top Border) "x:top"
 * parents: border (§18.8.4)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.topborder.aspx
 */
class TopBorder {
    private static type: OpenXmlIo.ReadWrite<OpenXml.BorderProperty> = TopBorder; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.BorderProperty {
        return BorderProperty.read(xmlDoc, elem, "top", "border");
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.BorderProperty): HTMLElement {
        return BorderProperty.write(xmlDoc, inst, "top");
    }

}

export = TopBorder;