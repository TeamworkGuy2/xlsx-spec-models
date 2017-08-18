"use strict";
var Relationship = (function () {
    function Relationship() {
    }
    Relationship.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "Relationship", "Relationships");
        var attrs = elem.attributes;
        return {
            id: xmlDoc.attrString(attrs, "Id"),
            target: xmlDoc.attrString(attrs, "Target"),
            type: xmlDoc.attrString(attrs, "Type"),
        };
    };
    Relationship.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("Relationship")
            .attrString("Id", inst.id, false)
            .attrString("Target", inst.target, false)
            .attrString("Type", inst.type, false)
            .element;
        return elem;
    };
    return Relationship;
}());
module.exports = Relationship;
