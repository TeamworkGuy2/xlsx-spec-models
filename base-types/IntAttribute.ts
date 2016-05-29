/** Generic Open XML parse for an element with a single integer attribute
 * @since 2016-05-26
 */
class IntAttribute {
    private static type: OpenXmlIo.ReadWriteNamed<{ val: number }> = IntAttribute; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement, expectedTagName: string, parentTags?: string): { val: number } {
        if (elem.tagName !== expectedTagName) { throw xmlDoc.validator.unexpectedNode(elem.tagName, expectedTagName, parentTags); }
        var attrs = elem.attributes;
        return {
            val: xmlDoc.domHelper.attrInt(attrs, "val"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: { val: number }, tagName: string): HTMLElement {
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