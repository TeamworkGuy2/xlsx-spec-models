
export const CalcChain: OpenXmlIo.ReadWrite<OpenXml.CalculationChain> = {
    read(xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "calcChain", "root element of SpreadsheetML calculation chain part");
        var cElems = xmlDoc.queryAllChilds(elem, "c");
        return {
            cs: xmlDoc.readMulti(CalculationCell.read, cElems),
        };
    },

    write(xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("calcChain");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(CalculationCell.write, inst.cs));
        return elem;
    }
};

export const CalculationCell: OpenXmlIo.ReadWrite<OpenXml.CalculationCell> = {
    read(xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "c", "calcChain");
        return {
            i: xmlDoc.attrInt(elem, "i"),
            l: xmlDoc.attrBool(elem, "l"),
            r: xmlDoc.attrString(elem, "r") ?? "",
            s: xmlDoc.attrBool(elem, "s"),
        };
    },

    write(xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("c")
            .attrString("r", inst.r)
            .attrInt("i", inst.i)
            .attrBool("l", inst.l, true, "1", "0")
            .attrBool("s", inst.s, true, "1", "0")
            .element;

        return elem;
    }
};