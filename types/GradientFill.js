"use strict";
var GradientStop = require("./GradientStop");
/** <gradientFill> (Gradient) "x:gradientFill"
 * parent: fill (§18.8.20)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.gradientfill.aspx
 */
var GradientFill = (function () {
    function GradientFill() {
    }
    GradientFill.read = function (xmlDoc, elem) {
        if (elem.tagName !== "gradientFill") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "gradientFill", "fill");
        }
        var stopElems = xmlDoc.domHelper.queryAllChilds(elem, "stop");
        var attrs = elem.attributes;
        return {
            stops: xmlDoc.readOpenXml.readMulti(xmlDoc, GradientStop.read, stopElems),
            bottom: xmlDoc.domHelper.attrFloat(attrs, "bottom"),
            degree: xmlDoc.domHelper.attrFloat(attrs, "degree"),
            left: xmlDoc.domHelper.attrFloat(attrs, "left"),
            right: xmlDoc.domHelper.attrFloat(attrs, "right"),
            top: xmlDoc.domHelper.attrFloat(attrs, "top"),
            type: xmlDoc.domHelper.attrString(attrs, "type"),
        };
    };
    GradientFill.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("gradientFill")
            .attrFloat("bottom", inst.bottom, true)
            .attrFloat("degree", inst.degree, true)
            .attrFloat("left", inst.left, true)
            .attrFloat("right", inst.right, true)
            .attrFloat("top", inst.bottom, true)
            .attrString("type", inst.type, true)
            .element;
        if (inst.stops) {
            xmlDoc.domHelper.addChilds(elem, xmlDoc.writeOpenXml.writeMulti(xmlDoc, GradientStop.write, inst.stops));
        }
        return elem;
    };
    GradientFill.type = GradientFill; // TODO type-checker
    return GradientFill;
}());
module.exports = GradientFill;
