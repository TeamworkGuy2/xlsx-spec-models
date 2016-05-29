"use strict";
var BorderProperty = require("../base-types/BorderProperty");
/** <horizontal> (Horizontal Inner Border) "x:horizontal"
 * parents: border (§18.8.4)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.horizontalborder.aspx
 */
var HorizontalBorder = (function () {
    function HorizontalBorder() {
    }
    HorizontalBorder.read = function (xmlDoc, elem) {
        return BorderProperty.read(xmlDoc, elem, "horizontal", "border");
    };
    HorizontalBorder.write = function (xmlDoc, inst) {
        return BorderProperty.write(xmlDoc, inst, "horizontal");
    };
    HorizontalBorder.type = HorizontalBorder; // TODO type-checker
    return HorizontalBorder;
}());
module.exports = HorizontalBorder;
