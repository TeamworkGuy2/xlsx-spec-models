"use strict";
/** <tableStyleElement> (Table Style) "x:tableStyleElement"
 * parents: tableStyle (§18.8.40)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.tablestyleelement.aspx
 */
var TableStyleElement = (function () {
    function TableStyleElement() {
    }
    TableStyleElement.read = function (xmlDoc, elem) {
        if (elem.tagName !== "tableStyleElement") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "tableStyleElement", "tableStyle");
        }
        var attrs = elem.attributes;
        return {
            dxfId: xmlDoc.domHelper.attrInt(attrs, "dxfId"),
            size: xmlDoc.domHelper.attrInt(attrs, "size"),
            type: xmlDoc.domHelper.attrString(attrs, "type"),
        };
    };
    TableStyleElement.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("tableStyleElement")
            .attrInt("dxfId", inst.dxfId, true)
            .attrInt("size", inst.size, true)
            .attrString("type", inst.type)
            .element;
        return elem;
    };
    TableStyleElement.type = TableStyleElement; // TODO type-checker
    return TableStyleElement;
}());
module.exports = TableStyleElement;
