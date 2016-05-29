import Authors = require("./Authors");
import CommentList = require("./CommentList");

/** <comments> (Comments) "x:comments"
 * parent: root element of SpreadsheetML Comments part
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.comments.aspx
 */
class Comments {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Comments> = Comments; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.Comments {
        if (elem.tagName !== "comments") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "comments", "root element of SpreadsheetML Comments part"); }

        var authorElem = xmlDoc.domHelper.queryOneChild(elem, "authors");
        var commentListElem = xmlDoc.domHelper.queryOneChild(elem, "commentList");

        return {
            authors: Authors.read(xmlDoc, authorElem),
            commentList: CommentList.read(xmlDoc, commentListElem),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.Comments): HTMLElement {
        var elem = xmlDoc.dom.createElement("comments");

        var authorElems = Authors.write(xmlDoc, inst.authors);
        elem.appendChild(authorElems);

        var commentElems = CommentList.write(xmlDoc, inst.commentList);
        elem.appendChild(commentElems);

        return elem;
    }

}

export = Comments;