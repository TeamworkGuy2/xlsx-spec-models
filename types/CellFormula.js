"use strict";
/** <f> (Formula) "x:f"
 * parent: c (§18.3.1.4); nc (§18.11.1.3); oc (§18.11.1.5)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.cellformula.aspx
 */
var CellFormula = (function () {
    function CellFormula() {
    }
    CellFormula.read = function (xmlDoc, elem) {
        if (elem.tagName !== "f") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "f", "c, nc, oc");
        }
        var attrs = elem.attributes;
        return {
            content: elem.textContent,
            ref: xmlDoc.domHelper.attrString(attrs, "ref"),
            si: xmlDoc.domHelper.attrInt(attrs, "si"),
            t: xmlDoc.domHelper.attrString(attrs, "t"),
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
