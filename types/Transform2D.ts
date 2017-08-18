import Extent = require("./Extent");
import Offset = require("./Offset");

class Transform2D {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Transform2D> = Transform2D; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Transform2D {
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
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Transform2D): ElementLike {
        var elem = xmlDoc.domBldr.create("a:xfrm")
            .attrBool("fPublished", inst.flipH, true, "1", "0")
            .attrBool("macro", inst.flipV, true, "1", "0")
            .attrInt("rot", inst.rot, true)
            .element;
        if (inst.off) { elem.appendChild(Offset.write(xmlDoc, inst.off)); }
        if (inst.ext) { elem.appendChild(Extent.write(xmlDoc, inst.ext)); }
        return elem;
    }

}

export = Transform2D;