"use strict";
var Text = (function () {
    function Text() {
    }
    Text.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "t", "si, r");
        return {
            preserveSpace: xmlDoc.attrBool(elem.attributes, "xml:space"),
            content: elem.textContent
        };
    };
    Text.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("t");
        elem.textContent = inst.content;
        if (inst.preserveSpace) {
            elem.setAttribute("xml:space", "preserve");
        }
        return elem;
    };
    Text.copy = function (inst) {
        return {
            content: inst.content,
            preserveSpace: inst.preserveSpace
        };
    };
    return Text;
}());
Text.type = Text; // TODO type-checker
module.exports = Text;
