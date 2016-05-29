"use strict";
var Alignment = require("./Alignment");
var Border = require("./Border");
var Fill = require("./Fill");
var Font = require("./Font");
var NumberingFormat = require("./NumberingFormat");
var Protection = require("./Protection");
/** <dxf> (Formatting) "x:dxf"
 * parent: dxfs (§18.8.15); rfmt (§18.11.1.17)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.differentialformat.aspx
 */
var DifferentialFormat = (function () {
    function DifferentialFormat() {
    }
    DifferentialFormat.read = function (xmlDoc, elem) {
        if (elem.tagName !== "dxf") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "dxf", "dxfs, rfmt");
        }
        var alignmentElem = xmlDoc.domHelper.queryOneChild(elem, "alignment");
        var borderElem = xmlDoc.domHelper.queryOneChild(elem, "border");
        var fillElem = xmlDoc.domHelper.queryOneChild(elem, "fill");
        var fontElem = xmlDoc.domHelper.queryOneChild(elem, "font");
        var numFmtElem = xmlDoc.domHelper.queryOneChild(elem, "numFmt");
        var protectionElem = xmlDoc.domHelper.queryOneChild(elem, "protection");
        return {
            alignment: alignmentElem ? Alignment.read(xmlDoc, alignmentElem) : null,
            border: borderElem ? Border.read(xmlDoc, borderElem) : null,
            fill: fillElem ? Fill.read(xmlDoc, fillElem) : null,
            font: fontElem ? Font.read(xmlDoc, fontElem) : null,
            numFmt: numFmtElem ? NumberingFormat.read(xmlDoc, numFmtElem) : null,
            protection: protectionElem ? Protection.read(xmlDoc, protectionElem) : null,
        };
    };
    DifferentialFormat.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("dxf");
        if (inst.alignment) {
            elem.appendChild(Alignment.write(xmlDoc, inst.alignment));
        }
        if (inst.border) {
            elem.appendChild(Border.write(xmlDoc, inst.border));
        }
        if (inst.fill) {
            elem.appendChild(Fill.write(xmlDoc, inst.fill));
        }
        if (inst.font) {
            elem.appendChild(Font.write(xmlDoc, inst.font));
        }
        if (inst.numFmt) {
            elem.appendChild(NumberingFormat.write(xmlDoc, inst.numFmt));
        }
        if (inst.protection) {
            elem.appendChild(Protection.write(xmlDoc, inst.protection));
        }
        return elem;
    };
    DifferentialFormat.type = DifferentialFormat; // TODO type-checker
    return DifferentialFormat;
}());
module.exports = DifferentialFormat;
