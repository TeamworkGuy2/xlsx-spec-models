"use strict";
var Color = require("../types/Color");
/** Generic Open XML Border Property parser
 * @since 2016-05-26
 */
var BorderProperty = (function () {
    function BorderProperty() {
    }
    BorderProperty.read = function (xmlDoc, elem, expectedTagName, parentTags) {
        if (elem.tagName !== expectedTagName) {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, expectedTagName, parentTags || "border");
        }
        var colorElem = xmlDoc.domHelper.queryOneChild(elem, "color");
        var attrs = elem.attributes;
        return {
            color: colorElem ? Color.read(xmlDoc, colorElem, "color") : null,
            style: xmlDoc.domHelper.attrString(attrs, "style"),
        };
    };
    BorderProperty.write = function (xmlDoc, inst, tagName) {
        var elem = xmlDoc.domBldr.create(tagName)
            .attrString("style", inst.style, true)
            .element;
        if (inst.color) {
            elem.appendChild(Color.write(xmlDoc, inst.color, "color"));
        }
        return elem;
    };
    BorderProperty.type = BorderProperty; // TODO type-checker
    return BorderProperty;
}());
module.exports = BorderProperty;
