"use strict";
var PageMargins = (function () {
    function PageMargins() {
    }
    PageMargins.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "pageMargins", "chartsheet, customSheetView, customSheetView, dialogsheet, worksheet");
        var attrs = elem.attributes;
        return {
            bottom: xmlDoc.attrFloat(attrs, "bottom"),
            footer: xmlDoc.attrFloat(attrs, "footer"),
            header: xmlDoc.attrFloat(attrs, "header"),
            left: xmlDoc.attrFloat(attrs, "left"),
            right: xmlDoc.attrFloat(attrs, "right"),
            top: xmlDoc.attrFloat(attrs, "top"),
        };
    };
    PageMargins.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("pageMargins")
            .attrFloat("left", inst.left)
            .attrFloat("right", inst.right)
            .attrFloat("top", inst.top)
            .attrFloat("bottom", inst.bottom)
            .attrFloat("header", inst.header)
            .attrFloat("footer", inst.footer)
            .element;
        return elem;
    };
    return PageMargins;
}());
PageMargins.type = PageMargins; // TODO type-checker
module.exports = PageMargins;
