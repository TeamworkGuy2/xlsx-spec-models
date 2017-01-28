import Point2DType = require("../base-types/Point2DType");

class Offset {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Offset> = Offset; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Offset {
        return Point2DType.read(xmlDoc, elem, "a:off", "xfrm");
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Offset): HTMLElement {
        return Point2DType.write(xmlDoc, inst, "a:off");
    }

}

export = Offset;