/** ST_CellType (§18.18.11)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.cellvalues.aspx
 * @author TeamworkGuy2
 * @since 2016-5-26
 */
class CellValues {
    public static Boolean = new CellValues("b");
    public static Number = new CellValues("n");
    public static Error = new CellValues("e");
    public static SharedString = new CellValues("s");
    public static String = new CellValues("str");
    public static InlineString = new CellValues("inlineStr");
    public static Date = new CellValues("d");

    public xmlValue: string;

    constructor(xmlValue: string) {
        this.xmlValue = xmlValue;
    }

}

export = CellValues;