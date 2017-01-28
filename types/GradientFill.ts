import GradientStop = require("./GradientStop");

class GradientFill {
    private static type: OpenXmlIo.ReadWrite<OpenXml.GradientFill> = GradientFill; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.GradientFill {
        xmlDoc.validator.expectNode(elem, "gradientFill", "fill");
        var attrs = elem.attributes;
        var stopElems = xmlDoc.queryAllChilds(elem, "stop");
        return {
            stops: xmlDoc.readMulti(GradientStop.read, stopElems),
            bottom: xmlDoc.attrFloat(attrs, "bottom"),
            degree: xmlDoc.attrFloat(attrs, "degree"),
            left: xmlDoc.attrFloat(attrs, "left"),
            right: xmlDoc.attrFloat(attrs, "right"),
            top: xmlDoc.attrFloat(attrs, "top"),
            type: <OpenXml.ST_GradientType>xmlDoc.attrString(attrs, "type"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.GradientFill): HTMLElement {
        var elem = xmlDoc.domBldr.create("gradientFill")
            .attrFloat("bottom", inst.bottom, true)
            .attrFloat("degree", inst.degree, true)
            .attrFloat("left", inst.left, true)
            .attrFloat("right", inst.right, true)
            .attrFloat("top", inst.bottom, true)
            .attrString("type", inst.type, true)
            .element;
        if (inst.stops) { xmlDoc.addChilds(elem, xmlDoc.writeMulti(GradientStop.write, inst.stops)); }
        return elem;
    }

}

export = GradientFill;