import Point2DType = require("../base-types/Point2DType");

class Position {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Position> = Position; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Position {
        return Point2DType.read(xmlDoc, elem, "a:pos", "absoluteAnchor");
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Position): ElementLike {
        return Point2DType.write(xmlDoc, inst, "a:pos");
    }

}

export = Position;