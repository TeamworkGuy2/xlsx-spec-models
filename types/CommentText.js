"use strict";
var RichTextRun = require("./RichTextRun");
var Text = require("./Text");
var CommentText = (function () {
    function CommentText() {
    }
    CommentText.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "text", "comment");
        var rtrElems = xmlDoc.queryAllChilds(elem, "r");
        var tElem = xmlDoc.queryOneChild(elem, "t");
        return {
            rs: xmlDoc.readMulti(RichTextRun.read, rtrElems),
            t: tElem ? Text.read(xmlDoc, tElem) : null,
        };
    };
    CommentText.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("text");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(RichTextRun.write, inst.rs));
        if (inst.t) {
            elem.appendChild(Text.write(xmlDoc, inst.t));
        }
        return elem;
    };
    return CommentText;
}());
CommentText.type = CommentText; // TODO type-checker
module.exports = CommentText;
