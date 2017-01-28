"use strict";
var SharedStringItem = require("./SharedStringItem");
var SharedStringTable = (function () {
    function SharedStringTable() {
    }
    SharedStringTable.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "sst", "root element of SpreadsheetML Shared String Table part");
        var sharedStringElems = xmlDoc.queryAllChilds(elem, "si");
        return {
            sis: xmlDoc.readMulti(SharedStringItem.read, sharedStringElems),
        };
    };
    SharedStringTable.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("sst");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(SharedStringItem.write, inst.sis));
        return elem;
    };
    return SharedStringTable;
}());
SharedStringTable.type = SharedStringTable; // TODO type-checker
module.exports = SharedStringTable;
