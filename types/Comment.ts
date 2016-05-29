import CommentText = require("./CommentText");

/** <comment> (Comment) "x:comment"
 * parent: commentList (§18.7.4)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.comment.aspx
 */
class Comment {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Comment> = Comment; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.Comment {
        if (elem.tagName !== "comment") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "comment", "comments"); }

        var textElem = xmlDoc.domHelper.queryOneChild(elem, "text");
        var text = CommentText.read(xmlDoc, textElem);

        var attrs = elem.attributes;
        return {
            authorId: xmlDoc.domHelper.attrInt(attrs, "authorId"),
            ref: xmlDoc.domHelper.attrString(attrs, "ref"),
            shapeId: xmlDoc.domHelper.attrInt(attrs, "shapeId"),
            text: text,
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.Comment): HTMLElement {
        var elem = xmlDoc.domBldr.create("comment")
            .attrString("ref", inst.ref)
            .attrInt("authorId", inst.authorId)
            .attrInt("shapeId", inst.shapeId)
            .element;
        elem.appendChild(CommentText.write(xmlDoc, inst.text));
        return elem;
    }

}

export = Comment;