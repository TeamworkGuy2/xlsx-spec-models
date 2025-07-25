/** Generic Open XML parse for an element with a single string attribute
 * @since 2016-05-26
 */
export class StringAttribute {
    private static type: OpenXmlIo.ReadWriteNamed<{ val: string }> = StringAttribute; // TODO type-checker

    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement, expectedTagName: string, parentTags?: string): { val: string } {
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
        return {
            val: xmlDoc.attrString(elem, "val") ?? "",
        };
    }

    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: { val: string }, tagName: string): ElementLike {
        var elem = xmlDoc.domBldr.create(tagName)
            .attrString("val", inst.val)
            .element;
        return elem;
    }

    public static copy(inst: { val: string }): { val: string } {
        return {
            val: inst.val
        };
    }

}