"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntAttribute = void 0;
/** Generic Open XML parse for an element with a single integer attribute
 * @since 2016-05-26
 */
var IntAttribute = /** @class */ (function () {
    function IntAttribute() {
    }
    IntAttribute.read = function (xmlDoc, elem, expectedTagName, parentTags) {
        var _a;
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
        return {
            val: (_a = xmlDoc.attrInt(elem, "val")) !== null && _a !== void 0 ? _a : 0,
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
exports.IntAttribute = IntAttribute;
