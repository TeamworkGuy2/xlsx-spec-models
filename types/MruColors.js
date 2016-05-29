"use strict";
var Color = require("./Color");
/** <mruColors> (MRU Colors) "x:mruColors"
 * parents: colors (§18.8.11)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.mrucolors.aspx
 */
var MruColors = (function () {
    function MruColors() {
    }
    MruColors.read = function (xmlDoc, elem) {
        if (elem.tagName !== "mruColors") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "mruColors", "styleSheet");
        }
        var colorElems = xmlDoc.domHelper.queryAllChilds(elem, "colors");
        return {
            colors: xmlDoc.readOpenXml.readMulti(xmlDoc, Color.read, colorElems, "color"),
        };
    };
    MruColors.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("mruColors");
        var colorElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, Color.write, inst.colors, "color");
        xmlDoc.domHelper.addChilds(elem, colorElems);
        return elem;
    };
    MruColors.type = MruColors; // TODO type-checker
    return MruColors;
}());
module.exports = MruColors;
