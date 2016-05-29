"use strict";
var RichTextRun = require("./RichTextRun");
var Text = require("./Text");
/** <si> (String Item) "x:si"
 * parent: sst (§18.4.9)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.sharedstringitem.aspx
 */
var SharedStringItem = (function () {
    function SharedStringItem() {
    }
    SharedStringItem.read = function (xmlDoc, elem) {
        if (elem.tagName !== "si") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "si", "sst");
        }
        var rtrChilds = xmlDoc.domHelper.queryAllChilds(elem, "r");
        var textChild = xmlDoc.domHelper.queryOneChild(elem, "t");
        return {
            rs: xmlDoc.readOpenXml.readMulti(xmlDoc, RichTextRun.read, rtrChilds),
            t: textChild ? Text.read(xmlDoc, textChild) : null,
        };
    };
    SharedStringItem.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("si");
        xmlDoc.domHelper.addChilds(elem, xmlDoc.writeOpenXml.writeMulti(xmlDoc, RichTextRun.write, inst.rs));
        if (inst.t) {
            elem.appendChild(Text.write(xmlDoc, inst.t));
        }
        return elem;
    };
    SharedStringItem.copy = function (inst) {
        return {
            rs: inst.rs != null ? inst.rs.map(RichTextRun.copy) : [],
            t: inst.t != null ? Text.copy(inst.t) : null,
        };
    };
    SharedStringItem.type = SharedStringItem; // TODO type-checker
    return SharedStringItem;
}());
module.exports = SharedStringItem;
