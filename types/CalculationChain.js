"use strict";
var CalculationCell = require("./CalculationCell");
var CalculationChain = (function () {
    function CalculationChain() {
    }
    CalculationChain.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "calcChain", "root element of SpreadsheetML calculation chain part");
        var cElems = xmlDoc.queryAllChilds(elem, "c");
        return {
            cs: xmlDoc.readMulti(CalculationCell.read, cElems),
        };
    };
    CalculationChain.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("calcChain");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(CalculationCell.write, inst.cs));
        return elem;
    };
    return CalculationChain;
}());
CalculationChain.type = CalculationChain; // TODO type-checker
module.exports = CalculationChain;
