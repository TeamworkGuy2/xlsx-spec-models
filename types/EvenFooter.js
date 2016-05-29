"use strict";
var StringElement = require("../base-types/StringElement");
/** <evenFooter> (Even Header) "x:evenFooter"
 * parent: headerFooter (§18.3.1.46)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.evenfooter.aspx
 */
var EvenFooter = (function () {
    function EvenFooter() {
    }
    EvenFooter.read = function (xmlDoc, elem) {
        return StringElement.read(xmlDoc, elem, "evenfooter", "headerFooter");
    };
    EvenFooter.write = function (xmlDoc, inst) {
        return StringElement.write(xmlDoc, inst, "evenFooter");
    };
    EvenFooter.type = EvenFooter; // TODO type-checker
    return EvenFooter;
}());
module.exports = EvenFooter;
