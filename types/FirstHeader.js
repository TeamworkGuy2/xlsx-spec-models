"use strict";
var StringElement = require("../base-types/StringElement");
var FirstHeader = (function () {
    function FirstHeader() {
    }
    FirstHeader.read = function (xmlDoc, elem) {
        return StringElement.read(xmlDoc, elem, "firstHeader", "headerFooter");
    };
    FirstHeader.write = function (xmlDoc, inst) {
        return StringElement.write(xmlDoc, inst, "firstHeader");
    };
    FirstHeader.type = FirstHeader; // TODO type-checker
    return FirstHeader;
}());
module.exports = FirstHeader;
