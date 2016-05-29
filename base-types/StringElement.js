"use strict";
/** Generic Open XML parser for an element containing text content
 * @since 2016-05-26
 */
var StringElement = (function () {
    function StringElement() {
    }
    StringElement.read = function (xmlDoc, elem, expectedTagName, parentTags) {
        if (elem.tagName !== expectedTagName) {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, expectedTagName, parentTags);
        }
        return {
            content: elem.textContent,
        };
    };
    StringElement.write = function (xmlDoc, inst, tagName) {
        var elem = xmlDoc.dom.createElement(tagName);
        elem.textContent = inst.content;
        return elem;
    };
    StringElement.type = StringElement; // TODO type-checker
    return StringElement;
}());
module.exports = StringElement;
