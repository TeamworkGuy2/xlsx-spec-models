"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntElement = void 0;
/** Generic Open XML parser for an element containing integer/numeric content
 * @since 2016-05-26
 */
var IntElement = /** @class */ (function () {
    function IntElement() {
    }
    IntElement.read = function (xmlDoc, elem, expectedTagName, parentTags) {
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
        return {
            content: parseInt(elem.textContent), // only null on document or Doctype
        };
    };
    IntElement.write = function (xmlDoc, inst, tagName) {
        var elem = xmlDoc.dom.createElement(tagName);
        elem.textContent = inst.content;
        return elem;
    };
    IntElement.type = IntElement; // TODO type-checker
    return IntElement;
}());
exports.IntElement = IntElement;
