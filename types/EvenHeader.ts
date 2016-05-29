import StringElement = require("../base-types/StringElement");

/** <evenHeader> (Even Header) "x:evenHeader"
 * parent: headerFooter (§18.3.1.46)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.evenheader.aspx
 */
class EvenHeader {
    private static type: OpenXmlIo.ReadWrite<OpenXml.EvenHeader> = EvenHeader; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.EvenHeader {
        return StringElement.read(xmlDoc, elem, "evenHeader", "headerFooter");
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.EvenHeader): HTMLElement {
        return StringElement.write(xmlDoc, inst, "evenHeader");
    }

}

export = EvenHeader;