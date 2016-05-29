"use strict";
var StringElement = require("../base-types/StringElement");
/** <oddHeader> (Odd Header) "x:oddHeader"
 * parent: headerFooter (§18.3.1.46)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.oddheader.aspx
 */
var OddHeader = (function () {
    function OddHeader() {
    }
    OddHeader.read = function (xmlDoc, elem) {
        return StringElement.read(xmlDoc, elem, "oddHeader", "headerFooter");
    };
    OddHeader.write = function (xmlDoc, inst) {
        return StringElement.write(xmlDoc, inst, "oddHeader");
    };
    OddHeader.type = OddHeader; // TODO type-checker
    return OddHeader;
}());
module.exports = OddHeader;
