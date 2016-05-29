"use strict";
var EvenHeader = require("./EvenHeader");
var EvenFooter = require("./EvenFooter");
var FirstHeader = require("./FirstHeader");
var FirstFooter = require("./FirstFooter");
var OddHeader = require("./OddHeader");
var OddFooter = require("./OddFooter");
/** <headerFooter> (Header Footer) "x:headerFooter"
 * parent: chartsheet (§18.3.1.12); customSheetView (§18.3.1.24); customSheetView (§18.3.1.25); dialogsheet (§18.3.1.34); worksheet (§18.3.1.99)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.text.aspx
 */
var HeaderFooter = (function () {
    function HeaderFooter() {
    }
    HeaderFooter.read = function (xmlDoc, elem) {
        if (elem.tagName !== "headerFooter") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "headerFooter", "chartsheet, customSheetView, customSheetView, dialogsheet, worksheet");
        }
        var evenHeaderElem = xmlDoc.domHelper.queryOneChild(elem, "evenHeader");
        var evenFooterElem = xmlDoc.domHelper.queryOneChild(elem, "evenFooter");
        var firstHeaderElem = xmlDoc.domHelper.queryOneChild(elem, "firstHeader");
        var firstFooterElem = xmlDoc.domHelper.queryOneChild(elem, "firstFooter");
        var oddHeaderElem = xmlDoc.domHelper.queryOneChild(elem, "oddHeader");
        var oddFooterElem = xmlDoc.domHelper.queryOneChild(elem, "oddFooter");
        return {
            evenHeader: evenHeaderElem ? EvenHeader.read(xmlDoc, evenHeaderElem) : null,
            evenFooter: evenFooterElem ? EvenFooter.read(xmlDoc, evenFooterElem) : null,
            firstHeader: firstHeaderElem ? FirstHeader.read(xmlDoc, firstHeaderElem) : null,
            firstFooter: firstFooterElem ? FirstFooter.read(xmlDoc, firstFooterElem) : null,
            oddHeader: oddHeaderElem ? OddHeader.read(xmlDoc, oddHeaderElem) : null,
            oddFooter: oddFooterElem ? OddFooter.read(xmlDoc, oddFooterElem) : null,
        };
    };
    HeaderFooter.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("headerFooter");
        if (inst.evenHeader) {
            elem.appendChild(EvenHeader.write(xmlDoc, inst.evenHeader));
        }
        if (inst.evenFooter) {
            elem.appendChild(EvenFooter.write(xmlDoc, inst.evenFooter));
        }
        if (inst.firstHeader) {
            elem.appendChild(FirstHeader.write(xmlDoc, inst.firstHeader));
        }
        if (inst.firstFooter) {
            elem.appendChild(FirstFooter.write(xmlDoc, inst.firstFooter));
        }
        if (inst.oddHeader) {
            elem.appendChild(OddHeader.write(xmlDoc, inst.oddHeader));
        }
        if (inst.oddFooter) {
            elem.appendChild(OddFooter.write(xmlDoc, inst.oddFooter));
        }
        return elem;
    };
    HeaderFooter.type = HeaderFooter; // TODO type-checker
    return HeaderFooter;
}());
module.exports = HeaderFooter;
