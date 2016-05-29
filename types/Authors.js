"use strict";
var Author = require("./Author");
/** <authors> (Authors) "x:authors"
 * parent: comments (§18.7.6)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.authors.aspx
 */
var Authors = (function () {
    function Authors() {
    }
    Authors.read = function (xmlDoc, elem) {
        if (elem.tagName !== "authors") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "authors", "comments");
        }
        var authorElems = xmlDoc.domHelper.queryAllChilds(elem, "author");
        return {
            authors: xmlDoc.readOpenXml.readMulti(xmlDoc, Author.read, authorElems),
        };
    };
    Authors.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("authors");
        var authorElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, Author.write, inst.authors);
        xmlDoc.domHelper.addChilds(elem, authorElems);
        return elem;
    };
    Authors.type = Authors; // TODO type-checker
    return Authors;
}());
module.exports = Authors;
