/** ST_BorderStyle
 * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.borderstylevalues?view=openxml-2.8.1
 * @author TeamworkGuy2
 * @since 2016-5-26
 */
export class BorderStyleValues {
    public static None = new BorderStyleValues("none");
    public static Thin = new BorderStyleValues("thin");
    public static Medium = new BorderStyleValues("medium");
    public static Dashed = new BorderStyleValues("dashed");
    public static Dotted = new BorderStyleValues("dotted");
    public static Thick = new BorderStyleValues("thick");
    public static Double = new BorderStyleValues("double");
    public static Hair = new BorderStyleValues("hair");
    public static MediumDashed = new BorderStyleValues("mediumDashed");
    public static DashDot = new BorderStyleValues("dashDot");
    public static MediumDashDot = new BorderStyleValues("mediumDashDot");
    public static DashDotDot = new BorderStyleValues("dashDotDot");
    public static MediumDashDotDot = new BorderStyleValues("mediumDashDotDot");
    public static SlantDashDot = new BorderStyleValues("slantDashDot");

    public xmlValue: string;

    constructor(xmlValue: string) {
        this.xmlValue = xmlValue;
    }

}