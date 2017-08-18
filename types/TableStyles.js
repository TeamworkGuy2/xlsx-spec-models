"use strict";
var TableStyle = require("./TableStyle");
var TableStyles = (function () {
    function TableStyles() {
    }
    TableStyles.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "tableStyles", "styleSheet");
        var attrs = elem.attributes;
        var tableStyleElems = xmlDoc.queryAllChilds(elem, "tableStyle");
        return {
            tableStyles: xmlDoc.readMulti(TableStyle.read, tableStyleElems),
            count: xmlDoc.attrInt(attrs, "count"),
            defaultPivotStyle: xmlDoc.attrString(attrs, "defaultPivotStyle"),
            defaultTableStyle: xmlDoc.attrString(attrs, "defaultTableStyle"),
        };
    };
    TableStyles.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("tableStyles")
            .attrInt("count", inst.count, true)
            .attrString("defaultPivotStyle", inst.defaultPivotStyle, true)
            .attrString("defaultTableStyle", inst.defaultTableStyle, true)
            .element;
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(TableStyle.write, inst.tableStyles));
        return elem;
    };
    TableStyles.type = TableStyles; // TODO type-checker
    return TableStyles;
}());
module.exports = TableStyles;
