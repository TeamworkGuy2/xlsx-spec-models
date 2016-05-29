"use strict";
var StringElement = require("../base-types/StringElement");
/** <author> (Author) "x:author"
 * parent: authors (§18.7.2)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.author.aspx
 */
var Author = (function () {
    function Author() {
    }
    Author.read = function (xmlDoc, elem) {
        return StringElement.read(xmlDoc, elem, "author", "authors");
    };
    Author.write = function (xmlDoc, inst) {
        return StringElement.write(xmlDoc, inst, "author");
    };
    Author.type = Author; // TODO type-checker
    return Author;
}());
module.exports = Author;
