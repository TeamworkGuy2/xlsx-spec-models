import ClientData = require("./ClientData");
import FromMarker = require("./FromMarker");
import Picture = require("./Picture");
import ToMarker = require("./ToMarker");

class TwoCellAnchor {
    private static type: OpenXmlIo.ReadWrite<OpenXml.TwoCellAnchor> = TwoCellAnchor; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.TwoCellAnchor {
        xmlDoc.validator.expectNode(elem, "xdr:twoCellAnchor", "xdr:wsDr");

        var attrs = elem.attributes;
        return {
            clientData: ClientData.read(xmlDoc, xmlDoc.queryOneChild(elem, "clientData")),
            from: FromMarker.read(xmlDoc, xmlDoc.queryOneChild(elem, "from")),
            to: ToMarker.read(xmlDoc, xmlDoc.queryOneChild(elem, "to")),
            pic: Picture.read(xmlDoc, xmlDoc.queryOneChild(elem, "pic")),
            // attributes
            editAs: <OpenXml.ST_EditAs>xmlDoc.attrString(attrs, "editAs"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.TwoCellAnchor): ElementLike {
        var elem = xmlDoc.domBldr.create("xdr:twoCellAnchor")
            .attrString("editAs", inst.editAs, true)
            .element;
        elem.appendChild(FromMarker.write(xmlDoc, inst.from));
        elem.appendChild(ToMarker.write(xmlDoc, inst.to));
        elem.appendChild(Picture.write(xmlDoc, inst.pic));
        elem.appendChild(ClientData.write(xmlDoc, inst.clientData));
        return elem;
    }

}

export = TwoCellAnchor;