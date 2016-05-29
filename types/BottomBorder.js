"use strict";
var BorderProperty = require("../base-types/BorderProperty");
/** <bottom> (Bottom Border) "x:bottom"
 * parents: border (§18.8.4)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.bottomborder.aspx
 */
var BottomBorder = (function () {
    function BottomBorder() {
    }
    BottomBorder.read = function (xmlDoc, elem) {
        return BorderProperty.read(xmlDoc, elem, "bottom", "border");
    };
    BottomBorder.write = function (xmlDoc, inst) {
        return BorderProperty.write(xmlDoc, inst, "bottom");
    };
    BottomBorder.type = BottomBorder; // TODO type-checker
    return BottomBorder;
}());
module.exports = BottomBorder;
