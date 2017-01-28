"use strict";
var GradientStop = require("./GradientStop");
var GradientFill = (function () {
    function GradientFill() {
    }
    GradientFill.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "gradientFill", "fill");
        var attrs = elem.attributes;
        var stopElems = xmlDoc.queryAllChilds(elem, "stop");
        return {
            stops: xmlDoc.readMulti(GradientStop.read, stopElems),
            bottom: xmlDoc.attrFloat(attrs, "bottom"),
            degree: xmlDoc.attrFloat(attrs, "degree"),
            left: xmlDoc.attrFloat(attrs, "left"),
            right: xmlDoc.attrFloat(attrs, "right"),
            top: xmlDoc.attrFloat(attrs, "top"),
            type: xmlDoc.attrString(attrs, "type"),
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
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(GradientStop.write, inst.stops));
        }
        return elem;
    };
    return GradientFill;
}());
GradientFill.type = GradientFill; // TODO type-checker
module.exports = GradientFill;
