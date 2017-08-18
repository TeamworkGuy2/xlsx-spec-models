"use strict";
var SheetFormatProperties = (function () {
    function SheetFormatProperties() {
    }
    SheetFormatProperties.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "sheetFormatPr", "dialogsheet, worksheet");
        var attrs = elem.attributes;
        return {
            defaultColWidth: xmlDoc.attrFloat(attrs, "defaultColWidth"),
            defaultRowHeight: xmlDoc.attrFloat(attrs, "defaultRowHeight"),
            dyDescent: xmlDoc.attrFloat(attrs, "x14ac:dyDescent"),
        };
    };
    SheetFormatProperties.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("sheetFormatPr")
            .attrFloat("defaultColWidth", inst.defaultColWidth, true)
            .attrFloat("defaultRowHeight", inst.defaultRowHeight)
            .attrFloat("x14ac:dyDescent", inst.dyDescent, true)
            .element;
        return elem;
    };
    SheetFormatProperties.type = SheetFormatProperties; // TODO type-checker
    return SheetFormatProperties;
}());
module.exports = SheetFormatProperties;
