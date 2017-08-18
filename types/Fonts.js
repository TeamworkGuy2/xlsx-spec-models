"use strict";
var Font = require("./Font");
var Fonts = (function () {
    function Fonts() {
    }
    Fonts.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "fonts", "styleSheet");
        var fontElems = xmlDoc.queryAllChilds(elem, "font");
        var attrs = elem.attributes;
        return {
            fonts: xmlDoc.readMulti(Font.read, fontElems),
            count: xmlDoc.attrInt(attrs, "count"),
        };
    };
    Fonts.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("fonts")
            .attrInt("count", inst.count, true)
            .element;
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Font.write, inst.fonts));
        return elem;
    };
    Fonts.type = Fonts; // TODO type-checker
    return Fonts;
}());
module.exports = Fonts;
