import Comment = require("./Comment");

/** <commentList> (List of Comments) "x:commentList"
 * parent: comments (§18.7.6)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.commentlist.aspx
 */
class CommentList {
    private static type: OpenXmlIo.ReadWrite<OpenXml.CommentList> = CommentList; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.CommentList {
        if (elem.tagName !== "commentList") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "commentList", "comments"); }
        var commentElems = xmlDoc.domHelper.queryAllChilds(elem, "comment");
        return {
            comments: xmlDoc.readOpenXml.readMulti(xmlDoc, Comment.read, commentElems),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.CommentList): HTMLElement {
        var elem = xmlDoc.dom.createElement("commentList");
        var commentElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, Comment.write, inst.comments);
        xmlDoc.domHelper.addChilds(elem, commentElems);
        return elem;
    }

}

export = CommentList;