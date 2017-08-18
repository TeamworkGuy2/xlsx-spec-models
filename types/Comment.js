"use strict";
var CommentText = require("./CommentText");
var Comment = (function () {
    function Comment() {
    }
    Comment.read = function (xmlDoc, elem) {
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
    };
    Comment.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("comment")
            .attrString("ref", inst.ref)
            .attrInt("authorId", inst.authorId)
            .attrInt("shapeId", inst.shapeId)
            .element;
        elem.appendChild(CommentText.write(xmlDoc, inst.text));
        return elem;
    };
    Comment.type = Comment; // TODO type-checker
    return Comment;
}());
module.exports = Comment;
