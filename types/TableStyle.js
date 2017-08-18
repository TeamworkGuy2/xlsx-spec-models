"use strict";
var TableStyleElement = require("./TableStyleElement");
var TableStyle = (function () {
    function TableStyle() {
    }
    TableStyle.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "tableStyle", "tableStyles");
        var attrs = elem.attributes;
        var tableStyleElementElems = xmlDoc.queryAllChilds(elem, "tableStyleElement");
        return {
            tableStyleElements: xmlDoc.readMulti(TableStyleElement.read, tableStyleElementElems, "tableStyleElement"),
            count: xmlDoc.attrInt(attrs, "count"),
            name: xmlDoc.attrString(attrs, "name"),
            pivot: xmlDoc.attrBool(attrs, "pivot"),
            table: xmlDoc.attrBool(attrs, "table"),
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
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(TableStyleElement.write, inst.tableStyleElements));
        }
        return elem;
    };
    TableStyle.type = TableStyle; // TODO type-checker
    return TableStyle;
}());
module.exports = TableStyle;
