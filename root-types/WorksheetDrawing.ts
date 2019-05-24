import MarkerType = require("../types/MarkerType");

module WorksheetDrawing {

    export var WorksheetDrawing: OpenXmlIo.ReadWrite<OpenXml.WorksheetDrawing> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "xdr:wsDr", "root element of SpreadsheetML Drawings part");
            var twoCellAnchorElems = xmlDoc.queryAllChilds(elem, "twoCellAnchor");
            return {
                twoCellAnchors: xmlDoc.readMulti(TwoCellAnchor.read, twoCellAnchorElems),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("xdr:wsDr");
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(TwoCellAnchor.write, inst.twoCellAnchors));
            return elem;
        }
    };


    export var ClientData: OpenXmlIo.ReadWrite<OpenXml.ClientData> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "xdr:clientData", "absoluteAnchor, oneCellAnchor, twoCellAnchor");
            return {
                fLocksWithSheet: xmlDoc.attrBool(elem, "fLocksWithSheet"),
                fPrintsWithSheet: xmlDoc.attrBool(elem, "fPrintsWithSheet"),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("xdr:clientData")
                .attrBool("fLocksWithSheet", inst.fLocksWithSheet, true, "1", "0")
                .attrBool("fPrintsWithSheet", inst.fPrintsWithSheet, true, "1", "0")
                .element;

            return elem;
        }
    };


    export var Extent: OpenXmlIo.ReadWrite<OpenXml.Extent> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "a:ext", "absoluteAnchor, oneCellAnchor");
            return {
                cx: xmlDoc.attrInt(elem, "cx"),
                cy: xmlDoc.attrInt(elem, "cy"),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("a:ext")
                .attrInt("cx", inst.cx, true)
                .attrInt("cy", inst.cy, true)
                .element;
            return elem;
        }
    };


    export var FromMarker: OpenXmlIo.ReadWrite<OpenXml.FromMarker> = {
        read(xmlDoc, elem) {
            return MarkerType.read(xmlDoc, elem, "xdr:from", "anchor, oneCellAnchor, twoCellAnchor");
        },

        write(xmlDoc, inst) {
            return MarkerType.write(xmlDoc, inst, "xdr:from");
        }
    };


    export var Offset: OpenXmlIo.ReadWrite<OpenXml.Offset> = {
        read(xmlDoc, elem) {
            return Point2DType.read(xmlDoc, elem, "a:off", "xfrm");
        },

        write(xmlDoc, inst) {
            return Point2DType.write(xmlDoc, inst, "a:off");
        }
    };


    export var Picture: OpenXmlIo.ReadWrite<OpenXml.Picture> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "xdr:pic", "absoluteAnchor, grpSp, oneCellAnchor, twoCellAnchor");
            var blipFillElem = xmlDoc.queryOneChild(elem, "blipFill");
            var nvPicPrElem = xmlDoc.queryOneChild(elem, "nvPicPr");
            var spPrElem = xmlDoc.queryOneChild(elem, "spPr");

            return {
                blipFill: <any>blipFillElem,
                nvPicPr: <any>nvPicPrElem,
                spPr: ShapeProperties.read(xmlDoc, spPrElem),
                // attributes
                fPublished: xmlDoc.attrBool(elem, "fPublished"),
                macro: xmlDoc.attrString(elem, "macro"),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("xdr:pic")
                .attrBool("fPublished", inst.fPublished, true, "1", "0")
                .attrString("macro", inst.macro, true)
                .element;
            elem.appendChild(<any>inst.nvPicPr);
            elem.appendChild(<any>inst.blipFill);
            elem.appendChild(ShapeProperties.write(xmlDoc, inst.spPr));
            return elem;
        }
    };


    export var Point2DType: OpenXmlIo.ReadWriteNamed<OpenXml.Point2DType> = {
        read(xmlDoc, elem, expectedTagName, parentTags?) {
            xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
            return {
                x: xmlDoc.attrInt(elem, "x"),
                y: xmlDoc.attrInt(elem, "y"),
            };
        },

        write(xmlDoc, inst, tagName) {
            var elem = xmlDoc.domBldr.create(tagName)
                .attrInt("x", inst.x, true)
                .attrInt("y", inst.y, true)
                .element;
            return elem;
        }
    };


    export var ShapeProperties: OpenXmlIo.ReadWrite<OpenXml.ShapeProperties> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "xdr:spPr", "cxnSp, pic, sp");

            return {
                xfrm: Transform2D.read(xmlDoc, xmlDoc.queryOneChild(elem, "xfrm")),
                ln: xmlDoc.queryOneChild(elem, "ln"),
                scene3d: xmlDoc.queryOneChild(elem, "scene3d"),
                sp3d: xmlDoc.queryOneChild(elem, "sp3d"),
                prstGeom: xmlDoc.queryOneChild(elem, "prstGeom"),
                extLst: xmlDoc.queryOneChild(elem, "extLst"),
                // attributes
                bwMode: <OpenXml.ST_BlackWhiteMode>xmlDoc.attrString(elem, "bwMode"),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("xdr:spPr")
                .attrString("bwMode", inst.bwMode, true)
                .element;
            if (inst.xfrm) { elem.appendChild(Transform2D.write(xmlDoc, inst.xfrm)); }
            if (inst.ln) { elem.appendChild(inst.ln); }
            if (inst.scene3d) { elem.appendChild(inst.scene3d); }
            if (inst.sp3d) { elem.appendChild(inst.sp3d); }
            if (inst.prstGeom) { elem.appendChild(inst.prstGeom); }
            if (inst.extLst) { elem.appendChild(inst.extLst); }
            if (inst.prstGeom) { elem.appendChild(inst.prstGeom); }
            return elem;
        }
    };


    export var ToMarker: OpenXmlIo.ReadWrite<OpenXml.ToMarker> = {
        read(xmlDoc, elem) {
            return MarkerType.read(xmlDoc, elem, "xdr:to", "anchor, twoCellAnchor");
        },

        write(xmlDoc, inst) {
            return MarkerType.write(xmlDoc, inst, "xdr:to");
        }
    };


    export var Transform2D: OpenXmlIo.ReadWrite<OpenXml.Transform2D> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "a:xfrm", "graphicFrame, spPr, txSp");
            var offElem = xmlDoc.queryOneChild(elem, "off");
            var extElem = xmlDoc.queryOneChild(elem, "ext");

            return {
                off: Offset.read(xmlDoc, offElem),
                ext: Extent.read(xmlDoc, extElem),
                // attributes
                flipH: xmlDoc.attrBool(elem, "flipH"),
                flipV: xmlDoc.attrBool(elem, "flipV"),
                rot: xmlDoc.attrInt(elem, "rot"),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("a:xfrm")
                .attrBool("fPublished", inst.flipH, true, "1", "0")
                .attrBool("macro", inst.flipV, true, "1", "0")
                .attrInt("rot", inst.rot, true)
                .element;
            if (inst.off) { elem.appendChild(Offset.write(xmlDoc, inst.off)); }
            if (inst.ext) { elem.appendChild(Extent.write(xmlDoc, inst.ext)); }
            return elem;
        }
    };


    export var TwoCellAnchor: OpenXmlIo.ReadWrite<OpenXml.TwoCellAnchor> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "xdr:twoCellAnchor", "xdr:wsDr");

            return {
                clientData: ClientData.read(xmlDoc, xmlDoc.queryOneChild(elem, "clientData")),
                from: FromMarker.read(xmlDoc, xmlDoc.queryOneChild(elem, "from")),
                to: ToMarker.read(xmlDoc, xmlDoc.queryOneChild(elem, "to")),
                pic: Picture.read(xmlDoc, xmlDoc.queryOneChild(elem, "pic")),
                // attributes
                editAs: <OpenXml.ST_EditAs>xmlDoc.attrString(elem, "editAs"),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("xdr:twoCellAnchor")
                .attrString("editAs", inst.editAs, true)
                .element;
            elem.appendChild(FromMarker.write(xmlDoc, inst.from));
            elem.appendChild(ToMarker.write(xmlDoc, inst.to));
            elem.appendChild(Picture.write(xmlDoc, inst.pic));
            elem.appendChild(ClientData.write(xmlDoc, inst.clientData));
            return elem;
        }
    };

}

export = WorksheetDrawing;