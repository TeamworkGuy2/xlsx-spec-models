/** Generic Open XML parse for an element with a single boolean attribute
 * @since 2016-05-26
 */
class BooleanAttribute {
    private static type: OpenXmlIo.ReadWriteNamed<{ val: boolean }> = BooleanAttribute; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement, expectedTagName: string, parentTags?: string): { val: boolean } {
        if (elem.tagName !== expectedTagName) { throw xmlDoc.validator.unexpectedNode(elem.tagName, expectedTagName, parentTags); }
        var attrs = elem.attributes;
        return {
            val: xmlDoc.domHelper.attrBool(attrs, "val"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: { val: boolean }, tagName: string): HTMLElement {
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

export = BooleanAttribute;