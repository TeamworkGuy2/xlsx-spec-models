import RichTextRun = require("../types/RichTextRun");
import Text = require("../types/Text");

module SharedStringTable {

    export var SharedStringTable: OpenXmlIo.ReadWrite<OpenXml.SharedStringTable> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "sst", "root element of SpreadsheetML Shared String Table part");
            var sharedStringElems = xmlDoc.queryAllChilds(elem, "si");
            return {
                sis: xmlDoc.readMulti(SharedStringItem.read, sharedStringElems),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("sst");
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(SharedStringItem.write, inst.sis));
            return elem;
        }
    };


    export var SharedStringItem: OpenXmlIo.ReadWriteCopy<OpenXml.SharedStringItem> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "si", "sst");

            var rtrChilds = xmlDoc.queryAllChilds(elem, "r");
            var textChild = xmlDoc.queryOneChild(elem, "t");

            return {
                rs: xmlDoc.readMulti(RichTextRun.read, rtrChilds),
                t: textChild ? Text.read(xmlDoc, textChild) : null,
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("si");
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(RichTextRun.write, inst.rs));
            if (inst.t) { elem.appendChild(Text.write(xmlDoc, inst.t)); }

            return elem;
        },

        copy(inst) {
            return {
                rs: inst.rs != null ? inst.rs.map(RichTextRun.copy) : [],
                t: inst.t != null ? Text.copy(inst.t) : null,
            };
        }
    };

}

export = SharedStringTable;