"use strict";
var TableStyleElement = require("./TableStyleElement");
/** <tableStyle> (Table Style) "x:tableStyle"
 * parents: tableStyles (§18.8.42)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.tablestyle.aspx
 */
var TableStyle = (function () {
    function TableStyle() {
    }
    TableStyle.read = function (xmlDoc, elem) {
        if (elem.tagName !== "tableStyle") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "tableStyle", "tableStyles");
        }
        var tableStyleElementElems = xmlDoc.domHelper.queryAllChilds(elem, "tableStyleElement");
        var attrs = elem.attributes;
        return {
            tableStyleElements: xmlDoc.readOpenXml.readMulti(xmlDoc, TableStyleElement.read, tableStyleElementElems, "tableStyleElement"),
            count: xmlDoc.domHelper.attrInt(attrs, "count"),
            name: xmlDoc.domHelper.attrString(attrs, "name"),
            pivot: xmlDoc.domHelper.attrBool(attrs, "pivot"),
            table: xmlDoc.domHelper.attrBool(attrs, "table"),
        };
    };
    TableStyle.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("tableStyle")
            .attrInt("count", inst.count, true)
            .attrString("name", inst.name)
            .attrBool("pivot", inst.pivot, true)
            .attrBool("table", inst.table, true)
            .element;
        if (inst.tableStyleElements) {
            xmlDoc.domHelper.addChilds(elem, xmlDoc.writeOpenXml.writeMulti(xmlDoc, TableStyleElement.write, inst.tableStyleElements));
        }
        return elem;
    };
    TableStyle.type = TableStyle; // TODO type-checker
    return TableStyle;
}());
module.exports = TableStyle;
