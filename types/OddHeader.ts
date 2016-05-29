import StringElement = require("../base-types/StringElement");

/** <oddHeader> (Odd Header) "x:oddHeader"
 * parent: headerFooter (§18.3.1.46)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.oddheader.aspx
 */
class OddHeader {
    private static type: OpenXmlIo.ReadWrite<OpenXml.OddHeader> = OddHeader; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.OddHeader {
        return StringElement.read(xmlDoc, elem, "oddHeader", "headerFooter");
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.OddHeader): HTMLElement {
        return StringElement.write(xmlDoc, inst, "oddHeader");
    }

}

export = OddHeader;