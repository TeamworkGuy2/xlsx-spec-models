"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunFont = void 0;
var RunFont = /** @class */ (function () {
    function RunFont() {
    }
    RunFont.read = function (xmlDoc, elem) {
        var _a;
        xmlDoc.validator.expectNode(elem, "rFont", "rPr");
        return {
            val: (_a = xmlDoc.attrString(elem, "val")) !== null && _a !== void 0 ? _a : "",
        };
    };
    RunFont.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("rFont")
            .attrString("val", inst.val)
            .element;
        return elem;
    };
    RunFont.copy = function (inst) {
        return {
            val: inst.val
        };
    };
    RunFont.type = RunFont; // TODO type-checker
    return RunFont;
}());
exports.RunFont = RunFont;
