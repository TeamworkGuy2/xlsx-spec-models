"use strict";
var CalculationCell = require("./CalculationCell");
/** <calcChain> (Calculation Chain Info) "x:calcChain"
 * parent: Root element of SpreadsheetML Calculation Chain part
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.calculationchain.aspx
 */
var CalculationChain = (function () {
    function CalculationChain() {
    }
    CalculationChain.read = function (xmlDoc, elem) {
        if (elem.tagName !== "calcChain") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "calcChain", "root element of SpreadsheetML calculation chain part");
        }
        var cElems = xmlDoc.domHelper.queryAllChilds(elem, "c");
        return {
            cs: xmlDoc.readOpenXml.readMulti(xmlDoc, CalculationCell.read, cElems),
        };
    };
    CalculationChain.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("calcChain");
        var cElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, CalculationCell.write, inst.cs);
        xmlDoc.domHelper.addChilds(elem, cElems);
        return elem;
    };
    CalculationChain.type = CalculationChain; // TODO type-checker
    return CalculationChain;
}());
module.exports = CalculationChain;
