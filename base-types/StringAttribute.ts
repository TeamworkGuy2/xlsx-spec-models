/** Generic Open XML parse for an element with a single string attribute
 * @since 2016-05-26
 */
class StringAttribute {
    private static type: OpenXmlIo.ReadWriteNamed<{ val: string }> = StringAttribute; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement, expectedTagName: string, parentTags?: string): { val: string } {
        if (elem.tagName !== expectedTagName) { throw xmlDoc.validator.unexpectedNode(elem.tagName, expectedTagName, parentTags); }
        var attrs = elem.attributes;
        return {
            val: xmlDoc.domHelper.attrString(attrs, "val"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: { val: string }, tagName: string): HTMLElement {
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

export = StringAttribute;