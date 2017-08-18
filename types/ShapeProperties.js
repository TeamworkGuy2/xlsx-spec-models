"use strict";
var Transform2D = require("./Transform2D");
var ShapeProperties = (function () {
    function ShapeProperties() {
    }
    ShapeProperties.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "xdr:spPr", "cxnSp, pic, sp");
        var attrs = elem.attributes;
        return {
            xfrm: Transform2D.read(xmlDoc, xmlDoc.queryOneChild(elem, "xfrm")),
            ln: xmlDoc.queryOneChild(elem, "ln"),
            scene3d: xmlDoc.queryOneChild(elem, "scene3d"),
            sp3d: xmlDoc.queryOneChild(elem, "sp3d"),
            prstGeom: xmlDoc.queryOneChild(elem, "prstGeom"),
            extLst: xmlDoc.queryOneChild(elem, "extLst"),
            // attributes
            bwMode: xmlDoc.attrString(attrs, "bwMode"),
        };
    };
    ShapeProperties.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("xdr:spPr")
            .attrString("bwMode", inst.bwMode, true)
            .element;
        if (inst.xfrm) {
            elem.appendChild(Transform2D.write(xmlDoc, inst.xfrm));
        }
        if (inst.ln) {
            elem.appendChild(inst.ln);
        }
        if (inst.scene3d) {
            elem.appendChild(inst.scene3d);
        }
        if (inst.sp3d) {
            elem.appendChild(inst.sp3d);
        }
        if (inst.prstGeom) {
            elem.appendChild(inst.prstGeom);
        }
        if (inst.extLst) {
            elem.appendChild(inst.extLst);
        }
        if (inst.prstGeom) {
            elem.appendChild(inst.prstGeom);
        }
        return elem;
    };
    ShapeProperties.type = ShapeProperties; // TODO type-checker
    return ShapeProperties;
}());
module.exports = ShapeProperties;
