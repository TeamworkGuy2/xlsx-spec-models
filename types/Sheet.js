"use strict";
var Sheet = (function () {
    function Sheet() {
    }
    Sheet.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "sheet", "sheets");
        var attrs = elem.attributes;
        return {
            id: xmlDoc.attrString(attrs, "r:id"),
            name: xmlDoc.attrString(attrs, "name"),
            sheetId: xmlDoc.attrInt(attrs, "sheetId"),
            state: xmlDoc.attrString(attrs, "state"),
        };
    };
    Sheet.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("sheet")
            .attrString("r:id", inst.id)
            .attrString("name", inst.name)
            .attrInt("sheetId", inst.sheetId)
            .attrString("state", inst.state, true)
            .element;
        return elem;
    };
    Sheet.type = Sheet; // TODO type-checker
    return Sheet;
}());
module.exports = Sheet;
