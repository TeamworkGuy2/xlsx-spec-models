import BorderProperty = require("../base-types/BorderProperty");

/** <end> (Trailing Edge Border) "x:end"
 * parents: border (§18.8.4)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.endborder.aspx
 */
class EndBorder {
    private static type: OpenXmlIo.ReadWrite<OpenXml.BorderProperty> = EndBorder; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.BorderProperty {
        return BorderProperty.read(xmlDoc, elem, "end", "border");
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.BorderProperty): HTMLElement {
        return BorderProperty.write(xmlDoc, inst, "end");
    }

}

export = EndBorder;