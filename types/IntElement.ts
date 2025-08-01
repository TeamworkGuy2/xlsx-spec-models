﻿/** Generic Open XML parser for an element containing integer/numeric content
 * @since 2016-05-26
 */
 export class IntElement {
    private static type: OpenXmlIo.ReadWriteNamed<{ content: number }> = IntElement; // TODO type-checker

    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement, expectedTagName: string, parentTags?: string): { content: number } {
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
        return {
            content: parseInt(<any>elem.textContent), // only null on document or Doctype
        };
    }

    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: { content: number }, tagName: string): ElementLike {
        var elem = xmlDoc.dom.createElement(tagName);
        elem.textContent = <any>inst.content;
        return elem;
    }
}