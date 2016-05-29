"use strict";
var BorderProperty = require("../base-types/BorderProperty");
/** <start> (Leading End Border) "x:start"
 * parents: border (§18.8.4)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.startborder.aspx
 */
var StartBorder = (function () {
    function StartBorder() {
    }
    StartBorder.read = function (xmlDoc, elem) {
        return BorderProperty.read(xmlDoc, elem, "start", "border");
    };
    StartBorder.write = function (xmlDoc, inst) {
        return BorderProperty.write(xmlDoc, inst, "start");
    };
    StartBorder.type = StartBorder; // TODO type-checker
    return StartBorder;
}());
module.exports = StartBorder;
