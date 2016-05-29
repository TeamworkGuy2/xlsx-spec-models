"use strict";
var Font = require("./Font");
/** <fonts> (Fonts) "x:fonts"
 * parents: styleSheet (§18.8.39)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.fonts.aspx
 */
var Fonts = (function () {
    function Fonts() {
    }
    Fonts.read = function (xmlDoc, elem) {
        if (elem.tagName !== "fonts") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "fonts", "styleSheet");
        }
        var fontElems = xmlDoc.domHelper.queryAllChilds(elem, "font");
        var attrs = elem.attributes;
        return {
            fonts: xmlDoc.readOpenXml.readMulti(xmlDoc, Font.read, fontElems),
            count: xmlDoc.domHelper.attrInt(attrs, "count"),
        };
    };
    Fonts.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("fonts")
            .attrInt("count", inst.count, true)
            .element;
        var fontElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, Font.write, inst.fonts);
        xmlDoc.domHelper.addChilds(elem, fontElems);
        return elem;
    };
    Fonts.type = Fonts; // TODO type-checker
    return Fonts;
}());
module.exports = Fonts;
