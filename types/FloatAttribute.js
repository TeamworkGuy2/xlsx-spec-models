"use strict";
/** Generic Open XML parse for an element with a single float attribute
 * @since 2016-05-26
 */
var FloatAttribute = /** @class */ (function () {
    function FloatAttribute() {
    }
    FloatAttribute.read = function (xmlDoc, elem, expectedTagName, parentTags) {
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
        return {
            val: xmlDoc.attrFloat(elem, "val"),
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
    FloatAttribute.type = FloatAttribute; // TODO type-checker
    return FloatAttribute;
}());
module.exports = FloatAttribute;
