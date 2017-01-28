"use strict";
var RichTextRun = require("./RichTextRun");
var Text = require("./Text");
var SharedStringItem = (function () {
    function SharedStringItem() {
    }
    SharedStringItem.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "si", "sst");
        var rtrChilds = xmlDoc.queryAllChilds(elem, "r");
        var textChild = xmlDoc.queryOneChild(elem, "t");
        return {
            rs: xmlDoc.readMulti(RichTextRun.read, rtrChilds),
            t: textChild ? Text.read(xmlDoc, textChild) : null,
        };
    };
    SharedStringItem.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("si");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(RichTextRun.write, inst.rs));
        if (inst.t) {
            elem.appendChild(Text.write(xmlDoc, inst.t));
        }
        return elem;
    };
    SharedStringItem.copy = function (inst) {
        return {
            rs: inst.rs != null ? inst.rs.map(RichTextRun.copy) : [],
            t: inst.t != null ? Text.copy(inst.t) : null,
        };
    };
    return SharedStringItem;
}());
SharedStringItem.type = SharedStringItem; // TODO type-checker
module.exports = SharedStringItem;
