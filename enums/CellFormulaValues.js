"use strict";
/** ST_CellFormulaType
 * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.cellformulavalues?view=openxml-2.8.1
 * @author TeamworkGuy2
 * @since 2016-5-26
 */
var CellFormulaValues = /** @class */ (function () {
    function CellFormulaValues(xmlValue) {
        this.xmlValue = xmlValue;
    }
    CellFormulaValues.Normal = new CellFormulaValues("normal");
    CellFormulaValues.Array = new CellFormulaValues("array");
    CellFormulaValues.DataTable = new CellFormulaValues("dataTable");
    CellFormulaValues.Shared = new CellFormulaValues("shared");
    return CellFormulaValues;
}());
module.exports = CellFormulaValues;
