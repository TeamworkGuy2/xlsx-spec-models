"use strict";
/** Generic Open XML parse for an element with a single float attribute
 * @since 2016-05-26
 */
var FloatAttribute = (function () {
    function FloatAttribute() {
    }
    FloatAttribute.read = function (xmlDoc, elem, expectedTagName, parentTags) {
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
        var attrs = elem.attributes;
        return {
            val: xmlDoc.attrFloat(attrs, "val"),
        };
    };
    FloatAttribute.write = function (xmlDoc, inst, tagName) {
        var elem = xmlDoc.domBldr.create(tagName)
            .attrFloat("val", inst.val)
            .element;
        return elem;
    };
    FloatAttribute.copy = function (inst) {
        return {
            val: inst.val
        };
    };
    return FloatAttribute;
}());
FloatAttribute.type = FloatAttribute; // TODO type-checker
module.exports = FloatAttribute;
