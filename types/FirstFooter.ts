import StringElement = require("../base-types/StringElement");

/** <firstFooter> (First Footer) "x:firstFooter"
 * parent: headerFooter (§18.3.1.46)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.firstfooter.aspx
 */
class FirstFooter {
    private static type: OpenXmlIo.ReadWrite<OpenXml.FirstFooter> = FirstFooter; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.FirstFooter {
        return StringElement.read(xmlDoc, elem, "firstFooter", "headerFooter");
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.FirstFooter): HTMLElement {
        return StringElement.write(xmlDoc, inst, "firstFooter");
    }

}

export = FirstFooter;