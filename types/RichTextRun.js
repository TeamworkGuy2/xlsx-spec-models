"use strict";
var RichTextRunProperties = require("./RichTextRunProperties");
var Text = require("./Text");
var RichTextRun = (function () {
    function RichTextRun() {
    }
    RichTextRun.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "r", "si");
        var rPrElem = xmlDoc.queryOneChild(elem, "rPr");
        var textElem = xmlDoc.queryOneChild(elem, "t");
        return {
            rPr: rPrElem != null ? RichTextRunProperties.read(xmlDoc, rPrElem) : null,
            t: textElem != null ? Text.read(xmlDoc, textElem) : null,
        };
    };
    RichTextRun.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("r");
        if (inst.rPr) {
            elem.appendChild(RichTextRunProperties.write(xmlDoc, inst.rPr));
        }
        if (inst.t) {
            elem.appendChild(Text.write(xmlDoc, inst.t));
        }
        return elem;
    };
    RichTextRun.copy = function (inst) {
        return {
            rPr: inst.rPr != null ? RichTextRunProperties.copy(inst.rPr) : null,
            t: inst.t != null ? Text.copy(inst.t) : null,
        };
    };
    return RichTextRun;
}());
RichTextRun.type = RichTextRun; // TODO type-checker
module.exports = RichTextRun;
