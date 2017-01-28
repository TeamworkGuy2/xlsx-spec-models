"use strict";
var Color = require("./Color");
var MruColors = (function () {
    function MruColors() {
    }
    MruColors.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "mruColors", "styleSheet");
        var colorElems = xmlDoc.queryAllChilds(elem, "colors");
        return {
            colors: xmlDoc.readMulti(Color.read, colorElems, "color"),
        };
    };
    MruColors.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("mruColors");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Color.write, inst.colors, "color"));
        return elem;
    };
    return MruColors;
}());
MruColors.type = MruColors; // TODO type-checker
module.exports = MruColors;
