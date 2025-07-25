import fs = require("fs");
import path = require("path");
import chai = require("chai");
import mocha = require("mocha");

var asr = chai.assert;

var root = process.cwd();

function listFiles(dir: string) {
    return fs.readdirSync(dir).map((name) => path.join(dir, name)).filter((f) => fs.lstatSync(f).isFile() && f.endsWith(".js"));
}

function fileName(path: string) {
    var idx = path.lastIndexOf("/");
    return (idx > -1 || (idx = path.lastIndexOf("\\")) > -1 ? path.substr(idx + 1) : path);
}

suite("validate OpenXml implementations", function validateOpenXmlImplementations() {

    test("duplicate class/prop names", function duplicateClassPropNames() {
        var files = listFiles(path.resolve(root, "./root-types/"));
        var props: { [name: string]: any } = <any>{};
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