import ColumnId = require("../types/ColumnId");
import ColumnOffset = require("../types/ColumnOffset");
import RowId = require("../types/RowId");
import RowOffset = require("../types/RowOffset");

class MarkerType {
    private static type: OpenXmlIo.ReadWrite<OpenXml.MarkerType> = MarkerType; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement, expectedTagName: string, parentTags?: string): OpenXml.MarkerType {
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
        var colElem = xmlDoc.queryOneChild(elem, "col");
        var colOffElem = xmlDoc.queryOneChild(elem, "colOff");
        var rowElem = xmlDoc.queryOneChild(elem, "row");
        var rowOffElem = xmlDoc.queryOneChild(elem, "rowOff");

        var attrs = elem.attributes;
        return {
            col: ColumnId.read(xmlDoc, colElem),
            colOff: ColumnOffset.read(xmlDoc, colOffElem),
            row: RowId.read(xmlDoc, rowElem),
            rowOff: RowOffset.read(xmlDoc, rowOffElem),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.MarkerType, tagName: string): HTMLElement {
        var elem = xmlDoc.dom.createElement(tagName);
        elem.appendChild(ColumnId.write(xmlDoc, inst.col));
        elem.appendChild(ColumnOffset.write(xmlDoc, inst.colOff));
        elem.appendChild(RowId.write(xmlDoc, inst.row));
        elem.appendChild(RowOffset.write(xmlDoc, inst.rowOff));
        return elem;
    }

}

export = MarkerType;