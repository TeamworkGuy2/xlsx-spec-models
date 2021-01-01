"use strict";
var RichTextRun = require("../types/RichTextRun");
var Text = require("../types/Text");
var SharedStringTable;
(function (SharedStringTable_1) {
    SharedStringTable_1.SharedStringTable = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "sst", "root element of SpreadsheetML Shared String Table part");
            var sharedStringElems = xmlDoc.queryAllChilds(elem, "si");
            return {
                sis: xmlDoc.readMulti(SharedStringTable_1.SharedStringItem.read, sharedStringElems),
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("sst");
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(SharedStringTable_1.SharedStringItem.write, inst.sis));
            return elem;
        }
    };
    SharedStringTable_1.SharedStringItem = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "si", "sst");
            var rtrChilds = xmlDoc.queryAllChilds(elem, "r");
            var textChild = xmlDoc.queryOneChild(elem, "t", false);
            return {
                rs: xmlDoc.readMulti(RichTextRun.read, rtrChilds),
                t: textChild ? Text.read(xmlDoc, textChild) : null,
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("si");
            if (inst.rs) {
                xmlDoc.addChilds(elem, xmlDoc.writeMulti(RichTextRun.write, inst.rs));
            }
            if (inst.t) {
                elem.appendChild(Text.write(xmlDoc, inst.t));
            }
            return elem;
        },
        copy: function (inst) {
            return {
                rs: inst.rs != null ? inst.rs.map(RichTextRun.copy) : [],
                t: inst.t != null ? Text.copy(inst.t) : null,
            };
        }
    };
})(SharedStringTable || (SharedStringTable = {}));
module.exports = SharedStringTable;
