import RichTextRun = require("../types/RichTextRun");
import StringElement = require("../types/StringElement");
import Text = require("../types/Text");

module Comments {

    export var Comments: OpenXmlIo.ReadWrite<OpenXml.Comments> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "comments", "root element of SpreadsheetML Comments part");

            var authorElem = xmlDoc.queryOneChild(elem, "authors");
            var commentListElem = xmlDoc.queryOneChild(elem, "commentList");

            return {
                authors: Authors.read(xmlDoc, authorElem),
                commentList: CommentList.read(xmlDoc, commentListElem),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("comments");
            elem.appendChild(Authors.write(xmlDoc, inst.authors));
            elem.appendChild(CommentList.write(xmlDoc, inst.commentList));
            return elem;
        }
    };


    export var Author: OpenXmlIo.ReadWrite<OpenXml.Author> = {
        read(xmlDoc, elem) {
            return StringElement.read(xmlDoc, elem, "author", "authors");
        },

        write(xmlDoc, inst) {
            return StringElement.write(xmlDoc, inst, "author");
        }
    };


    export var Authors: OpenXmlIo.ReadWrite<OpenXml.Authors> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "authors", "comments");
            var authorElems = xmlDoc.queryAllChilds(elem, "author");
            return {
                authors: xmlDoc.readMulti(Author.read, authorElems),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("authors");
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Author.write, inst.authors));
            return elem;
        }
    };


    export var Comment: OpenXmlIo.ReadWrite<OpenXml.Comment> = {
        read(xmlDoc, elem) {
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
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("comment")
                .attrString("ref", inst.ref)
                .attrInt("authorId", inst.authorId)
                .attrInt("shapeId", inst.shapeId)
                .element;
            elem.appendChild(CommentText.write(xmlDoc, inst.text));
            return elem;
        }
    };


    export var CommentList: OpenXmlIo.ReadWrite<OpenXml.CommentList> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "commentList", "comments");
            var commentElems = xmlDoc.queryAllChilds(elem, "comment");
            return {
                comments: xmlDoc.readMulti(Comment.read, commentElems),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("commentList");
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Comment.write, inst.comments));
            return elem;
        }
    };


    export var CommentText: OpenXmlIo.ReadWrite<OpenXml.CommentText> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "text", "comment");
            var rtrElems = xmlDoc.queryAllChilds(elem, "r");
            var tElem = xmlDoc.queryOneChild(elem, "t");
            return {
                rs: xmlDoc.readMulti(RichTextRun.read, rtrElems),
                t: tElem ? Text.read(xmlDoc, tElem) : null,
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("text");
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(RichTextRun.write, inst.rs));
            if (inst.t) { elem.appendChild(Text.write(xmlDoc, inst.t)); }
            return elem;
        }
    };

}

export = Comments;