"use strict";
var Comment = require("./Comment");
var CommentList = (function () {
    function CommentList() {
    }
    CommentList.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "commentList", "comments");
        var commentElems = xmlDoc.queryAllChilds(elem, "comment");
        return {
            comments: xmlDoc.readMulti(Comment.read, commentElems),
        };
    };
    CommentList.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("commentList");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Comment.write, inst.comments));
        return elem;
    };
    return CommentList;
}());
CommentList.type = CommentList; // TODO type-checker
module.exports = CommentList;
