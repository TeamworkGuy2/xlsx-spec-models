"use strict";
var StringAttribute = require("../base-types/StringAttribute");
/** <vertAlign> (Vertical Alignment) "x:vertAlign"
 * parent: font (§18.8.22); rPr (§18.4.7)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.verticaltextalignment.aspx
 */
var VerticalTextAlignment = (function () {
    function VerticalTextAlignment() {
    }
    VerticalTextAlignment.read = function (xmlDoc, elem) {
        return StringAttribute.read(xmlDoc, elem, "vertAlign", "font, rPr");
    };
    VerticalTextAlignment.write = function (xmlDoc, inst) {
        return StringAttribute.write(xmlDoc, inst, "vertAlign");
    };
    VerticalTextAlignment.copy = function (inst) {
        return StringAttribute.copy(inst);
    };
    VerticalTextAlignment.type = VerticalTextAlignment; // TODO type-checker
    return VerticalTextAlignment;
}());
module.exports = VerticalTextAlignment;
