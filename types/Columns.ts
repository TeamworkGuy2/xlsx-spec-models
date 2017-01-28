import Column = require("./Column");

class Columns {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Columns> = Columns; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Columns {
        xmlDoc.validator.expectNode(elem, "cols", "worksheet");
        var colElems = xmlDoc.queryAllChilds(elem, "col");
        return {
            cols: xmlDoc.readMulti(Column.read, colElems),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Columns): HTMLElement {
        var elem = xmlDoc.dom.createElement("cols");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Column.write, inst.cols));
        return elem;
    }

}

export = Columns;