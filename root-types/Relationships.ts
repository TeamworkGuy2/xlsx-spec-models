
module Relationships {

    export var Relationships: OpenXmlIo.ReadWrite<OpenXml.Relationships> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "Relationships", "root element of Relationships part");
            var relationshipElems = xmlDoc.queryAllChilds(elem, "Relationship");
            return {
                relationships: xmlDoc.readMulti(Relationship.read, relationshipElems),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("Relationships")
                .element;
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Relationship.write, inst.relationships));
            return elem;
        }
    };


    export var Relationship: OpenXmlIo.ReadWrite<OpenXml.Relationship> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "Relationship", "Relationships");
            return {
                id: xmlDoc.attrString(elem, "Id"),
                target: xmlDoc.attrString(elem, "Target"),
                type: xmlDoc.attrString(elem, "Type"),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("Relationship")
                .attrString("Id", inst.id, false)
                .attrString("Target", inst.target, false)
                .attrString("Type", inst.type, false)
                .element;
            return elem;
        }
    };

}

export = Relationships;