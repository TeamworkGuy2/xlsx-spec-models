"use strict";
/** ST_BorderStyle
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.borderstylevalues.aspx
 * @author TeamworkGuy2
 * @since 2016-5-26
 */
var BorderStyleValues = (function () {
    function BorderStyleValues(xmlValue) {
        this.xmlValue = xmlValue;
    }
    return BorderStyleValues;
}());
BorderStyleValues.None = new BorderStyleValues("none");
BorderStyleValues.Thin = new BorderStyleValues("thin");
BorderStyleValues.Medium = new BorderStyleValues("medium");
BorderStyleValues.Dashed = new BorderStyleValues("dashed");
BorderStyleValues.Dotted = new BorderStyleValues("dotted");
BorderStyleValues.Thick = new BorderStyleValues("thick");
BorderStyleValues.Double = new BorderStyleValues("double");
BorderStyleValues.Hair = new BorderStyleValues("hair");
BorderStyleValues.MediumDashed = new BorderStyleValues("mediumDashed");
BorderStyleValues.DashDot = new BorderStyleValues("dashDot");
BorderStyleValues.MediumDashDot = new BorderStyleValues("mediumDashDot");
BorderStyleValues.DashDotDot = new BorderStyleValues("dashDotDot");
BorderStyleValues.MediumDashDotDot = new BorderStyleValues("mediumDashDotDot");
BorderStyleValues.SlantDashDot = new BorderStyleValues("slantDashDot");
module.exports = BorderStyleValues;
