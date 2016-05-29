import StringElement = require("../base-types/StringElement");

/** <evenFooter> (Even Header) "x:evenFooter"
 * parent: headerFooter (§18.3.1.46)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.evenfooter.aspx
 */
class EvenFooter {
    private static type: OpenXmlIo.ReadWrite<OpenXml.EvenFooter> = EvenFooter; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.EvenFooter {
        return StringElement.read(xmlDoc, elem, "evenfooter", "headerFooter");
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.EvenFooter): HTMLElement {
        return StringElement.write(xmlDoc, inst, "evenFooter");
    }

}

export = EvenFooter;