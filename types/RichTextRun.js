"use strict";
var RichTextRunProperties = require("./RichTextRunProperties");
var Text = require("./Text");
/** <r> (Rich Text Run) "x:r"
 * parent: is (§18.3.1.53); si (§18.4.8); text (§18.7.7)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.run.aspx
 */
var RichTextRun = (function () {
    function RichTextRun() {
    }
    RichTextRun.read = function (xmlDoc, elem) {
        if (elem.tagName !== "r") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "r", "si");
        }
        var rPrElem = xmlDoc.domHelper.queryOneChild(elem, "rPr");
        var textElem = xmlDoc.domHelper.queryOneChild(elem, "t");
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
    RichTextRun.type = RichTextRun; // TODO type-checker
    return RichTextRun;
}());
module.exports = RichTextRun;
