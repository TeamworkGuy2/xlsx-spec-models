"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatAttribute = void 0;
/** Generic Open XML parse for an element with a single float attribute
 * @since 2016-05-26
 */
var FloatAttribute = /** @class */ (function () {
    function FloatAttribute() {
    }
    FloatAttribute.read = function (xmlDoc, elem, expectedTagName, parentTags) {
        var _a;
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
        return {
            val: (_a = xmlDoc.attrFloat(elem, "val")) !== null && _a !== void 0 ? _a : 0,
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
exports.FloatAttribute = FloatAttribute;
