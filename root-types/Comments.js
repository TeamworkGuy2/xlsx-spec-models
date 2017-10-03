"use strict";
var RichTextRun = require("../types/RichTextRun");
var StringElement = require("../types/StringElement");
var Text = require("../types/Text");
var Comments;
(function (Comments_1) {
    Comments_1.Comments = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "comments", "root element of SpreadsheetML Comments part");
            var authorElem = xmlDoc.queryOneChild(elem, "authors");
            var commentListElem = xmlDoc.queryOneChild(elem, "commentList");
            return {
                authors: Comments_1.Authors.read(xmlDoc, authorElem),
                commentList: Comments_1.CommentList.read(xmlDoc, commentListElem),
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("comments");
            elem.appendChild(Comments_1.Authors.write(xmlDoc, inst.authors));
            elem.appendChild(Comments_1.CommentList.write(xmlDoc, inst.commentList));
            return elem;
        }
    };
    Comments_1.Author = {
        read: function (xmlDoc, elem) {
            return StringElement.read(xmlDoc, elem, "author", "authors");
        },
        write: function (xmlDoc, inst) {
            return StringElement.write(xmlDoc, inst, "author");
        }
    };
    Comments_1.Authors = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "authors", "comments");
            var authorElems = xmlDoc.queryAllChilds(elem, "author");
            return {
                authors: xmlDoc.readMulti(Comments_1.Author.read, authorElems),
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("authors");
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Comments_1.Author.write, inst.authors));
            return elem;
        }
    };
    Comments_1.Comment = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "comment", "comments");
            var attrs = elem.attributes;
            var textElem = xmlDoc.queryOneChild(elem, "text");
            var text = Comments_1.CommentText.read(xmlDoc, textElem);
            return {
                authorId: xmlDoc.attrInt(attrs, "authorId"),
                ref: xmlDoc.attrString(attrs, "ref"),
                shapeId: xmlDoc.attrInt(attrs, "shapeId"),
                text: text,
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("comment")
                .attrString("ref", inst.ref)
                .attrInt("authorId", inst.authorId)
                .attrInt("shapeId", inst.shapeId)
                .element;
            elem.appendChild(Comments_1.CommentText.write(xmlDoc, inst.text));
            return elem;
        }
    };
    Comments_1.CommentList = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "commentList", "comments");
            var commentElems = xmlDoc.queryAllChilds(elem, "comment");
            return {
                comments: xmlDoc.readMulti(Comments_1.Comment.read, commentElems),
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("commentList");
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(Comments_1.Comment.write, inst.comments));
            return elem;
        }
    };
    Comments_1.CommentText = {
        read: function (xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "text", "comment");
            var rtrElems = xmlDoc.queryAllChilds(elem, "r");
            var tElem = xmlDoc.queryOneChild(elem, "t");
            return {
                rs: xmlDoc.readMulti(RichTextRun.read, rtrElems),
                t: tElem ? Text.read(xmlDoc, tElem) : null,
            };
        },
        write: function (xmlDoc, inst) {
            var elem = xmlDoc.dom.createElement("text");
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(RichTextRun.write, inst.rs));
            if (inst.t) {
                elem.appendChild(Text.write(xmlDoc, inst.t));
            }
            return elem;
        }
    };
})(Comments || (Comments = {}));
module.exports = Comments;
