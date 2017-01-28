"use strict";
var Author = require("./Author");
var Authors = (function () {
    function Authors() {
    }
    Authors.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "authors", "comments");
        var authorElems = xmlDoc.queryAllChilds(elem, "author");
        return {
            authors: xmlDoc.readMulti(Author.read, authorElems),
        };
    };
    Authors.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("authors");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Author.write, inst.authors));
        return elem;
    };
    return Authors;
}());
Authors.type = Authors; // TODO type-checker
module.exports = Authors;
