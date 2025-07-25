"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenXmlSpecParser = void 0;
var fs = require("fs");
var path = require("path");
var xml2js = require("xml2js");
var Defer = require("ts-promises/Defer");
var OpenXmlSpecParser;
(function (OpenXmlSpecParser) {
    function loadXsdSpecs(xsdFolderOrFile) {
        var xsdTypesCache = {};
        var promises = [];
        var stats = fs.statSync(xsdFolderOrFile);
        if (stats.isFile()) {
            promises.push(loadXsdToCache(path.dirname(xsdFolderOrFile), path.basename(xsdFolderOrFile, "xsd"), xsdTypesCache));
        }
        else {
            var files = fs.readdirSync(xsdFolderOrFile, { withFileTypes: true });
            for (var i = 0, size = files.length; i < size; i++) {
                var file = files[i];
                if (file.isFile()) {
                    promises.push(loadXsdToCache(xsdFolderOrFile, file.name, xsdTypesCache));
                }
            }
        }
        return Defer.when(promises).then(function () { return xsdTypesCache; });
    }
    OpenXmlSpecParser.loadXsdSpecs = loadXsdSpecs;
    function loadXsdToCache(basepath, fileName, fileCache) {
        var filePath = path.join(basepath, fileName);
        // TODO debugging
        //console.log("loading " + filePath);
        var contents = fs.readFileSync(filePath).toString("utf-8");
        return parseHtmlDoc(contents).then(function (domObj) {
            var rootKeys = Object.keys(domObj);
            var xsdSchemaIdx = rootKeys.indexOf("xsd:schema");
            if (xsdSchemaIdx === -1) {
                throw new Error("expected 'xsd:schema' root element, in '" + filePath + "'");
            }
            if (rootKeys.length > 1) {
                throw new Error("unexpected root elements " + rootKeys.splice(xsdSchemaIdx, 1) + ", in '" + filePath + "'");
            }
            var cache = fileCache[fileName] = {};
            var childGroups = domObj["xsd:schema"];
            var tagNames = Object.keys(childGroups);
            var invalidTags = tagNames.filter(function (key) { return !isValidFirstLevelTag(key); });
            if (invalidTags.length > 0) {
                throw new Error("invalid Open XML XSD tags " + invalidTags + ", in '" + filePath + "'");
            }
            for (var i = 0, size = tagNames.length; i < size; i++) {
                var tagName = tagNames[i];
                if (tagName === "xsd:import") {
                    continue;
                }
                var childGroup = childGroups[tagName];
                for (var j = 0, sizeJ = childGroup.length; j < sizeJ; j++) {
                    var child = childGroup[j];
                    var name = child["$"].name;
                    if (name == null) {
                        throw new Error("element '" + tagName + "' does not contain a 'name' attribute, in '" + filePath + "'");
                    }
                    if (cache[name] != null) {
                        throw new Error("element '" + tagName + "' named '" + name + "' already loaded from '" + cache[name]["$src"] + "', duplicate in '" + filePath + "'");
                    }
                    child["$src"] = filePath;
                    cache[name] = child;
                    // TODO debugging
                    //console.log(" - " + tagName, child["$"]);
                }
            }
            return null;
        });
    }
    function parseHtmlDoc(html) {
        var dfd = Defer.newDefer();
        xml2js.parseString(html, function (err, result) {
            if (err) {
                dfd.reject(err);
            }
            else {
                dfd.resolve(result);
            }
        });
        return dfd.promise;
    }
    function isValidFirstLevelTag(key) {
        switch (key) {
            case "$": // xml2js stores attributes on the '$' js object field
            case "xsd:attribute":
            case "xsd:attributeGroup":
            case "xsd:complexType":
            case "xsd:element":
            case "xsd:group":
            case "xsd:group":
            case "xsd:import":
            case "xsd:simpleType":
                return true;
            default: return false;
        }
    }
})(OpenXmlSpecParser = exports.OpenXmlSpecParser || (exports.OpenXmlSpecParser = {}));
