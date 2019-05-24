"use strict";
var CalcChain;
(function (CalcChain_1) {
    CalcChain_1.CalcChain = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "calcChain", "root element of SpreadsheetML calculation chain part");
            var cElems = xmlDoc.queryAllChilds(elem, "c");
            return {
                cs: xmlDoc.readMulti(CalcChain_1.CalculationCell.read, cElems),
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("calcChain");
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(CalcChain_1.CalculationCell.write, inst.cs));
            return elem;
        }
    };
    CalcChain_1.CalculationCell = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "c", "calcChain");
            return {
                i: xmlDoc.attrInt(elem, "i"),
                l: xmlDoc.attrBool(elem, "l"),
                r: xmlDoc.attrString(elem, "r"),
                s: xmlDoc.attrBool(elem, "s"),
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("c")
                .attrString("r", inst.r)
                .attrInt("i", inst.i)
                .attrBool("l", inst.l, true, "1", "0")
                .attrBool("s", inst.s, true, "1", "0")
                .element;
            return elem;
        }
    };
})(CalcChain || (CalcChain = {}));
module.exports = CalcChain;
