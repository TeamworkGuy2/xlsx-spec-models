"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RichTextRun = void 0;
var RichTextRunProperties_1 = require("./RichTextRunProperties");
var Text_1 = require("./Text");
var RichTextRun = /** @class */ (function () {
    function RichTextRun() {
    }
    RichTextRun.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "r", "si");
        var rPrElem = xmlDoc.queryOneChild(elem, "rPr", false);
        var textElem = xmlDoc.queryOneChild(elem, "t");
        return {
            rPr: rPrElem != null ? RichTextRunProperties_1.RichTextRunProperties.read(xmlDoc, rPrElem) : null,
            t: Text_1.Text.read(xmlDoc, textElem),
        };
    };
    RichTextRun.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("r");
        if (inst.rPr) {
            elem.appendChild(RichTextRunProperties_1.RichTextRunProperties.write(xmlDoc, inst.rPr));
        }
        elem.appendChild(Text_1.Text.write(xmlDoc, inst.t));
        return elem;
    };
    RichTextRun.copy = function (inst) {
        return {
            rPr: inst.rPr != null ? RichTextRunProperties_1.RichTextRunProperties.copy(inst.rPr) : null,
            t: Text_1.Text.copy(inst.t),
        };
    };
    RichTextRun.type = RichTextRun; // TODO type-checker
    return RichTextRun;
}());
exports.RichTextRun = RichTextRun;
