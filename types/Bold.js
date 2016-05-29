"use strict";
/** <b> (Bold) "x:b"
 * parent: font (§18.8.22); rPr (§18.4.7)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.bold.aspx
 */
var Bold = (function () {
    function Bold() {
    }
    Bold.read = function (xmlDoc, elem, expectedTagName, parentTags) {
        if (elem.tagName !== expectedTagName) {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, expectedTagName, (parentTags || "font, rPr"));
        }
        var attrs = elem.attributes;
        var valAttr = xmlDoc.domHelper.attrBool(attrs, "val");
        return {
            val: (valAttr == null || valAttr == true) ? true : valAttr,
        };
    };
    Bold.write = function (xmlDoc, inst, tagName) {
        var elem = xmlDoc.domBldr.create(tagName)
            .attrBool("val", inst.val === true ? null : inst.val, true, "1", "0")
            .element;
        return elem;
    };
    Bold.copy = function (inst) {
        return {
            val: inst.val,
        };
    };
    Bold.type = Bold; // TODO type-checker
    return Bold;
}());
module.exports = Bold;
