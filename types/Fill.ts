import GradientFill = require("./GradientFill");
import PatternFill = require("./PatternFill");

class Fill {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Fill> = Fill; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Fill {
        xmlDoc.validator.expectNode(elem, "fill", "dxf, fills, ndxf, odxf");

        var gradientFillElem = xmlDoc.queryOneChild(elem, "gradientFill");
        var patternFillElem = xmlDoc.queryOneChild(elem, "patternFill");

        return {
            gradientFill: gradientFillElem ? GradientFill.read(xmlDoc, gradientFillElem) : null,
            patternFill: patternFillElem ? PatternFill.read(xmlDoc, patternFillElem) : null,
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Fill): HTMLElement {
        var elem = xmlDoc.dom.createElement("fill");
        if (inst.gradientFill) { elem.appendChild(GradientFill.write(xmlDoc, inst.gradientFill)); }
        if (inst.patternFill) { elem.appendChild(PatternFill.write(xmlDoc, inst.patternFill)); }

        return elem;
    }

}

export = Fill;