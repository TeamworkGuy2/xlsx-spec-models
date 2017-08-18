"use strict";
var ContentTypeOverride = (function () {
    function ContentTypeOverride() {
    }
    ContentTypeOverride.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "Override", "Types");
        var attrs = elem.attributes;
        return {
            contentType: xmlDoc.attrString(attrs, "ContentType"),
            partName: xmlDoc.attrString(attrs, "PartName"),
        };
    };
    ContentTypeOverride.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("Override")
            .attrString("ContentType", inst.contentType)
            .attrString("PartName", inst.partName)
            .element;
        return elem;
    };
    ContentTypeOverride.type = ContentTypeOverride; // TODO type-checker
    return ContentTypeOverride;
}());
module.exports = ContentTypeOverride;
