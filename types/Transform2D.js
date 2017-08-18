"use strict";
var Extent = require("./Extent");
var Offset = require("./Offset");
var Transform2D = (function () {
    function Transform2D() {
    }
    Transform2D.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "a:xfrm", "graphicFrame, spPr, txSp");
        var offElem = xmlDoc.queryOneChild(elem, "off");
        var extElem = xmlDoc.queryOneChild(elem, "ext");
        var attrs = elem.attributes;
        return {
            off: Offset.read(xmlDoc, offElem),
            ext: Extent.read(xmlDoc, extElem),
            // attributes
            flipH: xmlDoc.attrBool(attrs, "flipH"),
            flipV: xmlDoc.attrBool(attrs, "flipV"),
            rot: xmlDoc.attrInt(attrs, "rot"),
        };
    };
    Transform2D.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("a:xfrm")
            .attrBool("fPublished", inst.flipH, true, "1", "0")
            .attrBool("macro", inst.flipV, true, "1", "0")
            .attrInt("rot", inst.rot, true)
            .element;
        if (inst.off) {
            elem.appendChild(Offset.write(xmlDoc, inst.off));
        }
        if (inst.ext) {
            elem.appendChild(Extent.write(xmlDoc, inst.ext));
        }
        return elem;
    };
    Transform2D.type = Transform2D; // TODO type-checker
    return Transform2D;
}());
module.exports = Transform2D;
