"use strict";
/** Generic Open XML parse for an element with a single boolean attribute
 * @since 2016-05-26
 */
var BooleanAttribute = (function () {
    function BooleanAttribute() {
    }
    BooleanAttribute.read = function (xmlDoc, elem, expectedTagName, parentTags) {
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
        var attrs = elem.attributes;
        return {
            val: xmlDoc.attrBool(attrs, "val"),
        };
    };
    BooleanAttribute.write = function (xmlDoc, inst, tagName) {
        var elem = xmlDoc.domBldr.create(tagName)
            .attrBool("val", inst.val, true, "1", "0")
            .element;
        return elem;
    };
    BooleanAttribute.copy = function (inst) {
        return {
            val: inst.val
        };
    };
    return BooleanAttribute;
}());
BooleanAttribute.type = BooleanAttribute; // TODO type-checker
module.exports = BooleanAttribute;
