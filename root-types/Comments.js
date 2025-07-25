"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentText = exports.CommentList = exports.Comment = exports.Authors = exports.Author = exports.Comments = void 0;
var RichTextRun_1 = require("../types/RichTextRun");
var StringElement_1 = require("../types/StringElement");
var Text_1 = require("../types/Text");
exports.Comments = {
    read: function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "comments", "root element of SpreadsheetML Comments part");
        var authorElem = xmlDoc.queryOneChild(elem, "authors");
        var commentListElem = xmlDoc.queryOneChild(elem, "commentList");
        return {
            authors: exports.Authors.read(xmlDoc, authorElem),
            commentList: exports.CommentList.read(xmlDoc, commentListElem),
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("comments");
        elem.appendChild(exports.Authors.write(xmlDoc, inst.authors));
        elem.appendChild(exports.CommentList.write(xmlDoc, inst.commentList));
        return elem;
    }
};
exports.Author = {
    read: function (xmlDoc, elem) {
        return StringElement_1.StringElement.read(xmlDoc, elem, "author", "authors");
    },
    write: function (xmlDoc, inst) {
        return StringElement_1.StringElement.write(xmlDoc, inst, "author");
    }
};
exports.Authors = {
    read: function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "authors", "comments");
        var authorElems = xmlDoc.queryAllChilds(elem, "author");
        return {
            authors: xmlDoc.readMulti(exports.Author.read, authorElems),
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("authors");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(exports.Author.write, inst.authors));
        return elem;
    }
};
exports.Comment = {
    read: function (xmlDoc, elem) {
        var _a, _b;
        xmlDoc.validator.expectNode(elem, "comment", "comments");
        var textElem = xmlDoc.queryOneChild(elem, "text");
        var text = exports.CommentText.read(xmlDoc, textElem);
        return {
            authorId: (_a = xmlDoc.attrInt(elem, "authorId")) !== null && _a !== void 0 ? _a : 0,
            ref: (_b = xmlDoc.attrString(elem, "ref")) !== null && _b !== void 0 ? _b : "",
            shapeId: xmlDoc.attrInt(elem, "shapeId"),
            text: text,
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("comment")
            .attrString("ref", inst.ref)
            .attrInt("authorId", inst.authorId)
            .attrInt("shapeId", inst.shapeId)
            .element;
        elem.appendChild(exports.CommentText.write(xmlDoc, inst.text));
        return elem;
    }
};
exports.CommentList = {
    read: function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "commentList", "comments");
        var commentElems = xmlDoc.queryAllChilds(elem, "comment");
        return {
            comments: xmlDoc.readMulti(exports.Comment.read, commentElems),
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("commentList");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(exports.Comment.write, inst.comments));
        return elem;
    }
};
exports.CommentText = {
    read: function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "text", "comment");
        var rtrElems = xmlDoc.queryAllChilds(elem, "r");
        var tElem = xmlDoc.queryOneChild(elem, "t", false);
        return {
            rs: xmlDoc.readMulti(RichTextRun_1.RichTextRun.read, rtrElems),
            t: tElem ? Text_1.Text.read(xmlDoc, tElem) : null,
        };
    },
    write: function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("text");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(RichTextRun_1.RichTextRun.write, inst.rs));
        if (inst.t) {
            elem.appendChild(Text_1.Text.write(xmlDoc, inst.t));
        }
        return elem;
    }
};
