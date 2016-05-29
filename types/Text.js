"use strict";
/** <t> (Text) "x:t"
 * parent: is (§18.3.1.53); r (§18.4.4); rPh (§18.4.6); si (§18.4.8); text (§18.7.7)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.text.aspx
 */
var Text = (function () {
    function Text() {
    }
    Text.read = function (xmlDoc, elem) {
        if (elem.tagName !== "t") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "t", "si, r");
        }
        return {
            preserveSpace: xmlDoc.domHelper.attrBool(elem.attributes, "xml:space"),
            content: elem.textContent
        };
    };
    Text.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("t");
        elem.textContent = inst.content;
        if (inst.preserveSpace) {
            elem.setAttribute("xml:space", "preserve");
        }
        return elem;
    };
    Text.copy = function (inst) {
        return {
            content: inst.content,
            preserveSpace: inst.preserveSpace
        };
    };
    Text.type = Text; // TODO type-checker
    return Text;
}());
module.exports = Text;
