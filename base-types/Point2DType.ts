
class Point2DType {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Point2DType> = Point2DType; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement, expectedTagName: string, parentTags?: string): OpenXml.Point2DType {
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
        var attrs = elem.attributes;
        return {
            x: xmlDoc.attrInt(attrs, "x"),
            y: xmlDoc.attrInt(attrs, "y"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Point2DType, tagName: string): HTMLElement {
        var elem = xmlDoc.domBldr.create(tagName)
            .attrInt("x", inst.x, true)
            .attrInt("y", inst.y, true)
            .element;
        return elem;
    }

}

export = Point2DType;