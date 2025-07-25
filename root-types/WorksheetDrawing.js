"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoCellAnchor = exports.Transform2D = exports.ToMarker = exports.ShapeProperties = exports.Point2DType = exports.Picture = exports.Offset = exports.FromMarker = exports.Extent = exports.ClientData = exports.WorksheetDrawing = void 0;
var MarkerType_1 = require("../types/MarkerType");
exports.WorksheetDrawing = {
    read: function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "xdr:wsDr", "root element of SpreadsheetML Drawings part");
        var twoCellAnchorElems = xmlDoc.queryAllChilds(elem, "twoCellAnchor");
        return {
            twoCellAnchors: xmlDoc.readMulti(exports.TwoCellAnchor.read, twoCellAnchorElems),
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("xdr:wsDr");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(exports.TwoCellAnchor.write, inst.twoCellAnchors));
        return elem;
    }
};
exports.ClientData = {
    read: function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "xdr:clientData", "absoluteAnchor, oneCellAnchor, twoCellAnchor");
        return {
            fLocksWithSheet: xmlDoc.attrBool(elem, "fLocksWithSheet"),
            fPrintsWithSheet: xmlDoc.attrBool(elem, "fPrintsWithSheet"),
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("xdr:clientData")
            .attrBool("fLocksWithSheet", inst.fLocksWithSheet, true, "1", "0")
            .attrBool("fPrintsWithSheet", inst.fPrintsWithSheet, true, "1", "0")
            .element;
        return elem;
    }
};
exports.Extent = {
    read: function (xmlDoc, elem) {
        var _a, _b;
        xmlDoc.validator.expectNode(elem, "a:ext", "absoluteAnchor, oneCellAnchor");
        return {
            cx: (_a = xmlDoc.attrInt(elem, "cx")) !== null && _a !== void 0 ? _a : 0,
            cy: (_b = xmlDoc.attrInt(elem, "cy")) !== null && _b !== void 0 ? _b : 0,
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("a:ext")
            .attrInt("cx", inst.cx, true)
            .attrInt("cy", inst.cy, true)
            .element;
        return elem;
    }
};
exports.FromMarker = {
    read: function (xmlDoc, elem) {
        return MarkerType_1.MarkerType.read(xmlDoc, elem, "xdr:from", "anchor, oneCellAnchor, twoCellAnchor");
    },
    write: function (xmlDoc, inst) {
        return MarkerType_1.MarkerType.write(xmlDoc, inst, "xdr:from");
    }
};
exports.Offset = {
    read: function (xmlDoc, elem) {
        return exports.Point2DType.read(xmlDoc, elem, "a:off", "xfrm");
    },
    write: function (xmlDoc, inst) {
        return exports.Point2DType.write(xmlDoc, inst, "a:off");
    }
};
exports.Picture = {
    read: function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "xdr:pic", "absoluteAnchor, grpSp, oneCellAnchor, twoCellAnchor");
        var blipFillElem = xmlDoc.queryOneChild(elem, "blipFill");
        var nvPicPrElem = xmlDoc.queryOneChild(elem, "nvPicPr");
        var spPrElem = xmlDoc.queryOneChild(elem, "spPr");
        return {
            blipFill: blipFillElem,
            nvPicPr: nvPicPrElem,
            spPr: exports.ShapeProperties.read(xmlDoc, spPrElem),
            // attributes
            fPublished: xmlDoc.attrBool(elem, "fPublished"),
            macro: xmlDoc.attrString(elem, "macro"),
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("xdr:pic")
            .attrBool("fPublished", inst.fPublished, true, "1", "0")
            .attrString("macro", inst.macro, true)
            .element;
        elem.appendChild(inst.nvPicPr);
        elem.appendChild(inst.blipFill);
        elem.appendChild(exports.ShapeProperties.write(xmlDoc, inst.spPr));
        return elem;
    }
};
exports.Point2DType = {
    read: function (xmlDoc, elem, expectedTagName, parentTags) {
        var _a, _b;
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
        return {
            x: (_a = xmlDoc.attrInt(elem, "x")) !== null && _a !== void 0 ? _a : 0,
            y: (_b = xmlDoc.attrInt(elem, "y")) !== null && _b !== void 0 ? _b : 0,
        };
    },
    write: function (xmlDoc, inst, tagName) {
        var elem = xmlDoc.domBldr.create(tagName)
            .attrInt("x", inst.x, true)
            .attrInt("y", inst.y, true)
            .element;
        return elem;
    }
};
exports.ShapeProperties = {
    read: function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "xdr:spPr", "cxnSp, pic, sp");
        var xfrmElem = xmlDoc.queryOneChild(elem, "xfrm", false);
        return {
            xfrm: xfrmElem ? exports.Transform2D.read(xmlDoc, xfrmElem) : null,
            ln: xmlDoc.queryOneChild(elem, "ln", false),
            scene3d: xmlDoc.queryOneChild(elem, "scene3d", false),
            sp3d: xmlDoc.queryOneChild(elem, "sp3d", false),
            prstGeom: xmlDoc.queryOneChild(elem, "prstGeom", false),
            extLst: xmlDoc.queryOneChild(elem, "extLst", false),
            // attributes
            bwMode: xmlDoc.attrString(elem, "bwMode"),
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("xdr:spPr")
            .attrString("bwMode", inst.bwMode, true)
            .element;
        if (inst.xfrm) {
            elem.appendChild(exports.Transform2D.write(xmlDoc, inst.xfrm));
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
    }
};
exports.ToMarker = {
    read: function (xmlDoc, elem) {
        return MarkerType_1.MarkerType.read(xmlDoc, elem, "xdr:to", "anchor, twoCellAnchor");
    },
    write: function (xmlDoc, inst) {
        return MarkerType_1.MarkerType.write(xmlDoc, inst, "xdr:to");
    }
};
exports.Transform2D = {
    read: function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "a:xfrm", "graphicFrame, spPr, txSp");
        var offElem = xmlDoc.queryOneChild(elem, "off", false);
        var extElem = xmlDoc.queryOneChild(elem, "ext", false);
        return {
            off: offElem ? exports.Offset.read(xmlDoc, offElem) : null,
            ext: extElem ? exports.Extent.read(xmlDoc, extElem) : null,
            // attributes
            flipH: xmlDoc.attrBool(elem, "flipH"),
            flipV: xmlDoc.attrBool(elem, "flipV"),
            rot: xmlDoc.attrInt(elem, "rot"),
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("a:xfrm")
            .attrBool("fPublished", inst.flipH, true, "1", "0")
            .attrBool("macro", inst.flipV, true, "1", "0")
            .attrInt("rot", inst.rot, true)
            .element;
        if (inst.off) {
            elem.appendChild(exports.Offset.write(xmlDoc, inst.off));
        }
        if (inst.ext) {
            elem.appendChild(exports.Extent.write(xmlDoc, inst.ext));
        }
        return elem;
    }
};
exports.TwoCellAnchor = {
    read: function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "xdr:twoCellAnchor", "xdr:wsDr");
        var picElem = xmlDoc.queryOneChild(elem, "pic", false);
        return {
            clientData: exports.ClientData.read(xmlDoc, xmlDoc.queryOneChild(elem, "clientData")),
            from: exports.FromMarker.read(xmlDoc, xmlDoc.queryOneChild(elem, "from")),
            to: exports.ToMarker.read(xmlDoc, xmlDoc.queryOneChild(elem, "to")),
            pic: picElem ? exports.Picture.read(xmlDoc, picElem) : null,
            // TODO other EG_ObjectChoices properties
            // attributes
            editAs: xmlDoc.attrString(elem, "editAs"),
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("xdr:twoCellAnchor")
            .attrString("editAs", inst.editAs, true)
            .element;
        elem.appendChild(exports.FromMarker.write(xmlDoc, inst.from));
        elem.appendChild(exports.ToMarker.write(xmlDoc, inst.to));
        if (inst.pic) {
            elem.appendChild(exports.Picture.write(xmlDoc, inst.pic));
        }
        elem.appendChild(exports.ClientData.write(xmlDoc, inst.clientData));
        return elem;
    }
};
