"use strict";
var SharedStringItem = require("./SharedStringItem");
/** <sst> (Shared String Table) "x:sst"
 * parent: Root element of SpreadsheetML Shared String Table part
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.sharedstringtable.aspx
 */
var SharedStringTable = (function () {
    function SharedStringTable() {
    }
    SharedStringTable.read = function (xmlDoc, elem) {
        if (elem.tagName !== "sst") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "sst", "root element of SpreadsheetML Shared String Table part");
        }
        var sharedStringElems = xmlDoc.domHelper.queryAllChilds(elem, "si");
        return {
            sis: xmlDoc.readOpenXml.readMulti(xmlDoc, SharedStringItem.read, sharedStringElems),
        };
    };
    SharedStringTable.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("sst");
        var siElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, SharedStringItem.write, inst.sis);
        xmlDoc.domHelper.addChilds(elem, siElems);
        return elem;
    };
    SharedStringTable.type = SharedStringTable; // TODO type-checker
    return SharedStringTable;
}());
module.exports = SharedStringTable;
