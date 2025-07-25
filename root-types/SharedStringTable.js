"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedStringItem = exports.SharedStringTable = void 0;
var RichTextRun_1 = require("../types/RichTextRun");
var Text_1 = require("../types/Text");
exports.SharedStringTable = {
    read: function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "sst", "root element of SpreadsheetML Shared String Table part");
        var sharedStringElems = xmlDoc.queryAllChilds(elem, "si");
        return {
            sis: xmlDoc.readMulti(exports.SharedStringItem.read, sharedStringElems),
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("sst");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(exports.SharedStringItem.write, inst.sis));
        return elem;
    }
};
exports.SharedStringItem = {
    read: function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "si", "sst");
        var rtrChilds = xmlDoc.queryAllChilds(elem, "r");
        var textChild = xmlDoc.queryOneChild(elem, "t", false);
        return {
            rs: xmlDoc.readMulti(RichTextRun_1.RichTextRun.read, rtrChilds),
            t: textChild ? Text_1.Text.read(xmlDoc, textChild) : null,
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("si");
        if (inst.rs) {
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(RichTextRun_1.RichTextRun.write, inst.rs));
        }
        if (inst.t) {
            elem.appendChild(Text_1.Text.write(xmlDoc, inst.t));
        }
        return elem;
    },
    copy: function (inst) {
        return {
            rs: inst.rs != null ? inst.rs.map(RichTextRun_1.RichTextRun.copy) : [],
            t: inst.t != null ? Text_1.Text.copy(inst.t) : null,
        };
    }
};
