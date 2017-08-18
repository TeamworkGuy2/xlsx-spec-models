import Authors = require("./Authors");
import CommentList = require("./CommentList");

class Comments {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Comments> = Comments; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Comments {
        xmlDoc.validator.expectNode(elem, "comments", "root element of SpreadsheetML Comments part");

        var authorElem = xmlDoc.queryOneChild(elem, "authors");
        var commentListElem = xmlDoc.queryOneChild(elem, "commentList");

        return {
            authors: Authors.read(xmlDoc, authorElem),
            commentList: CommentList.read(xmlDoc, commentListElem),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Comments): ElementLike {
        var elem = xmlDoc.dom.createElement("comments");
        elem.appendChild(Authors.write(xmlDoc, inst.authors));
        elem.appendChild(CommentList.write(xmlDoc, inst.commentList));
        return elem;
    }

}

export = Comments;