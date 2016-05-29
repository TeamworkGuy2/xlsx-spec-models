import BorderProperty = require("../base-types/BorderProperty");

/** <start> (Leading End Border) "x:start"
 * parents: border (§18.8.4)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.startborder.aspx
 */
class StartBorder {
    private static type: OpenXmlIo.ReadWrite<OpenXml.BorderProperty> = StartBorder; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.BorderProperty {
        return BorderProperty.read(xmlDoc, elem, "start", "border");
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.BorderProperty): HTMLElement {
        return BorderProperty.write(xmlDoc, inst, "start");
    }

}

export = StartBorder;