"use strict";
var ShapeProperties = require("./ShapeProperties");
var Picture = (function () {
    function Picture() {
    }
    Picture.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "xdr:pic", "absoluteAnchor, grpSp, oneCellAnchor, twoCellAnchor");
        var blipFillElem = xmlDoc.queryOneChild(elem, "blipFill");
        var nvPicPrElem = xmlDoc.queryOneChild(elem, "nvPicPr");
        var spPrElem = xmlDoc.queryOneChild(elem, "spPr");
        var attrs = elem.attributes;
        return {
            blipFill: blipFillElem,
            nvPicPr: nvPicPrElem,
            spPr: ShapeProperties.read(xmlDoc, spPrElem),
            // attributes
            fPublished: xmlDoc.attrBool(attrs, "fPublished"),
            macro: xmlDoc.attrString(attrs, "macro"),
        };
    };
    Picture.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("xdr:pic")
            .attrBool("fPublished", inst.fPublished, true, "1", "0")
            .attrString("macro", inst.macro, true)
            .element;
        elem.appendChild(inst.nvPicPr);
        elem.appendChild(inst.blipFill);
        elem.appendChild(ShapeProperties.write(xmlDoc, inst.spPr));
        return elem;
    };
    Picture.type = Picture; // TODO type-checker
    return Picture;
}());
module.exports = Picture;
