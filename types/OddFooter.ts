import StringElement = require("../base-types/StringElement");

/** <oddFooter> (Odd Footer) "x:oddFooter"
 * parent: headerFooter (§18.3.1.46)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.oddfooter.aspx
 */
class OddFooter {
    private static type: OpenXmlIo.ReadWrite<OpenXml.OddFooter> = OddFooter; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.OddFooter {
        return StringElement.read(xmlDoc, elem, "oddFooter", "headerFooter");
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.OddFooter): HTMLElement {
        return StringElement.write(xmlDoc, inst, "oddFooter");
    }

}

export = OddFooter;