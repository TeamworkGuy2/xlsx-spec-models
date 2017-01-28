"use strict";
var RunFont = (function () {
    function RunFont() {
    }
    RunFont.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "rFont", "rPr");
        var attrs = elem.attributes;
        return {
            val: xmlDoc.attrString(attrs, "val"),
        };
    };
    RunFont.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("rFont")
            .attrString("val", inst.val)
            .element;
        return elem;
    };
    RunFont.copy = function (inst) {
        return {
            val: inst.val
        };
    };
    return RunFont;
}());
RunFont.type = RunFont; // TODO type-checker
module.exports = RunFont;
