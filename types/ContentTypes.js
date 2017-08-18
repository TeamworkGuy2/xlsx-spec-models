"use strict";
var ContentTypeDefault = require("./ContentTypeDefault");
var ContentTypeOverride = require("./ContentTypeOverride");
var ContentTypes = (function () {
    function ContentTypes() {
    }
    ContentTypes.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "Types", "root element of Content_Type part");
        var defaultElems = xmlDoc.queryAllChilds(elem, "Default");
        var overrideElems = xmlDoc.queryAllChilds(elem, "Override");
        return {
            defaults: xmlDoc.readMulti(ContentTypeDefault.read, defaultElems),
            overrides: xmlDoc.readMulti(ContentTypeOverride.read, overrideElems),
        };
    };
    ContentTypes.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("Types")
            .element;
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(ContentTypeDefault.write, inst.defaults));
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(ContentTypeOverride.write, inst.overrides));
        return elem;
    };
    ContentTypes.type = ContentTypes; // TODO type-checker
    return ContentTypes;
}());
module.exports = ContentTypes;
