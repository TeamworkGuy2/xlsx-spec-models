"use strict";
var BorderProperty = require("../base-types/BorderProperty");
/** <vertical> (Vertical Inner Border) "x:vertical"
 * parents: border (§18.8.4)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.verticalborder.aspx
 */
var VerticalBorder = (function () {
    function VerticalBorder() {
    }
    VerticalBorder.read = function (xmlDoc, elem) {
        return BorderProperty.read(xmlDoc, elem, "vertical", "border");
    };
    VerticalBorder.write = function (xmlDoc, inst) {
        return BorderProperty.write(xmlDoc, inst, "vertical");
    };
    VerticalBorder.type = VerticalBorder; // TODO type-checker
    return VerticalBorder;
}());
module.exports = VerticalBorder;
