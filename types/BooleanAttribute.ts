/** Generic Open XML parse for an element with a single boolean attribute
 * @since 2016-05-26
 */
export class BooleanAttribute {
    private static type: OpenXmlIo.ReadWriteNamed<{ val: boolean }> = BooleanAttribute; // TODO type-checker

    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement, expectedTagName: string, parentTags?: string): { val: boolean } {
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
        return {
            val: xmlDoc.attrBool(elem, "val") ?? false,
        };
    }

    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: { val: boolean }, tagName: string): ElementLike {
        var elem = xmlDoc.domBldr.create(tagName)
            .attrBool("val", inst.val, true, "1", "0")
            .element;
        return elem;
    }

    public static copy(inst: { val: boolean }): { val: boolean } {
        return {
            val: inst.val
        };
    }
}