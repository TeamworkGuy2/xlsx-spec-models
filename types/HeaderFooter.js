"use strict";
var EvenHeader = require("./EvenHeader");
var EvenFooter = require("./EvenFooter");
var FirstHeader = require("./FirstHeader");
var FirstFooter = require("./FirstFooter");
var OddHeader = require("./OddHeader");
var OddFooter = require("./OddFooter");
var HeaderFooter = (function () {
    function HeaderFooter() {
    }
    HeaderFooter.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "headerFooter", "chartsheet, customSheetView, customSheetView, dialogsheet, worksheet");
        var evenHeaderElem = xmlDoc.queryOneChild(elem, "evenHeader");
        var evenFooterElem = xmlDoc.queryOneChild(elem, "evenFooter");
        var firstHeaderElem = xmlDoc.queryOneChild(elem, "firstHeader");
        var firstFooterElem = xmlDoc.queryOneChild(elem, "firstFooter");
        var oddHeaderElem = xmlDoc.queryOneChild(elem, "oddHeader");
        var oddFooterElem = xmlDoc.queryOneChild(elem, "oddFooter");
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
    return HeaderFooter;
}());
HeaderFooter.type = HeaderFooter; // TODO type-checker
module.exports = HeaderFooter;
