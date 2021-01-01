/** ST_CellFormulaType
 * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.cellformulavalues?view=openxml-2.8.1
 * @author TeamworkGuy2
 * @since 2016-5-26
 */
class CellFormulaValues {
    public static Normal = new CellFormulaValues("normal");
    public static Array = new CellFormulaValues("array");
    public static DataTable = new CellFormulaValues("dataTable");
    public static Shared = new CellFormulaValues("shared");

    public xmlValue: string;

    constructor(xmlValue: string) {
        this.xmlValue = xmlValue;
    }

}

export = CellFormulaValues;