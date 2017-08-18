
class ClientData {
    private static type: OpenXmlIo.ReadWrite<OpenXml.ClientData> = ClientData; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.ClientData {
        xmlDoc.validator.expectNode(elem, "xdr:clientData", "absoluteAnchor, oneCellAnchor, twoCellAnchor");

        var attrs = elem.attributes;
        return {
            fLocksWithSheet: xmlDoc.attrBool(attrs, "fLocksWithSheet"),
            fPrintsWithSheet: xmlDoc.attrBool(attrs, "fPrintsWithSheet"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.ClientData): ElementLike {
        var elem = xmlDoc.domBldr.create("xdr:clientData")
            .attrBool("fLocksWithSheet", inst.fLocksWithSheet, true, "1", "0")
            .attrBool("fPrintsWithSheet", inst.fPrintsWithSheet, true, "1", "0")
            .element;

        return elem;
    }

}

export = ClientData;