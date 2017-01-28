"use strict";
var GradientFill = require("./GradientFill");
var PatternFill = require("./PatternFill");
var Fill = (function () {
    function Fill() {
    }
    Fill.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "fill", "dxf, fills, ndxf, odxf");
        var gradientFillElem = xmlDoc.queryOneChild(elem, "gradientFill");
        var patternFillElem = xmlDoc.queryOneChild(elem, "patternFill");
        return {
            gradientFill: gradientFillElem ? GradientFill.read(xmlDoc, gradientFillElem) : null,
            patternFill: patternFillElem ? PatternFill.read(xmlDoc, patternFillElem) : null,
        };
    };
    Fill.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("fill");
        if (inst.gradientFill) {
            elem.appendChild(GradientFill.write(xmlDoc, inst.gradientFill));
        }
        if (inst.patternFill) {
            elem.appendChild(PatternFill.write(xmlDoc, inst.patternFill));
        }
        return elem;
    };
    return Fill;
}());
Fill.type = Fill; // TODO type-checker
module.exports = Fill;
