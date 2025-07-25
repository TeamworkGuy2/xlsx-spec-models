"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorderStyleValues = void 0;
/** ST_BorderStyle
 * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.borderstylevalues?view=openxml-2.8.1
 * @author TeamworkGuy2
 * @since 2016-5-26
 */
var BorderStyleValues = /** @class */ (function () {
    function BorderStyleValues(xmlValue) {
        this.xmlValue = xmlValue;
    }
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
    return BorderStyleValues;
}());
exports.BorderStyleValues = BorderStyleValues;
