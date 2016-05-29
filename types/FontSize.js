"use strict";
var FloatAttribute = require("../base-types/FloatAttribute");
/** <sz> (Font Size) "x:sz"
 * parent: font (§18.8.22); rPr (§18.4.7)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.fontsize.aspx
 */
var FontSize = (function () {
    function FontSize() {
    }
    FontSize.read = function (xmlDoc, elem) {
        return FloatAttribute.read(xmlDoc, elem, "sz", "font, rPr");
    };
    FontSize.write = function (xmlDoc, inst) {
        return FloatAttribute.write(xmlDoc, inst, "sz");
    };
    FontSize.copy = function (inst) {
        return FloatAttribute.copy(inst);
    };
    FontSize.type = FontSize; // TODO type-checker
    return FontSize;
}());
module.exports = FontSize;
