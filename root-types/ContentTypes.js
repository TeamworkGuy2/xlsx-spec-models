"use strict";
var ContentTypes;
(function (ContentTypes_1) {
    ContentTypes_1.ContentTypes = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "Types", "root element of Content_Type part");
            var defaultElems = xmlDoc.queryAllChilds(elem, "Default");
            var overrideElems = xmlDoc.queryAllChilds(elem, "Override");
            return {
                defaults: xmlDoc.readMulti(ContentTypes_1.ContentTypeDefault.read, defaultElems),
                overrides: xmlDoc.readMulti(ContentTypes_1.ContentTypeOverride.read, overrideElems),
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("Types")
                .element;
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(ContentTypes_1.ContentTypeDefault.write, inst.defaults));
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(ContentTypes_1.ContentTypeOverride.write, inst.overrides));
            return elem;
        }
    };
    ContentTypes_1.ContentTypeDefault = {
        read: function (xmlDoc, elem) {
            var _a, _b;
            xmlDoc.validator.expectNode(elem, "Default", "Types");
            return {
                contentType: (_a = xmlDoc.attrString(elem, "ContentType")) !== null && _a !== void 0 ? _a : "",
                extension: (_b = xmlDoc.attrString(elem, "Extension")) !== null && _b !== void 0 ? _b : "",
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("Default")
                .attrString("ContentType", inst.contentType)
                .attrString("Extension", inst.extension)
                .element;
            return elem;
        }
    };
    ContentTypes_1.ContentTypeOverride = {
        read: function (xmlDoc, elem) {
            var _a, _b;
            xmlDoc.validator.expectNode(elem, "Override", "Types");
            return {
                contentType: (_a = xmlDoc.attrString(elem, "ContentType")) !== null && _a !== void 0 ? _a : "",
                partName: (_b = xmlDoc.attrString(elem, "PartName")) !== null && _b !== void 0 ? _b : "",
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("Override")
                .attrString("ContentType", inst.contentType)
                .attrString("PartName", inst.partName)
                .element;
            return elem;
        }
    };
})(ContentTypes || (ContentTypes = {}));
module.exports = ContentTypes;
