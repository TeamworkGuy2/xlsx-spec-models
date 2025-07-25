import { Color } from "../types/Color";

/** (W3C XML CT_BorderPr §A.2) Generic Open XML Border Property parser
 * @since 2016-05-26
 */
export class BorderProperty {
    private static type: OpenXmlIo.ReadWriteNamed<OpenXml.BorderProperty> = BorderProperty; // TODO type-checker

    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement, expectedTagName: string, parentTags?: string): OpenXml.BorderProperty {
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags || "border");
        var colorElem = xmlDoc.queryOneChild(elem, "color", false);

        return {
            color: colorElem ? Color.read(xmlDoc, colorElem, "color") : null,
            style: <OpenXml.ST_BorderStyle | null>xmlDoc.attrString(elem, "style"),
        };
    }

    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.BorderProperty, tagName: string): ElementLike {
        var elem = xmlDoc.domBldr.create(tagName)
            .attrString("style", inst.style, true)
            .element;
        if (inst.color) { elem.appendChild(Color.write(xmlDoc, inst.color, "color")); }

        return elem;
    }
}