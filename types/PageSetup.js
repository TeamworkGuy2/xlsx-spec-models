"use strict";
var PageSetup = (function () {
    function PageSetup() {
    }
    // TODO incomplete
    PageSetup.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "pageSetup", "customSheetView, dialogsheet, worksheet");
        var attrs = elem.attributes;
        return {
            orientation: xmlDoc.attrString(attrs, "orientation"),
            rid: xmlDoc.attrString(attrs, "r:id"),
            scale: xmlDoc.attrInt(attrs, "scale"),
        };
    };
    PageSetup.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("pageSetup")
            .attrInt("scale", inst.scale, true)
            .attrString("orientation", inst.orientation, true)
            .attrString("r:id", inst.rid, true)
            .element;
        return elem;
    };
    return PageSetup;
}());
PageSetup.type = PageSetup; // TODO type-checker
module.exports = PageSetup;
