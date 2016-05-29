"use strict";
/** <col> (Column Width & Formatting) "x:col"
 * parent: cols (§18.3.1.17)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.column.aspx
 */
var Column = (function () {
    function Column() {
    }
    Column.read = function (xmlDoc, elem) {
        if (elem.tagName !== "col") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "col", "cols");
        }
        var attrs = elem.attributes;
        return {
            bestFit: xmlDoc.domHelper.attrBool(attrs, "bestFit"),
            collapsed: xmlDoc.domHelper.attrBool(attrs, "collapsed"),
            customWidth: xmlDoc.domHelper.attrBool(attrs, "customWidth"),
            hidden: xmlDoc.domHelper.attrBool(attrs, "hidden"),
            max: xmlDoc.domHelper.attrInt(attrs, "max"),
            min: xmlDoc.domHelper.attrInt(attrs, "min"),
            outlineLevel: xmlDoc.domHelper.attrInt(attrs, "outlineLevel"),
            phonetic: xmlDoc.domHelper.attrBool(attrs, "phonetic"),
            style: xmlDoc.domHelper.attrInt(attrs, "style"),
            width: xmlDoc.domHelper.attrFloat(attrs, "width"),
        };
    };
    Column.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("col")
            .attrInt("min", inst.min)
            .attrInt("max", inst.max)
            .attrFloat("width", inst.width, true)
            .attrInt("style", inst.style, true)
            .attrInt("outlineLevel", inst.outlineLevel, true)
            .attrBool("customWidth", inst.customWidth, true, "1", "0")
            .attrBool("bestFit", inst.bestFit, true, "1", "0")
            .attrBool("collapsed", inst.collapsed, true, "1", "0")
            .attrBool("hidden", inst.hidden, true, "1", "0")
            .attrBool("phonetic", inst.phonetic, true, "1", "0")
            .element;
        return elem;
    };
    Column.type = Column; // TODO type-checker
    return Column;
}());
module.exports = Column;
