"use strict";
/** Generic Open XML parse for an element with a single string attribute
 * @since 2016-05-26
 */
var StringAttribute = (function () {
    function StringAttribute() {
    }
    StringAttribute.read = function (xmlDoc, elem, expectedTagName, parentTags) {
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
        var attrs = elem.attributes;
        return {
            val: xmlDoc.attrString(attrs, "val"),
        };
    };
    StringAttribute.write = function (xmlDoc, inst, tagName) {
        var elem = xmlDoc.domBldr.create(tagName)
            .attrString("val", inst.val)
            .element;
        return elem;
    };
    StringAttribute.copy = function (inst) {
        return {
            val: inst.val
        };
    };
    return StringAttribute;
}());
StringAttribute.type = StringAttribute; // TODO type-checker
module.exports = StringAttribute;
