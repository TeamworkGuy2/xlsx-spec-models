"use strict";
var RichTextRunProperties = require("./RichTextRunProperties");
var Text = require("./Text");
var RichTextRun = /** @class */ (function () {
    function RichTextRun() {
    }
    RichTextRun.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "r", "si");
        var rPrElem = xmlDoc.queryOneChild(elem, "rPr", false);
        var textElem = xmlDoc.queryOneChild(elem, "t");
        return {
            rPr: rPrElem != null ? RichTextRunProperties.read(xmlDoc, rPrElem) : null,
            t: Text.read(xmlDoc, textElem),
        };
    };
    RichTextRun.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("r");
        if (inst.rPr) {
            elem.appendChild(RichTextRunProperties.write(xmlDoc, inst.rPr));
        }
        elem.appendChild(Text.write(xmlDoc, inst.t));
        return elem;
    };
    RichTextRun.copy = function (inst) {
        return {
            rPr: inst.rPr != null ? RichTextRunProperties.copy(inst.rPr) : null,
            t: Text.copy(inst.t),
        };
    };
    RichTextRun.type = RichTextRun; // TODO type-checker
    return RichTextRun;
}());
module.exports = RichTextRun;
