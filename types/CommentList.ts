import Comment = require("./Comment");

class CommentList {
    private static type: OpenXmlIo.ReadWrite<OpenXml.CommentList> = CommentList; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.CommentList {
        xmlDoc.validator.expectNode(elem, "commentList", "comments");
        var commentElems = xmlDoc.queryAllChilds(elem, "comment");
        return {
            comments: xmlDoc.readMulti(Comment.read, commentElems),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.CommentList): ElementLike {
        var elem = xmlDoc.dom.createElement("commentList");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Comment.write, inst.comments));
        return elem;
    }

}

export = CommentList;