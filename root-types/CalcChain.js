"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculationCell = exports.CalcChain = void 0;
exports.CalcChain = {
    read: function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "calcChain", "root element of SpreadsheetML calculation chain part");
        var cElems = xmlDoc.queryAllChilds(elem, "c");
        return {
            cs: xmlDoc.readMulti(exports.CalculationCell.read, cElems),
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("calcChain");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(exports.CalculationCell.write, inst.cs));
        return elem;
    }
};
exports.CalculationCell = {
    read: function (xmlDoc, elem) {
        var _a;
        xmlDoc.validator.expectNode(elem, "c", "calcChain");
        return {
            i: xmlDoc.attrInt(elem, "i"),
            l: xmlDoc.attrBool(elem, "l"),
            r: (_a = xmlDoc.attrString(elem, "r")) !== null && _a !== void 0 ? _a : "",
            s: xmlDoc.attrBool(elem, "s"),
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("c")
            .attrString("r", inst.r)
            .attrInt("i", inst.i)
            .attrBool("l", inst.l, true, "1", "0")
            .attrBool("s", inst.s, true, "1", "0")
            .element;
        return elem;
    }
};
