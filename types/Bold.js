"use strict";
var Bold = (function () {
    function Bold() {
    }
    Bold.read = function (xmlDoc, elem, expectedTagName, parentTags) {
        xmlDoc.validator.expectNode(elem, expectedTagName, (parentTags || "font, rPr"));
        var attrs = elem.attributes;
        var valAttr = xmlDoc.attrBool(attrs, "val");
        return {
            val: (valAttr == null || valAttr == true) ? true : valAttr,
        };
    };
    Bold.write = function (xmlDoc, inst, tagName) {
        var elem = xmlDoc.domBldr.create(tagName)
            .attrBool("val", inst.val === true ? null : inst.val, true, "1", "0")
            .element;
        return elem;
    };
    Bold.copy = function (inst) {
        return {
            val: inst.val,
        };
    };
    return Bold;
}());
Bold.type = Bold; // TODO type-checker
module.exports = Bold;
