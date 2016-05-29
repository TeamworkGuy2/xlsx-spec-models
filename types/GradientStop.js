"use strict";
var Color = require("./Color");
/** <stop> (Formatting) "x:stop"
 * parent: gradientFill (§18.8.24)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.gradientstop.aspx
 */
var GradientStop = (function () {
    function GradientStop() {
    }
    GradientStop.read = function (xmlDoc, elem) {
        if (elem.tagName !== "stop") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "stop", "gradientFill");
        }
        var colorElem = xmlDoc.domHelper.queryOneChild(elem, "color");
        var attrs = elem.attributes;
        return {
            color: colorElem ? Color.read(xmlDoc, colorElem, "color") : null,
            position: xmlDoc.domHelper.attrFloat(attrs, "position"),
        };
    };
    GradientStop.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("stop")
            .attrFloat("position", inst.position)
            .element;
        if (inst.color) {
            elem.appendChild(Color.write(xmlDoc, inst.color, "color"));
        }
        return elem;
    };
    GradientStop.type = GradientStop; // TODO type-checker
    return GradientStop;
}());
module.exports = GradientStop;
