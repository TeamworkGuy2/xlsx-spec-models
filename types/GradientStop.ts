import Color = require("./Color");

class GradientStop {
    private static type: OpenXmlIo.ReadWrite<OpenXml.GradientStop> = GradientStop; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.GradientStop {
        xmlDoc.validator.expectNode(elem, "stop", "gradientFill");
        var colorElem = xmlDoc.queryOneChild(elem, "color");
        var attrs = elem.attributes;
        return {
            color: colorElem ? Color.read(xmlDoc, colorElem, "color") : null,
            position: xmlDoc.attrFloat(attrs, "position"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.GradientStop): HTMLElement {
        var elem = xmlDoc.domBldr.create("stop")
            .attrFloat("position", inst.position)
            .element;
        if (inst.color) { elem.appendChild(Color.write(xmlDoc, inst.color, "color")); }
        return elem;
    }

}

export = GradientStop;