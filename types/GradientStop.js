"use strict";
var Color = require("./Color");
var GradientStop = (function () {
    function GradientStop() {
    }
    GradientStop.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "stop", "gradientFill");
        var colorElem = xmlDoc.queryOneChild(elem, "color");
        var attrs = elem.attributes;
        return {
            color: colorElem ? Color.read(xmlDoc, colorElem, "color") : null,
            position: xmlDoc.attrFloat(attrs, "position"),
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
    return GradientStop;
}());
GradientStop.type = GradientStop; // TODO type-checker
module.exports = GradientStop;
