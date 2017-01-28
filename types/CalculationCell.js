"use strict";
var CalculationCell = (function () {
    function CalculationCell() {
    }
    CalculationCell.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "c", "calcChain");
        var childAttrs = elem.attributes;
        return {
            i: xmlDoc.attrInt(childAttrs, "i"),
            l: xmlDoc.attrBool(childAttrs, "l"),
            r: xmlDoc.attrString(childAttrs, "r"),
            s: xmlDoc.attrBool(childAttrs, "s"),
        };
    };
    CalculationCell.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("c")
            .attrString("r", inst.r)
            .attrInt("i", inst.i)
            .attrBool("l", inst.l, true, "1", "0")
            .attrBool("s", inst.s, true, "1", "0")
            .element;
        return elem;
    };
    return CalculationCell;
}());
CalculationCell.type = CalculationCell; // TODO type-checker
module.exports = CalculationCell;
