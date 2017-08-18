"use strict";
var StringElement = require("../base-types/StringElement");
var EvenFooter = (function () {
    function EvenFooter() {
    }
    EvenFooter.read = function (xmlDoc, elem) {
        return StringElement.read(xmlDoc, elem, "evenfooter", "headerFooter");
    };
    EvenFooter.write = function (xmlDoc, inst) {
        return StringElement.write(xmlDoc, inst, "evenFooter");
    };
    EvenFooter.type = EvenFooter; // TODO type-checker
    return EvenFooter;
}());
module.exports = EvenFooter;
