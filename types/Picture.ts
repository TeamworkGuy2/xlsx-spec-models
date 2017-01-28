import ShapeProperties = require("./ShapeProperties");

class Picture {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Picture> = Picture; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Picture {
        xmlDoc.validator.expectNode(elem, "xdr:pic", "absoluteAnchor, grpSp, oneCellAnchor, twoCellAnchor");
        var blipFillElem = xmlDoc.queryOneChild(elem, "blipFill");
        var nvPicPrElem = xmlDoc.queryOneChild(elem, "nvPicPr");
        var spPrElem = xmlDoc.queryOneChild(elem, "spPr");

        var attrs = elem.attributes;
        return {
            blipFill: <any>blipFillElem,
            nvPicPr: <any>nvPicPrElem,
            spPr: ShapeProperties.read(xmlDoc, spPrElem),
            // attributes
            fPublished: xmlDoc.attrBool(attrs, "fPublished"),
            macro: xmlDoc.attrString(attrs, "macro"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Picture): HTMLElement {
        var elem = xmlDoc.domBldr.create("xdr:pic")
            .attrBool("fPublished", inst.fPublished, true, "1", "0")
            .attrString("macro", inst.macro, true)
            .element;
        elem.appendChild(<any>inst.nvPicPr);
        elem.appendChild(<any>inst.blipFill);
        elem.appendChild(ShapeProperties.write(xmlDoc, inst.spPr));
        return elem;
    }

}

export = Picture;