"use strict";
var StringElement = require("../base-types/StringElement");
var EvenHeader = (function () {
    function EvenHeader() {
    }
    EvenHeader.read = function (xmlDoc, elem) {
        return StringElement.read(xmlDoc, elem, "evenHeader", "headerFooter");
    };
    EvenHeader.write = function (xmlDoc, inst) {
        return StringElement.write(xmlDoc, inst, "evenHeader");
    };
    EvenHeader.type = EvenHeader; // TODO type-checker
    return EvenHeader;
}());
module.exports = EvenHeader;
