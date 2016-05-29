import Color = require("./Color");

/** <stop> (Formatting) "x:stop"
 * parent: gradientFill (§18.8.24)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.gradientstop.aspx
 */
class GradientStop {
    private static type: OpenXmlIo.ReadWrite<OpenXml.GradientStop> = GradientStop; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.GradientStop {
        if (elem.tagName !== "stop") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "stop", "gradientFill"); }
        var colorElem = xmlDoc.domHelper.queryOneChild(elem, "color");
        var attrs = elem.attributes;
        return {
            color: colorElem ? Color.read(xmlDoc, colorElem, "color") : null,
            position: xmlDoc.domHelper.attrFloat(attrs, "position"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.GradientStop): HTMLElement {
        var elem = xmlDoc.domBldr.create("stop")
            .attrFloat("position", inst.position)
            .element;
        if (inst.color) { elem.appendChild(Color.write(xmlDoc, inst.color, "color")); }
        return elem;
    }

}

export = GradientStop;