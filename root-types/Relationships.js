"use strict";
var Relationships;
(function (Relationships_1) {
    Relationships_1.Relationships = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "Relationships", "root element of Relationships part");
            var relationshipElems = xmlDoc.queryAllChilds(elem, "Relationship");
            return {
                relationships: xmlDoc.readMulti(Relationships_1.Relationship.read, relationshipElems),
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("Relationships")
                .element;
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Relationships_1.Relationship.write, inst.relationships));
            return elem;
        }
    };
    Relationships_1.Relationship = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "Relationship", "Relationships");
            var attrs = elem.attributes;
            return {
                id: xmlDoc.attrString(attrs, "Id"),
                target: xmlDoc.attrString(attrs, "Target"),
                type: xmlDoc.attrString(attrs, "Type"),
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("Relationship")
                .attrString("Id", inst.id, false)
                .attrString("Target", inst.target, false)
                .attrString("Type", inst.type, false)
                .element;
            return elem;
        }
    };
})(Relationships || (Relationships = {}));
module.exports = Relationships;
