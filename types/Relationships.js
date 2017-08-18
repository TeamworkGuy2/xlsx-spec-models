"use strict";
var Relationship = require("./Relationship");
var Relationships = (function () {
    function Relationships() {
    }
    Relationships.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "Relationships", "root element of Relationships part");
        var relationshipElems = xmlDoc.queryAllChilds(elem, "Relationship");
        return {
            relationships: xmlDoc.readMulti(Relationship.read, relationshipElems),
        };
    };
    Relationships.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("Relationships")
            .element;
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Relationship.write, inst.relationships));
        return elem;
    };
    Relationships.type = Relationships; // TODO type-checker
    return Relationships;
}());
module.exports = Relationships;
