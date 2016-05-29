"use strict";
var StringElement = require("../base-types/StringElement");
/** <evenHeader> (Even Header) "x:evenHeader"
 * parent: headerFooter (§18.3.1.46)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.evenheader.aspx
 */
var EvenHeader = (function () {
    function EvenHeader() {
    }
    EvenHeader.read = function (xmlDoc, elem) {
        return StringElement.read(xmlDoc, elem, "evenHeader", "headerFooter");
    };
    EvenHeader.write = function (xmlDoc, inst) {
        return StringElement.write(xmlDoc, inst, "evenHeader");
    };
    EvenHeader.type = EvenHeader; // TODO type-checker
    return EvenHeader;
}());
module.exports = EvenHeader;
