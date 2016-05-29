import CalculationCell = require("./CalculationCell");

/** <calcChain> (Calculation Chain Info) "x:calcChain"
 * parent: Root element of SpreadsheetML Calculation Chain part
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.calculationchain.aspx
 */
class CalculationChain {
    private static type: OpenXmlIo.ReadWrite<OpenXml.CalculationChain> = CalculationChain; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.CalculationChain {
        if (elem.tagName !== "calcChain") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "calcChain", "root element of SpreadsheetML calculation chain part"); }
        var cElems = xmlDoc.domHelper.queryAllChilds(elem, "c");
        return {
            cs: xmlDoc.readOpenXml.readMulti(xmlDoc, CalculationCell.read, cElems),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.CalculationChain): HTMLElement {
        var elem = xmlDoc.dom.createElement("calcChain");

        var cElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, CalculationCell.write, inst.cs);
        xmlDoc.domHelper.addChilds(elem, cElems);

        return elem;
    }

}

export = CalculationChain;