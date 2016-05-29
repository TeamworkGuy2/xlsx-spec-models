/** Generic Open XML parser for an element containing text content
 * @since 2016-05-26
 */
class StringElement {
    private static type: OpenXmlIo.ReadWrite<{ content: string }> = StringElement; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement, expectedTagName: string, parentTags?: string): { content: string } {
        if (elem.tagName !== expectedTagName) { throw xmlDoc.validator.unexpectedNode(elem.tagName, expectedTagName, parentTags); }
        return {
            content: elem.textContent,
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: { content: string }, tagName: string): HTMLElement {
        var elem = xmlDoc.dom.createElement(tagName);
        elem.textContent = inst.content;
        return elem;
    }

}

export = StringElement;