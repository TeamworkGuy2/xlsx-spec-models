"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanAttribute = void 0;
/** Generic Open XML parse for an element with a single boolean attribute
 * @since 2016-05-26
 */
var BooleanAttribute = /** @class */ (function () {
    function BooleanAttribute() {
    }
    BooleanAttribute.read = function (xmlDoc, elem, expectedTagName, parentTags) {
        var _a;
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
        return {
            val: (_a = xmlDoc.attrBool(elem, "val")) !== null && _a !== void 0 ? _a : false,
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
    BooleanAttribute.type = BooleanAttribute; // TODO type-checker
    return BooleanAttribute;
}());
exports.BooleanAttribute = BooleanAttribute;
