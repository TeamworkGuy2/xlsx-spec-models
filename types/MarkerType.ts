import { ColumnId } from "../types/ColumnId";
import { ColumnOffset } from "../types/ColumnOffset";
import { RowId } from "../types/RowId";
import { RowOffset } from "../types/RowOffset";

export class MarkerType {
    private static type: OpenXmlIo.ReadWriteNamed<OpenXml.MarkerType> = MarkerType; // TODO type-checker

    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: Element, expectedTagName: string, parentTags?: string): OpenXml.MarkerType {
        xmlDoc.validator.expectNode(elem, expectedTagName, parentTags);
        var colElem = xmlDoc.queryOneChild(elem, "col");
        var colOffElem = xmlDoc.queryOneChild(elem, "colOff");
        var rowElem = xmlDoc.queryOneChild(elem, "row");
        var rowOffElem = xmlDoc.queryOneChild(elem, "rowOff");

        return {
            col: ColumnId.read(xmlDoc, colElem),
            colOff: ColumnOffset.read(xmlDoc, colOffElem),
            row: RowId.read(xmlDoc, rowElem),
            rowOff: RowOffset.read(xmlDoc, rowOffElem),
        };
    }

    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.MarkerType, tagName: string): ElementLike {
        var elem = xmlDoc.dom.createElement(tagName);
        elem.appendChild(ColumnId.write(xmlDoc, inst.col));
        elem.appendChild(ColumnOffset.write(xmlDoc, inst.colOff));
        elem.appendChild(RowId.write(xmlDoc, inst.row));
        elem.appendChild(RowOffset.write(xmlDoc, inst.rowOff));
        return elem;
    }
}