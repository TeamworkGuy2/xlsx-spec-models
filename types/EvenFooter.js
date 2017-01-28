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
    return EvenFooter;
}());
EvenFooter.type = EvenFooter; // TODO type-checker
module.exports = EvenFooter;
