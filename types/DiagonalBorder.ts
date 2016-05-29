import BorderProperty = require("../base-types/BorderProperty");

/** <diagonal> (Bottom Border) "x:diagonal"
 * parents: border (§18.8.4)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.diagonalborder.aspx
 */
class DiagonalBorder {
    private static type: OpenXmlIo.ReadWrite<OpenXml.BorderProperty> = DiagonalBorder; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.BorderProperty {
        return BorderProperty.read(xmlDoc, elem, "diagonal", "border");
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.BorderProperty): HTMLElement {
        return BorderProperty.write(xmlDoc, inst, "diagonal");
    }

}

export = DiagonalBorder;