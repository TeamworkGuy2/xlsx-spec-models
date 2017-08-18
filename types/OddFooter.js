"use strict";
var StringElement = require("../base-types/StringElement");
var OddFooter = (function () {
    function OddFooter() {
    }
    OddFooter.read = function (xmlDoc, elem) {
        return StringElement.read(xmlDoc, elem, "oddFooter", "headerFooter");
    };
    OddFooter.write = function (xmlDoc, inst) {
        return StringElement.write(xmlDoc, inst, "oddFooter");
    };
    OddFooter.type = OddFooter; // TODO type-checker
    return OddFooter;
}());
module.exports = OddFooter;
