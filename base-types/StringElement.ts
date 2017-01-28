﻿/** Generic Open XML parser for an element containing text content
 * @since 2016-05-26
 */
class StringElement {
    private static type: OpenXmlIo.ReadWrite<{ content: string }> = StringElement; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement, expectedTagName: string, parentTags?: string): { content: string } {
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
        return {
            content: elem.textContent,
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: { content: string }, tagName: string): HTMLElement {
        var elem = xmlDoc.dom.createElement(tagName);
        elem.textContent = inst.content;
        return elem;
    }

}

export = StringElement;