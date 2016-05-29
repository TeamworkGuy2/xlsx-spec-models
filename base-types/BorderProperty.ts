import Color = require("../types/Color");

/** Generic Open XML Border Property parser
 * @since 2016-05-26
 */
class BorderProperty {
    private static type: OpenXmlIo.ReadWrite<OpenXml.BorderProperty> = BorderProperty; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement, expectedTagName: string, parentTags?: string): OpenXml.BorderProperty {
        if (elem.tagName !== expectedTagName) { throw xmlDoc.validator.unexpectedNode(elem.tagName, expectedTagName, parentTags || "border"); }
        var colorElem = xmlDoc.domHelper.queryOneChild(elem, "color");
        var attrs = elem.attributes;
        return {
            color: colorElem ? Color.read(xmlDoc, colorElem, "color") : null,
            style: xmlDoc.domHelper.attrString(attrs, "style"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.BorderProperty, tagName: string): HTMLElement {
        var elem = xmlDoc.domBldr.create(tagName)
            .attrString("style", inst.style, true)
            .element;
        if (inst.color) { elem.appendChild(Color.write(xmlDoc, inst.color, "color")); }

        return elem;
    }

}

export = BorderProperty;