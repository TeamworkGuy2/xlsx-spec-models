"use strict";
var Text = require("./Text");
var RichTextRun = require("./RichTextRun");
var InlineString = (function () {
    function InlineString() {
    }
    InlineString.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "is", "c, nc, oc");
        var rElems = xmlDoc.queryAllChilds(elem, "r");
        var tElem = xmlDoc.queryOneChild(elem, "t");
        return {
            rs: xmlDoc.readMulti(RichTextRun.read, rElems),
            t: tElem ? Text.read(xmlDoc, tElem) : null,
        };
    };
    InlineString.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("is");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(RichTextRun.write, inst.rs));
        if (inst.t) {
            elem.appendChild(Text.write(xmlDoc, inst.t));
        }
        return elem;
    };
    InlineString.type = InlineString; // TODO type-checker
    return InlineString;
}());
module.exports = InlineString;
