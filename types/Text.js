"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
var Text = /** @class */ (function () {
    function Text() {
    }
    Text.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "t", "si, r");
        return {
            preserveSpace: xmlDoc.attrBool(elem, "xml:space") || undefined,
            content: elem.textContent, // only null on document or Doctype
        };
    };
    Text.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("t");
        if (inst.preserveSpace) {
            elem.attrString("xml:space", "preserve");
        }
        elem.element.textContent = inst.content;
        return elem.element;
    };
    Text.copy = function (inst) {
        return {
            content: inst.content,
            preserveSpace: inst.preserveSpace
        };
    };
    Text.type = Text; // TODO type-checker
    return Text;
}());
exports.Text = Text;
