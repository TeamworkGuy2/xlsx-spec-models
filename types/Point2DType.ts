
export class Point2DType {
    private static type: OpenXmlIo.ReadWriteNamed<OpenXml.Point2DType> = Point2DType; // TODO type-checker

    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement, expectedTagName: string, parentTags?: string): OpenXml.Point2DType {
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
        return {
            x: xmlDoc.attrInt(elem, "x") ?? 0,
            y: xmlDoc.attrInt(elem, "y") ?? 0,
        };
    }

    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Point2DType, tagName: string): ElementLike {
        var elem = xmlDoc.domBldr.create(tagName)
            .attrInt("x", inst.x, true)
            .attrInt("y", inst.y, true)
            .element;
        return elem;
    }

}