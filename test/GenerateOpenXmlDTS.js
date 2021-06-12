"use strict";
/// <reference path="../node_modules/ts-promises/ts-promises.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var https = require("https");
var JSDom = require("jsdom");
var MicrosoftDocsParser = require("./MicrosoftDocsParser");
var OpenXmlSpecParser = require("./OpenXmlSpecParser");
var StringUtil = require("./StringUtil");
/** Generate an interface for 'open-xml.d.ts'
 * Example command line:
 * /code/xlsx-spec-models/test> node .\GenerateOpenXmlDTS.js "drawing.spreadsheet.onecellanchor"
 *
 * @since 2020-12-12
 */
function generate() {
    OpenXmlSpecParser.loadXsdSpecs("C:/Users/TeamworkGuy2/Downloads/openxml/ECMA-376, Fifth Edition, Part 4 - Transitional Migration Features/OfficeOpenXML-XMLSchema-Transitional").then(function (xsdCache) {
        console.log("successfully loaded XSD cache with " + Object.keys(xsdCache).length + " keys");
    }).catch(function (err) {
        console.error("error loading XSD cache", err);
    });
    var typeName = process.argv[2].trim();
    var lastDot = typeName.lastIndexOf(".");
    var ooxmlNs = typeName.substr(0, lastDot);
    var ooxmlType = typeName.substr(lastDot + 1);
    if (ooxmlNs && ooxmlType) {
        console.log("generating:", ooxmlNs, ooxmlType);
        getMsDoc(ooxmlNs, ooxmlType);
    }
    else {
        console.log("skip generating, valid syntax 'node ./GenerateOpenXmlDTS.js \"openxml.name.space\"'");
    }
}
function getMsDoc(openxmlNamespace, openxmlType) {
    var origin = "https://docs.microsoft.com";
    var path = "/en-us/dotnet/api/documentformat.openxml." + openxmlNamespace + "." + openxmlType + "?view=openxml-2.8.1";
    // request the web page
    https.get(origin + path, function (msg) {
        var htmlChunks = [];
        msg.on("data", function (chk) { return htmlChunks.push(chk); });
        msg.on("error", function (err) { return console.error("failed to retrieve doc from " + origin + path, err); });
        msg.on("end", function () {
            var html = Buffer.concat(htmlChunks).toString("utf-8");
            // parse the result
            var dom = parseHtmlDoc(html);
            var obj = MicrosoftDocsParser.parseDocPageForOpenXml(dom, origin + path);
            // output
            var openXmlInterface = stringifyOpenXmlMsDoc(obj);
            console.log("read: " + (origin + path) + " (" + msg.statusCode + "):\n", openXmlInterface);
        });
    });
}
function stringifyOpenXmlMsDoc(obj) {
    return [
        "    /** <" + "xdr" + ":" + obj.typeName + "> (" +
            obj.typeDescriptor.substr(1, obj.typeDescriptor.length - 2) + ", W3C XML " + obj.modelName + " " + obj.location + ")",
        "     * parents: " + obj.parents.join("; "),
        "     * ",
        "     * " + StringUtil.splitLongString(obj.description, 120).join("\n     * "),
        "     * @see " + obj.link,
        "     */",
        "    interface " + toTitleCase(obj.typeName) + " {",
        (obj.childs.length > 0 ? obj.childs.map(function (chd) {
            return "        " + chd.name + "; // " + chd.nameDescriptor + " (" + chd.location + ")";
        }).join("\n") : ""),
        (obj.attributes.length > 0 ? "\n        // attributes\n" +
            obj.attributes.map(function (attr) {
                var commentLines = StringUtil.splitLongString(attr.description, 300);
                var comment = "        /* " + commentLines.join("\n         * ") + (commentLines.length > 1 ? "\n        */" : " */");
                return comment + "\n        // " + attr.name + ": any" + ";";
            }).join("\n") : ""),
        (obj.properties.length > 0 ? "\n        // properties\n" +
            obj.properties.map(function (prop) {
                var commentLines = StringUtil.splitLongString(prop.description, 300);
                var comment = "        /* " + commentLines.join("\n         * ") + (commentLines.length > 1 ? "\n        */" : " */");
                return comment + "\n        " + toCamelCase(prop.name) + ": any" + ";";
            }).join("\n") : ""),
        "    }",
    ].join("\n");
}
function parseHtmlDoc(html) {
    var dom = new JSDom.JSDOM(html, { contentType: "text/html" }).window.document;
    return dom;
}
function toCamelCase(str) {
    return str.charAt(0).toLowerCase() + str.substr(1);
}
function toTitleCase(str) {
    return str.charAt(0).toUpperCase() + str.substr(1);
}
generate();
