"use strict";
/** <rFont> (Font) "x:rFont"
 * parent: rPr (§18.4.7)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.runfont.aspx
 */
var RunFont = (function () {
    function RunFont() {
    }
    RunFont.read = function (xmlDoc, elem) {
        if (elem.tagName !== "rFont") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "rFont", "rPr");
        }
        var attrs = elem.attributes;
        return {
            val: xmlDoc.domHelper.attrString(attrs, "val"),
        };
    };
    RunFont.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("rFont")
            .attrString("val", inst.val)
            .element;
        return elem;
    };
    RunFont.copy = function (inst) {
        return {
            val: inst.val
        };
    };
    RunFont.type = RunFont; // TODO type-checker
    return RunFont;
}());
module.exports = RunFont;
