"use strict";
var CellStyle = (function () {
    function CellStyle() {
    }
    CellStyle.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "cellStyle", "cellStyles");
        var attrs = elem.attributes;
        return {
            builtinId: xmlDoc.attrInt(attrs, "builtinId"),
            customBuiltin: xmlDoc.attrBool(attrs, "customBuiltin"),
            hidden: xmlDoc.attrBool(attrs, "hidden"),
            iLevel: xmlDoc.attrInt(attrs, "iLevel"),
            name: xmlDoc.attrString(attrs, "name"),
            xfId: xmlDoc.attrInt(attrs, "xfId"),
        };
    };
    CellStyle.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("cellStyle")
            .attrString("name", inst.name, true)
            .attrInt("xfId", inst.xfId)
            .attrInt("builtinId", inst.builtinId, true)
            .attrBool("customBuiltin", inst.customBuiltin, true, "1", "0")
            .attrBool("hidden", inst.hidden, true, "1", "0")
            .attrInt("iLevel", inst.iLevel, true)
            .element;
        return elem;
    };
    CellStyle.type = CellStyle; // TODO type-checker
    return CellStyle;
}());
module.exports = CellStyle;
