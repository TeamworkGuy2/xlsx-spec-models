import StringElement = require("../base-types/StringElement");

/** <v> (Cell Value) "x:v"
 * parent: c (§18.3.1.4); cell (§18.14.1); nc (§18.11.1.3); oc (§18.11.1.5); tp (§18.15.3)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.cellvalue.aspx
 */
class CellValue {
    private static type: OpenXmlIo.ReadWrite<OpenXml.CellValue> = CellValue; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.CellValue {
        return StringElement.read(xmlDoc, elem, "v", "c, cell, nc, oc, tp");
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.CellValue): HTMLElement {
        return StringElement.write(xmlDoc, inst, "v");
    }

}

export = CellValue;