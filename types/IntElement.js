"use strict";
/** Generic Open XML parser for an element containing integer/numeric content
 * @since 2016-05-26
 */
var StringElement = /** @class */ (function () {
    function StringElement() {
    }
    StringElement.read = function (xmlDoc, elem, expectedTagName, parentTags) {
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
        return {
            content: parseInt(elem.textContent),
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
