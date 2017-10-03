"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var chai = require("chai");
var asr = chai.assert;
var root = process.cwd();
function listFiles(dir) {
    return fs.readdirSync(dir).map(function (name) { return path.join(dir, name); }).filter(function (f) { return fs.lstatSync(f).isFile() && f.endsWith(".js"); });
}
function fileName(path) {
    var idx = path.lastIndexOf("/");
    return (idx > -1 || (idx = path.lastIndexOf("\\")) > -1 ? path.substr(idx + 1) : path);
}
suite("validate OpenXml implementations", function validateOpenXmlImplementations() {
    test("duplicate class/prop names", function duplicateClassPropNames() {
        var files = listFiles(path.resolve(root, "./root-types/"));
        var props = {};
        for (var i = 0, size = files.length; i < size; i++) {
            var rootModule = require(files[i]);
            var keys = Object.keys(rootModule);
            for (var j = 0, sz = keys.length; j < sz; j++) {
                if (Object.prototype.hasOwnProperty.call(props, keys[j])) {
                    asr.fail(null, null, "duplicate property '" + keys[j] + "' from modules '" + fileName(files[i]) + "' and '" + fileName(props[keys[j]]) + "'");
                }
                props[keys[j]] = files[i];
            }
        }
    });
});
