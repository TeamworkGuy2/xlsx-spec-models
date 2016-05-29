"use strict";
var StringAttribute = require("../base-types/StringAttribute");
/** <name> (Font Name) "x:name"
 * parent: font (§18.8.22)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.fontname.aspx
 */
var FontName = (function () {
    function FontName() {
    }
    FontName.read = function (xmlDoc, elem) {
        return StringAttribute.read(xmlDoc, elem, "name");
    };
    FontName.write = function (xmlDoc, inst) {
        return StringAttribute.write(xmlDoc, inst, "name");
    };
    FontName.copy = function (inst) {
        return StringAttribute.copy(inst);
    };
    FontName.type = FontName; // TODO type-checker
    return FontName;
}());
module.exports = FontName;
