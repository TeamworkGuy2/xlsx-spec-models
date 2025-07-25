"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CellValues = void 0;
/** ST_CellType (§18.18.11)
 * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.cellvalues?view=openxml-2.8.1
 * @author TeamworkGuy2
 * @since 2016-5-26
 */
var CellValues = /** @class */ (function () {
    function CellValues(xmlValue) {
        this.xmlValue = xmlValue;
    }
    CellValues.Boolean = new CellValues("b");
    CellValues.Number = new CellValues("n");
    CellValues.Error = new CellValues("e");
    CellValues.SharedString = new CellValues("s");
    CellValues.String = new CellValues("str");
    CellValues.InlineString = new CellValues("inlineStr");
    CellValues.Date = new CellValues("d");
    return CellValues;
}());
exports.CellValues = CellValues;
