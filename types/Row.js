"use strict";
var Cell = require("./Cell");
/** <row> (Row) "x:row"
 * parent: sheetData (§18.3.1.80)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.row.aspx
 */
var Row = (function () {
    function Row() {
    }
    Row.read = function (xmlDoc, elem) {
        if (elem.tagName !== "row") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "row", "sheetData");
        }
        var cElems = xmlDoc.domHelper.queryAllChilds(elem, "c");
        var attrs = elem.attributes;
        return {
            cs: xmlDoc.readOpenXml.readMulti(xmlDoc, Cell.read, cElems),
            collapsed: xmlDoc.domHelper.attrBool(attrs, "collapsed"),
            customFormat: xmlDoc.domHelper.attrBool(attrs, "customFormat"),
            customHeight: xmlDoc.domHelper.attrBool(attrs, "customHeight"),
            hidden: xmlDoc.domHelper.attrBool(attrs, "hidden"),
            ht: xmlDoc.domHelper.attrFloat(attrs, "ht"),
            outlineLevel: xmlDoc.domHelper.attrInt(attrs, "outlineLevel"),
            ph: xmlDoc.domHelper.attrBool(attrs, "ph"),
            r: xmlDoc.domHelper.attrInt(attrs, "r"),
            s: xmlDoc.domHelper.attrInt(attrs, "s"),
            spans: xmlDoc.domHelper.attrString(attrs, "spans"),
            thickBot: xmlDoc.domHelper.attrBool(attrs, "thickBot"),
            thickTop: xmlDoc.domHelper.attrBool(attrs, "thickTop"),
            dyDescent: xmlDoc.domHelper.attrFloat(attrs, "x14ac:dyDescent"),
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
        xmlDoc.domHelper.addChilds(elem, xmlDoc.writeOpenXml.writeMulti(xmlDoc, Cell.write, inst.cs));
        return elem;
    };
    Row.type = Row; // TODO type-checker
    return Row;
}());
module.exports = Row;
