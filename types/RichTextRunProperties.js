"use strict";
var Bold = require("./Bold");
var Color = require("./Color");
var FontFamily = require("./FontFamily");
var RunFont = require("./RunFont");
var FontSize = require("./FontSize");
var RichTextRunProperties = (function () {
    function RichTextRunProperties() {
    }
    RichTextRunProperties.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "rPr", "r");
        var boldElem = xmlDoc.queryOneChild(elem, "b");
        var colorElem = xmlDoc.queryOneChild(elem, "color");
        var familyElem = xmlDoc.queryOneChild(elem, "family");
        var rFontElem = xmlDoc.queryOneChild(elem, "rFont");
        var szElem = xmlDoc.queryOneChild(elem, "sz");
        return {
            b: boldElem ? Bold.read(xmlDoc, boldElem, "b", "rPr") : null,
            color: colorElem ? Color.read(xmlDoc, colorElem, "color") : null,
            family: familyElem ? FontFamily.read(xmlDoc, familyElem) : null,
            rFont: rFontElem ? RunFont.read(xmlDoc, rFontElem) : null,
            sz: szElem ? FontSize.read(xmlDoc, szElem) : null,
        };
    };
    RichTextRunProperties.write = function (xmlDoc, inst) {
        var dom = xmlDoc.dom, domBldr = xmlDoc.domBldr;
        var rPrElem = dom.createElement("rPr");
        if (inst.b && inst.b.val) {
            rPrElem.appendChild(Bold.write(xmlDoc, inst.b, "b"));
        }
        if (inst.sz) {
            rPrElem.appendChild(FontSize.write(xmlDoc, inst.sz));
        }
        if (inst.color) {
            rPrElem.appendChild(Color.write(xmlDoc, inst.color, "color"));
        }
        if (inst.rFont) {
            rPrElem.appendChild(RunFont.write(xmlDoc, inst.rFont));
        }
        if (inst.family) {
            rPrElem.appendChild(FontFamily.write(xmlDoc, inst.family));
        }
        return rPrElem;
    };
    RichTextRunProperties.copy = function (inst) {
        return {
            b: inst.b != null ? Bold.copy(inst.b) : null,
            family: inst.family != null ? FontFamily.copy(inst.family) : null,
            color: inst.color != null ? Color.copy(inst.color) : null,
            rFont: inst.rFont != null ? RunFont.copy(inst.rFont) : null,
            sz: inst.sz != null ? FontSize.copy(inst.sz) : null,
        };
    };
    return RichTextRunProperties;
}());
RichTextRunProperties.type = RichTextRunProperties; // TODO type-checker
module.exports = RichTextRunProperties;
