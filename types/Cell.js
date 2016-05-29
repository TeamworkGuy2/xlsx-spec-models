"use strict";
var CellFormula = require("./CellFormula");
var InlineString = require("./InlineString");
var CellValue = require("./CellValue");
/** <c> (Cell) "x:c"
 * parent: row (§18.3.1.73)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.cell.aspx
 */
var Cell = (function () {
    function Cell() {
    }
    Cell.read = function (xmlDoc, elem) {
        if (elem.tagName !== "c") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "c", "row");
        }
        var fElem = xmlDoc.domHelper.queryOneChild(elem, "f");
        var isElem = xmlDoc.domHelper.queryOneChild(elem, "is");
        var vElem = xmlDoc.domHelper.queryOneChild(elem, "v");
        var attrs = elem.attributes;
        return {
            f: fElem ? CellFormula.read(xmlDoc, fElem) : null,
            is: isElem ? InlineString.read(xmlDoc, isElem) : null,
            v: vElem ? CellValue.read(xmlDoc, vElem) : null,
            cm: xmlDoc.domHelper.attrInt(attrs, "cm"),
            ph: xmlDoc.domHelper.attrBool(attrs, "ph"),
            r: xmlDoc.domHelper.attrString(attrs, "r"),
            s: xmlDoc.domHelper.attrInt(attrs, "s"),
            t: xmlDoc.domHelper.attrString(attrs, "t"),
            vm: xmlDoc.domHelper.attrInt(attrs, "vm"),
        };
    };
    Cell.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("c")
            .attrInt("cm", inst.cm, true)
            .attrBool("ph", inst.ph, true)
            .attrString("r", inst.r, true)
            .attrInt("s", inst.s, true)
            .attrString("t", inst.t, true)
            .attrInt("vm", inst.vm, true)
            .element;
        if (inst.f) {
            elem.appendChild(CellFormula.write(xmlDoc, inst.f));
        }
        if (inst.is) {
            elem.appendChild(InlineString.write(xmlDoc, inst.is));
        }
        if (inst.v) {
            elem.appendChild(CellValue.write(xmlDoc, inst.v));
        }
        return elem;
    };
    Cell.type = Cell; // TODO type-checker
    return Cell;
}());
module.exports = Cell;
