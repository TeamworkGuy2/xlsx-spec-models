"use strict";
var StringElement = require("../base-types/StringElement");
var FirstFooter = (function () {
    function FirstFooter() {
    }
    FirstFooter.read = function (xmlDoc, elem) {
        return StringElement.read(xmlDoc, elem, "firstFooter", "headerFooter");
    };
    FirstFooter.write = function (xmlDoc, inst) {
        return StringElement.write(xmlDoc, inst, "firstFooter");
    };
    FirstFooter.type = FirstFooter; // TODO type-checker
    return FirstFooter;
}());
module.exports = FirstFooter;
