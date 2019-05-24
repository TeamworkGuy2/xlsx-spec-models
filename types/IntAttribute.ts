/** Generic Open XML parse for an element with a single integer attribute
 * @since 2016-05-26
 */
class IntAttribute {
    private static type: OpenXmlIo.ReadWriteNamed<{ val: number }> = IntAttribute; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement, expectedTagName: string, parentTags?: string): { val: number } {
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
        return {
            val: xmlDoc.attrInt(elem, "val"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: { val: number }, tagName: string): ElementLike {
        var elem = xmlDoc.domBldr.create(tagName)
            .attrInt("val", inst.val)
            .element;
        return elem;
    }


    public static copy(inst: { val: number }): { val: number } {
        return {
            val: inst.val
        };
    }

}

export = IntAttribute;