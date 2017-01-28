"use strict";
var Protection = (function () {
    function Protection() {
    }
    Protection.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "protection", "dxf, ndxf, odxf, xf");
        var attrs = elem.attributes;
        return {
            hidden: xmlDoc.attrBool(attrs, "hidden"),
            locked: xmlDoc.attrBool(attrs, "locked"),
        };
    };
    Protection.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("protection")
            .attrBool("hidden", inst.hidden, true, "1", "0")
            .attrBool("locked", inst.locked, true, "1", "0")
            .element;
        return elem;
    };
    return Protection;
}());
Protection.type = Protection; // TODO type-checker
module.exports = Protection;
