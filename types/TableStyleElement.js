"use strict";
var TableStyleElement = (function () {
    function TableStyleElement() {
    }
    TableStyleElement.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "tableStyleElement", "tableStyle");
        var attrs = elem.attributes;
        return {
            dxfId: xmlDoc.attrInt(attrs, "dxfId"),
            size: xmlDoc.attrInt(attrs, "size"),
            type: xmlDoc.attrString(attrs, "type"),
        };
    };
    TableStyleElement.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("tableStyleElement")
            .attrInt("dxfId", inst.dxfId, true)
            .attrInt("size", inst.size, true)
            .attrString("type", inst.type)
            .element;
        return elem;
    };
    TableStyleElement.type = TableStyleElement; // TODO type-checker
    return TableStyleElement;
}());
module.exports = TableStyleElement;
