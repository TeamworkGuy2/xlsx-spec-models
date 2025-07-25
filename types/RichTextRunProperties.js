"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RichTextRunProperties = void 0;
var Bold_1 = require("./Bold");
var Color_1 = require("./Color");
var FontFamily_1 = require("./FontFamily");
var RunFont_1 = require("./RunFont");
var FontSize_1 = require("./FontSize");
var RichTextRunProperties = /** @class */ (function () {
    function RichTextRunProperties() {
    }
    RichTextRunProperties.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "rPr", "r");
        var boldElem = xmlDoc.queryOneChild(elem, "b", false);
        var colorElem = xmlDoc.queryOneChild(elem, "color", false);
        var familyElem = xmlDoc.queryOneChild(elem, "family", false);
        var rFontElem = xmlDoc.queryOneChild(elem, "rFont", false);
        var szElem = xmlDoc.queryOneChild(elem, "sz", false);
        return {
            b: boldElem ? Bold_1.Bold.read(xmlDoc, boldElem, "b", "rPr") : null,
            color: colorElem ? Color_1.Color.read(xmlDoc, colorElem, "color") : null,
            family: familyElem ? FontFamily_1.FontFamily.read(xmlDoc, familyElem) : null,
            rFont: rFontElem ? RunFont_1.RunFont.read(xmlDoc, rFontElem) : null,
            sz: szElem ? FontSize_1.FontSize.read(xmlDoc, szElem) : null,
        };
    };
    RichTextRunProperties.write = function (xmlDoc, inst) {
        var rPrElem = xmlDoc.dom.createElement("rPr");
        if (inst.b && inst.b.val) {
            rPrElem.appendChild(Bold_1.Bold.write(xmlDoc, inst.b, "b"));
        }
        if (inst.sz) {
            rPrElem.appendChild(FontSize_1.FontSize.write(xmlDoc, inst.sz));
        }
        if (inst.color) {
            rPrElem.appendChild(Color_1.Color.write(xmlDoc, inst.color, "color"));
        }
        if (inst.rFont) {
            rPrElem.appendChild(RunFont_1.RunFont.write(xmlDoc, inst.rFont));
        }
        if (inst.family) {
            rPrElem.appendChild(FontFamily_1.FontFamily.write(xmlDoc, inst.family));
        }
        return rPrElem;
    };
    RichTextRunProperties.copy = function (inst) {
        return {
            b: inst.b != null ? Bold_1.Bold.copy(inst.b) : null,
            family: inst.family != null ? FontFamily_1.FontFamily.copy(inst.family) : null,
            color: inst.color != null ? Color_1.Color.copy(inst.color) : null,
            rFont: inst.rFont != null ? RunFont_1.RunFont.copy(inst.rFont) : null,
            sz: inst.sz != null ? FontSize_1.FontSize.copy(inst.sz) : null,
        };
    };
    RichTextRunProperties.type = RichTextRunProperties; // TODO type-checker
    return RichTextRunProperties;
}());
exports.RichTextRunProperties = RichTextRunProperties;
