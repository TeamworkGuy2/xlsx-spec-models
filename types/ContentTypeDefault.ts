
class ContentTypeDefault {
    private static type: OpenXmlIo.ReadWriteNamed<OpenXml.ContentTypeDefault> = ContentTypeDefault; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.ContentTypeDefault {
        xmlDoc.validator.expectNode(elem, "Default", "Types");
        var attrs = elem.attributes;
        return {
            contentType: xmlDoc.attrString(attrs, "ContentType"),
            extension: xmlDoc.attrString(attrs, "Extension"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.ContentTypeDefault): ElementLike {
        var elem = xmlDoc.domBldr.create("Default")
            .attrString("ContentType", inst.contentType)
            .attrString("Extension", inst.extension)
            .element;
        return elem;
    }

}

export = ContentTypeDefault;