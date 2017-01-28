"use strict";
var StringElement = require("../base-types/StringElement");
var OddHeader = (function () {
    function OddHeader() {
    }
    OddHeader.read = function (xmlDoc, elem) {
        return StringElement.read(xmlDoc, elem, "oddHeader", "headerFooter");
    };
    OddHeader.write = function (xmlDoc, inst) {
        return StringElement.write(xmlDoc, inst, "oddHeader");
    };
    return OddHeader;
}());
OddHeader.type = OddHeader; // TODO type-checker
module.exports = OddHeader;
