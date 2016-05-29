"use strict";
var StringElement = require("../base-types/StringElement");
/** <oddFooter> (Odd Footer) "x:oddFooter"
 * parent: headerFooter (§18.3.1.46)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.oddfooter.aspx
 */
var OddFooter = (function () {
    function OddFooter() {
    }
    OddFooter.read = function (xmlDoc, elem) {
        return StringElement.read(xmlDoc, elem, "oddFooter", "headerFooter");
    };
    OddFooter.write = function (xmlDoc, inst) {
        return StringElement.write(xmlDoc, inst, "oddFooter");
    };
    OddFooter.type = OddFooter; // TODO type-checker
    return OddFooter;
}());
module.exports = OddFooter;
