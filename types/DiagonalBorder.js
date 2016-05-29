"use strict";
var BorderProperty = require("../base-types/BorderProperty");
/** <diagonal> (Bottom Border) "x:diagonal"
 * parents: border (§18.8.4)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.diagonalborder.aspx
 */
var DiagonalBorder = (function () {
    function DiagonalBorder() {
    }
    DiagonalBorder.read = function (xmlDoc, elem) {
        return BorderProperty.read(xmlDoc, elem, "diagonal", "border");
    };
    DiagonalBorder.write = function (xmlDoc, inst) {
        return BorderProperty.write(xmlDoc, inst, "diagonal");
    };
    DiagonalBorder.type = DiagonalBorder; // TODO type-checker
    return DiagonalBorder;
}());
module.exports = DiagonalBorder;
