import Relationship = require("./Relationship");

class Relationships {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Relationships> = Relationships; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Relationships {
        xmlDoc.validator.expectNode(elem, "Relationships", "root element of Relationships part");
        var relationshipElems = xmlDoc.queryAllChilds(elem, "Relationship");
        return {
            relationships: xmlDoc.readMulti(Relationship.read, relationshipElems),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Relationships): ElementLike {
        var elem = xmlDoc.domBldr.create("Relationships")
            .element;
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Relationship.write, inst.relationships));
        return elem;
    }

}

export = Relationships;