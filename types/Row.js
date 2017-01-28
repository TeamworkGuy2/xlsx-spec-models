"use strict";
var Cell = require("./Cell");
var Row = (function () {
    function Row() {
    }
    Row.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "row", "sheetData");
        var attrs = elem.attributes;
        var cElems = xmlDoc.queryAllChilds(elem, "c");
        return {
            cs: xmlDoc.readMulti(Cell.read, cElems),
            collapsed: xmlDoc.attrBool(attrs, "collapsed"),
            customFormat: xmlDoc.attrBool(attrs, "customFormat"),
            customHeight: xmlDoc.attrBool(attrs, "customHeight"),
            hidden: xmlDoc.attrBool(attrs, "hidden"),
            ht: xmlDoc.attrFloat(attrs, "ht"),
            outlineLevel: xmlDoc.attrInt(attrs, "outlineLevel"),
            ph: xmlDoc.attrBool(attrs, "ph"),
            r: xmlDoc.attrInt(attrs, "r"),
            s: xmlDoc.attrInt(attrs, "s"),
            spans: xmlDoc.attrString(attrs, "spans"),
            thickBot: xmlDoc.attrBool(attrs, "thickBot"),
            thickTop: xmlDoc.attrBool(attrs, "thickTop"),
            dyDescent: xmlDoc.attrFloat(attrs, "x14ac:dyDescent"),
        };
    };
    Row.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("row")
            .attrInt("r", inst.r, true)
            .attrString("spans", inst.spans, true)
            .attrInt("s", inst.s, true)
            .attrBool("customFormat", inst.customFormat, true, "1", "0")
            .attrBool("customHeight", inst.customHeight, true, "1", "0")
            .attrFloat("ht", inst.ht, true)
            .attrBool("thickBot", inst.thickBot, true, "1", "0")
            .attrBool("thickTop", inst.thickTop, true, "1", "0")
            .attrBool("collapsed", inst.collapsed, true, "1", "0")
            .attrBool("hidden", inst.hidden, true, "1", "0")
            .attrInt("outlineLevel", inst.outlineLevel, true)
            .attrBool("ph", inst.ph, true, "1", "0")
            .attrFloat("x14ac:dyDescent", inst.dyDescent, true)
            .element;
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Cell.write, inst.cs));
        return elem;
    };
    return Row;
}());
Row.type = Row; // TODO type-checker
module.exports = Row;
