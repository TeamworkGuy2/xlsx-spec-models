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
    return EvenHeader;
}());
EvenHeader.type = EvenHeader; // TODO type-checker
module.exports = EvenHeader;
