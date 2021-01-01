"use strict";
/** Generic Open XML parse for an element with a single string attribute
 * @since 2016-05-26
 */
var StringAttribute = /** @class */ (function () {
    function StringAttribute() {
    }
    StringAttribute.read = function (xmlDoc, elem, expectedTagName, parentTags) {
        var _a;
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
        return {
            val: (_a = xmlDoc.attrString(elem, "val")) !== null && _a !== void 0 ? _a : "",
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
    StringAttribute.type = StringAttribute; // TODO type-checker
    return StringAttribute;
}());
module.exports = StringAttribute;
