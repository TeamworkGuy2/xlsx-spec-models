import StringElement = require("../base-types/StringElement");

/** <firstHeader> (First Header) "x:firstHeader"
 * parent: headerFooter (§18.3.1.46)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.firstheader.aspx
 */
class FirstHeader {
    private static type: OpenXmlIo.ReadWrite<OpenXml.FirstHeader> = FirstHeader; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.FirstHeader {
        return StringElement.read(xmlDoc, elem, "firstHeader", "headerFooter");
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.FirstHeader): HTMLElement {
        return StringElement.write(xmlDoc, inst, "firstHeader");
    }

}

export = FirstHeader;