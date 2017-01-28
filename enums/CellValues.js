"use strict";
/** ST_CellType (§18.18.11)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.cellvalues.aspx
 * @author TeamworkGuy2
 * @since 2016-5-26
 */
var CellValues = (function () {
    function CellValues(xmlValue) {
        this.xmlValue = xmlValue;
    }
    return CellValues;
}());
CellValues.Boolean = new CellValues("b");
CellValues.Number = new CellValues("n");
CellValues.Error = new CellValues("e");
CellValues.SharedString = new CellValues("s");
CellValues.String = new CellValues("str");
CellValues.InlineString = new CellValues("inlineStr");
CellValues.Date = new CellValues("d");
module.exports = CellValues;
