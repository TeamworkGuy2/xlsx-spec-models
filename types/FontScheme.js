"use strict";
var StringAttribute = require("../base-types/StringAttribute");
/** <scheme> (Scheme) "x:scheme"
 * parent: font (§18.8.22); rPr (§18.4.7)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.fontscheme.aspx
 */
var FontScheme = (function () {
    function FontScheme() {
    }
    FontScheme.read = function (xmlDoc, elem) {
        return StringAttribute.read(xmlDoc, elem, "scheme", "font, rPr");
    };
    FontScheme.write = function (xmlDoc, inst) {
        return StringAttribute.write(xmlDoc, inst, "scheme");
    };
    FontScheme.type = FontScheme; // TODO type-checker
    return FontScheme;
}());
module.exports = FontScheme;
