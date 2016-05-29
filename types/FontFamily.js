"use strict";
var IntAttribute = require("../base-types/IntAttribute");
/** <family> (Font Family) "x:family"
 * parent: font (§18.8.22); rPr (§18.4.7)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.fontfamily.aspx
 */
var FontFamily = (function () {
    function FontFamily() {
    }
    FontFamily.read = function (xmlDoc, elem) {
        return IntAttribute.read(xmlDoc, elem, "family", "font, rPr");
    };
    FontFamily.write = function (xmlDoc, inst) {
        return IntAttribute.write(xmlDoc, inst, "family");
    };
    FontFamily.copy = function (inst) {
        return IntAttribute.copy(inst);
    };
    FontFamily.type = FontFamily; // TODO type-checker
    return FontFamily;
}());
module.exports = FontFamily;
