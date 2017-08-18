
class ContentTypeOverride {
    private static type: OpenXmlIo.ReadWriteNamed<OpenXml.ContentTypeOverride> = ContentTypeOverride; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.ContentTypeOverride {
        xmlDoc.validator.expectNode(elem, "Override", "Types");
        var attrs = elem.attributes;
        return {
            contentType: xmlDoc.attrString(attrs, "ContentType"),
            partName: xmlDoc.attrString(attrs, "PartName"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.ContentTypeOverride): ElementLike {
        var elem = xmlDoc.domBldr.create("Override")
            .attrString("ContentType", inst.contentType)
            .attrString("PartName", inst.partName)
            .element;
        return elem;
    }

}

export = ContentTypeOverride;