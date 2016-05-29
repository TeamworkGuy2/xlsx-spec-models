import GradientFill = require("./GradientFill");
import PatternFill = require("./PatternFill");

/** <fill> (Fill) "x:fill"
 * parent: dxf (§18.8.14); fills (§18.8.21); ndxf (§18.11.1.4); odxf (§18.11.1.6)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.fill.aspx
 */
class Fill {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Fill> = Fill; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.Fill {
        if (elem.tagName !== "fill") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "fill", "dxf, fills, ndxf, odxf"); }

        var gradientFillElem = xmlDoc.domHelper.queryOneChild(elem, "gradientFill");
        var patternFillElem = xmlDoc.domHelper.queryOneChild(elem, "patternFill");

        return {
            gradientFill: gradientFillElem ? GradientFill.read(xmlDoc, gradientFillElem) : null,
            patternFill: patternFillElem ? PatternFill.read(xmlDoc, patternFillElem) : null,
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.Fill): HTMLElement {
        var elem = xmlDoc.dom.createElement("fill");
        if (inst.gradientFill) { elem.appendChild(GradientFill.write(xmlDoc, inst.gradientFill)); }
        if (inst.patternFill) { elem.appendChild(PatternFill.write(xmlDoc, inst.patternFill)); }

        return elem;
    }

}

export = Fill;