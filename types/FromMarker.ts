import MarkerType = require("../base-types/MarkerType");

class FromMarker {
    private static type: OpenXmlIo.ReadWrite<OpenXml.FromMarker> = FromMarker; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.FromMarker {
        return MarkerType.read(xmlDoc, elem, "xdr:from", "anchor, oneCellAnchor, twoCellAnchor");
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.FromMarker): HTMLElement {
        return MarkerType.write(xmlDoc, inst, "xdr:from");
    }

}

export = FromMarker;