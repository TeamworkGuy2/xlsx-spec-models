/** Generic Open XML parser for an element containing text content
 * @since 2016-05-26
 */
export class StringElement {
    private static type: OpenXmlIo.ReadWriteNamed<{ content: string }> = StringElement; // TODO type-checker

    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: Element, expectedTagName: string, parentTags?: string): { content: string } {
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
        return {
            content: <string><any>elem.textContent, // only null on document or Doctype
        };
    }

    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: { content: string }, tagName: string): ElementLike {
        var elem = xmlDoc.dom.createElement(tagName);
        elem.textContent = inst.content;
        return elem;
    }
}