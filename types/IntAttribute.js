"use strict";
/** Generic Open XML parse for an element with a single integer attribute
 * @since 2016-05-26
 */
var IntAttribute = /** @class */ (function () {
    function IntAttribute() {
    }
    IntAttribute.read = function (xmlDoc, elem, expectedTagName, parentTags) {
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
        return {
            val: xmlDoc.attrInt(elem, "val"),
        };
    };
    IntAttribute.write = function (xmlDoc, inst, tagName) {
        var elem = xmlDoc.domBldr.create(tagName)
            .attrInt("val", inst.val)
            .element;
        return elem;
    };
    IntAttribute.copy = function (inst) {
        return {
            val: inst.val
        };
    };
    IntAttribute.type = IntAttribute; // TODO type-checker
    return IntAttribute;
}());
module.exports = IntAttribute;
