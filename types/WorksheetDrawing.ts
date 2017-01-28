import TwoCellAnchor = require("./TwoCellAnchor");

class WorksheetDrawing {
    private static type: OpenXmlIo.ReadWrite<OpenXml.WorksheetDrawing> = WorksheetDrawing; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.WorksheetDrawing {
        xmlDoc.validator.expectNode(elem, "xdr:wsDr", "root element of SpreadsheetML Drawings part");
        var twoCellAnchorElems = xmlDoc.queryAllChilds(elem, "twoCellAnchor");
        return {
            twoCellAnchors: xmlDoc.readMulti(TwoCellAnchor.read, twoCellAnchorElems),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.WorksheetDrawing): HTMLElement {
        var elem = xmlDoc.dom.createElement("xdr:wsDr");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(TwoCellAnchor.write, inst.twoCellAnchors));
        return elem;
    }

}

export = WorksheetDrawing;