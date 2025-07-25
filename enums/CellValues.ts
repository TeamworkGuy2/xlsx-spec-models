/** ST_CellType (§18.18.11)
 * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.cellvalues?view=openxml-2.8.1
 * @author TeamworkGuy2
 * @since 2016-5-26
 */
export class CellValues {
    public static Boolean = new CellValues("b");
    public static Number = new CellValues("n");
    public static Error = new CellValues("e");
    public static SharedString = new CellValues("s");
    public static String = new CellValues("str");
    public static InlineString = new CellValues("inlineStr");
    public static Date = new CellValues("d");

    public xmlValue: OpenXml.ST_CellType;

    constructor(xmlValue: OpenXml.ST_CellType) {
        this.xmlValue = xmlValue;
    }

}