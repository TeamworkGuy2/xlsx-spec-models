import CommentText = require("./CommentText");

class Comment {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Comment> = Comment; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Comment {
        xmlDoc.validator.expectNode(elem, "comment", "comments");
        var attrs = elem.attributes;

        var textElem = xmlDoc.queryOneChild(elem, "text");
        var text = CommentText.read(xmlDoc, textElem);

        return {
            authorId: xmlDoc.attrInt(attrs, "authorId"),
            ref: xmlDoc.attrString(attrs, "ref"),
            shapeId: xmlDoc.attrInt(attrs, "shapeId"),
            text: text,
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Comment): HTMLElement {
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