"use strict";
var StringElement = require("../base-types/StringElement");
/** <firstHeader> (First Header) "x:firstHeader"
 * parent: headerFooter (§18.3.1.46)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.firstheader.aspx
 */
var FirstHeader = (function () {
    function FirstHeader() {
    }
    FirstHeader.read = function (xmlDoc, elem) {
        return StringElement.read(xmlDoc, elem, "firstHeader", "headerFooter");
    };
    FirstHeader.write = function (xmlDoc, inst) {
        return StringElement.write(xmlDoc, inst, "firstHeader");
    };
    FirstHeader.type = FirstHeader; // TODO type-checker
    return FirstHeader;
}());
module.exports = FirstHeader;
