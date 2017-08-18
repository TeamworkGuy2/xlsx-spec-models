"use strict";
var CellFormula = (function () {
    function CellFormula() {
    }
    CellFormula.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "f", "c, nc, oc");
        var attrs = elem.attributes;
        return {
            content: elem.textContent,
            ref: xmlDoc.attrString(attrs, "ref"),
            si: xmlDoc.attrInt(attrs, "si"),
            t: xmlDoc.attrString(attrs, "t"),
        };
    };
    CellFormula.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("f")
            .attrString("t", inst.t, true)
            .attrString("ref", inst.ref, true)
            .attrInt("si", inst.si, true)
            .element;
        elem.textContent = inst.content;
        return elem;
    };
    CellFormula.type = CellFormula; // TODO type-checker
    return CellFormula;
}());
module.exports = CellFormula;
