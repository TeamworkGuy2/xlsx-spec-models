import MarkerType = require("../base-types/MarkerType");

class ToMarker {
    private static type: OpenXmlIo.ReadWrite<OpenXml.ToMarker> = ToMarker; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.ToMarker {
        return MarkerType.read(xmlDoc, elem, "xdr:to", "anchor, twoCellAnchor");
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.ToMarker): HTMLElement {
        return MarkerType.write(xmlDoc, inst, "xdr:to");
    }

}

export = ToMarker;