"use strict";
/** <c> (Cell) "x:c"
 * parent: calcChain (§18.6.2)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.calculationcell.aspx
 */
var CalculationCell = (function () {
    function CalculationCell() {
    }
    CalculationCell.read = function (xmlDoc, elem) {
        if (elem.tagName !== "c") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "c", "calcChain");
        }
        var childAttrs = elem.attributes;
        return {
            i: xmlDoc.domHelper.attrInt(childAttrs, "i"),
            l: xmlDoc.domHelper.attrBool(childAttrs, "l"),
            r: xmlDoc.domHelper.attrString(childAttrs, "r"),
            s: xmlDoc.domHelper.attrBool(childAttrs, "s"),
        };
    };
    CalculationCell.write = function (xmlDoc, inst) {
        var cellElem = xmlDoc.domBldr.create("c")
            .attrString("r", inst.r)
            .attrInt("i", inst.i)
            .attrBool("l", inst.l, true, "1", "0")
            .attrBool("s", inst.s, true, "1", "0")
            .element;
        return cellElem;
    };
    CalculationCell.type = CalculationCell; // TODO type-checker
    return CalculationCell;
}());
module.exports = CalculationCell;
