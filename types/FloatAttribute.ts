/** Generic Open XML parse for an element with a single float attribute
 * @since 2016-05-26
 */
export class FloatAttribute {
    private static type: OpenXmlIo.ReadWriteNamed<{ val: number }> = FloatAttribute; // TODO type-checker

    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement, expectedTagName: string, parentTags?: string): { val: number } {
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
        return {
            val: xmlDoc.attrFloat(elem, "val") ?? 0,
        };
    }

    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: { val: number }, tagName: string): ElementLike {
        var elem = xmlDoc.domBldr.create(tagName)
            .attrFloat("val", inst.val)
            .element;
        return elem;
    }

    public static copy(inst: { val: number }): { val: number } {
        return {
            val: inst.val
        };
    }
}