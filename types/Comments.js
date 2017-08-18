"use strict";
var Authors = require("./Authors");
var CommentList = require("./CommentList");
var Comments = (function () {
    function Comments() {
    }
    Comments.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "comments", "root element of SpreadsheetML Comments part");
        var authorElem = xmlDoc.queryOneChild(elem, "authors");
        var commentListElem = xmlDoc.queryOneChild(elem, "commentList");
        return {
            authors: Authors.read(xmlDoc, authorElem),
            commentList: CommentList.read(xmlDoc, commentListElem),
        };
    };
    Comments.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("comments");
        elem.appendChild(Authors.write(xmlDoc, inst.authors));
        elem.appendChild(CommentList.write(xmlDoc, inst.commentList));
        return elem;
    };
    Comments.type = Comments; // TODO type-checker
    return Comments;
}());
module.exports = Comments;
