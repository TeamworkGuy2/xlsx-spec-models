"use strict";
var StringAttribute = require("../base-types/StringAttribute");
/** <u> (Underline) "x:u"
 * parent: font (§18.8.22); rPr (§18.4.7)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.underline.aspx
 */
var Underline = (function () {
    function Underline() {
    }
    Underline.read = function (xmlDoc, elem) {
        return StringAttribute.read(xmlDoc, elem, "u", "font, rPr");
    };
    Underline.write = function (xmlDoc, inst) {
        return StringAttribute.write(xmlDoc, inst, "u");
    };
    Underline.copy = function (inst) {
        return StringAttribute.copy(inst);
    };
    Underline.type = Underline; // TODO type-checker
    return Underline;
}());
module.exports = Underline;
