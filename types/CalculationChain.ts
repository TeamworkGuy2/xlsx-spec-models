import CalculationCell = require("./CalculationCell");

class CalculationChain {
    private static type: OpenXmlIo.ReadWrite<OpenXml.CalculationChain> = CalculationChain; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.CalculationChain {
        xmlDoc.validator.expectNode(elem, "calcChain", "root element of SpreadsheetML calculation chain part");
        var cElems = xmlDoc.queryAllChilds(elem, "c");
        return {
            cs: xmlDoc.readMulti(CalculationCell.read, cElems),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.CalculationChain): ElementLike {
        var elem = xmlDoc.dom.createElement("calcChain");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(CalculationCell.write, inst.cs));
        return elem;
    }

}

export = CalculationChain;