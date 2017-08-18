"use strict";
var ContentTypeDefault = (function () {
    function ContentTypeDefault() {
    }
    ContentTypeDefault.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "Default", "Types");
        var attrs = elem.attributes;
        return {
            contentType: xmlDoc.attrString(attrs, "ContentType"),
            extension: xmlDoc.attrString(attrs, "Extension"),
        };
    };
    ContentTypeDefault.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("Default")
            .attrString("ContentType", inst.contentType)
            .attrString("Extension", inst.extension)
            .element;
        return elem;
    };
    ContentTypeDefault.type = ContentTypeDefault; // TODO type-checker
    return ContentTypeDefault;
}());
module.exports = ContentTypeDefault;
