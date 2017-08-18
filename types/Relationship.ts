
class Relationship {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Relationship>; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Relationship {
        xmlDoc.validator.expectNode(elem, "Relationship", "Relationships");
        var attrs = elem.attributes;
        return {
            id: xmlDoc.attrString(attrs, "Id"),
            target: xmlDoc.attrString(attrs, "Target"),
            type: xmlDoc.attrString(attrs, "Type"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Relationship): ElementLike {
        var elem = xmlDoc.domBldr.create("Relationship")
            .attrString("Id", inst.id, false)
            .attrString("Target", inst.target, false)
            .attrString("Type", inst.type, false)
            .element;
        return elem;
    }

}

export = Relationship;