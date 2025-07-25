"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorderProperty = void 0;
var Color_1 = require("../types/Color");
/** (W3C XML CT_BorderPr §A.2) Generic Open XML Border Property parser
 * @since 2016-05-26
 */
var BorderProperty = /** @class */ (function () {
    function BorderProperty() {
    }
    BorderProperty.read = function (xmlDoc, elem, expectedTagName, parentTags) {
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags || "border");
        var colorElem = xmlDoc.queryOneChild(elem, "color", false);
        return {
            color: colorElem ? Color_1.Color.read(xmlDoc, colorElem, "color") : null,
            style: xmlDoc.attrString(elem, "style"),
        };
    };
    BorderProperty.write = function (xmlDoc, inst, tagName) {
        var elem = xmlDoc.domBldr.create(tagName)
            .attrString("style", inst.style, true)
            .element;
        if (inst.color) {
            elem.appendChild(Color_1.Color.write(xmlDoc, inst.color, "color"));
        }
        return elem;
    };
    BorderProperty.type = BorderProperty; // TODO type-checker
    return BorderProperty;
}());
exports.BorderProperty = BorderProperty;
