"use strict";
var Color = require("./Color");
var PatternFill = (function () {
    function PatternFill() {
    }
    PatternFill.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "patternFill", "dxfs, rfmt");
        var attrs = elem.attributes;
        var bgColorElem = xmlDoc.queryOneChild(elem, "bgColor");
        var fgColorElem = xmlDoc.queryOneChild(elem, "fgColor");
        return {
            bgColor: bgColorElem ? Color.read(xmlDoc, bgColorElem, "bgColor") : null,
            fgColor: fgColorElem ? Color.read(xmlDoc, fgColorElem, "fgColor") : null,
            patternType: xmlDoc.attrString(attrs, "patternType"),
        };
    };
    PatternFill.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("patternFill")
            .attrString("patternType", inst.patternType, true)
            .element;
        if (inst.bgColor) {
            elem.appendChild(Color.write(xmlDoc, inst.bgColor, "bgColor"));
        }
        if (inst.fgColor) {
            elem.appendChild(Color.write(xmlDoc, inst.fgColor, "fgColor"));
        }
        return elem;
    };
    return PatternFill;
}());
PatternFill.type = PatternFill; // TODO type-checker
module.exports = PatternFill;
