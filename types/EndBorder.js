"use strict";
var BorderProperty = require("../base-types/BorderProperty");
/** <end> (Trailing Edge Border) "x:end"
 * parents: border (§18.8.4)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.endborder.aspx
 */
var EndBorder = (function () {
    function EndBorder() {
    }
    EndBorder.read = function (xmlDoc, elem) {
        return BorderProperty.read(xmlDoc, elem, "end", "border");
    };
    EndBorder.write = function (xmlDoc, inst) {
        return BorderProperty.write(xmlDoc, inst, "end");
    };
    EndBorder.type = EndBorder; // TODO type-checker
    return EndBorder;
}());
module.exports = EndBorder;
