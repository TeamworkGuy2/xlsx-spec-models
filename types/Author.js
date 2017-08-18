"use strict";
var StringElement = require("../base-types/StringElement");
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
