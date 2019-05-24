"use strict";
var Bold = /** @class */ (function () {
    function Bold() {
    }
    Bold.read = function (xmlDoc, elem, expectedTagName, parentTags) {
        xmlDoc.validator.expectNode(elem, expectedTagName, (parentTags || "font, rPr"));
        var valAttr = xmlDoc.attrBool(elem, "val");
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
    Bold.type = Bold; // TODO type-checker
    return Bold;
}());
module.exports = Bold;
