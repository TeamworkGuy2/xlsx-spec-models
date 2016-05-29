import IndexedColors = require("./IndexedColors");
import MruColors = require("./MruColors");

/** <colors> (Colors) "x:colors"
 * parents: styleSheet (§18.8.39)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.colors.aspx
 */
class Colors {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Colors> = Colors; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.Colors {
        if (elem.tagName !== "colors") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "colors", "styleSheet"); }
        var indexedColorElem = xmlDoc.domHelper.queryOneChild(elem, "indexedColors");
        var mruColorElem = xmlDoc.domHelper.queryOneChild(elem, "mruColors");
        return {
            indexedColors: indexedColorElem ? IndexedColors.read(xmlDoc, indexedColorElem) : null,
            mruColors: mruColorElem ? MruColors.read(xmlDoc, mruColorElem) : null,
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.Colors): HTMLElement {
        var elem = xmlDoc.dom.createElement("cellXfs");
        if (inst.indexedColors) { elem.appendChild(IndexedColors.write(xmlDoc, inst.indexedColors)); }
        if (inst.mruColors) { elem.appendChild(MruColors.write(xmlDoc, inst.mruColors)); }
        return elem;
    }

}

export = Colors;